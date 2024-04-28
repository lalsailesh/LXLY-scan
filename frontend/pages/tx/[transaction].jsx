'use client';

import React, { startTransition, useEffect, useState } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

import TransactionItem from '@/components/Transaction/TransactionItem';
import { useRouter } from 'next/router';
import { getRequest } from '@/apis';
import { SERVER_URI } from '@/constants';
import {
  getBridgedTransactionDetails,
  getClaimedTransactionDetails,
  getTransactionDetails,
} from '@/utils/helper';
import TransactionComp from '@/components/Transaction/TransactionComp';
import axios from 'axios';
import { ZKEvmBridgeAbi, ZKEvmBridge } from '@/constants';
import { writeContract, waitForTransaction } from '@wagmi/core';
import { switchNetwork, getNetwork } from '@wagmi/core';
import { goerli, polygonZkEvmTestnet } from 'viem/chains';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Transaction = () => {
  const [currentTxInfo, setCurrentTxInfo] = useState(null);
  const [bridgedTxInfo, setBridgedTxInfo] = useState(null);
  const [claimedTxInfo, setClaimedTxInfo] = useState(null);
  const [currentDeposit, setCurrentDeposit] = useState();
  const [status, setStatus] = useState();
  const { open, close } = useWeb3Modal();
  const { address } = useAccount();

  const baseURL = 'https://bridge-api.public.zkevm-test.net/';
  const axiosInstance = axios.create({
    baseURL,
  });
  const mekrleProofString = '/merkle-proof';
  const getClaimsFromAcc = '/bridges/';
  const router = useRouter();
  const { transaction } = router.query;

  const setTransactionStates = (firstTx, secondTx) => {
    const bridgedTransactionDetails = getBridgedTransactionDetails({
      transaction: firstTx.transactionHash,
      blockNum: firstTx.blockNumber,
      timestamp: new Date(+(firstTx.blockTimestamp + '000')).toString(),
      data: firstTx.metadata,
      from: firstTx.from,
      network: firstTx.network,
      amount: firstTx.amount,
      gasLimit: firstTx.gasLimit,
      status: 'Delivered',
    });

    if (secondTx && secondTx.id) {
      const claimedTransactionDetails = getClaimedTransactionDetails({
        transaction: secondTx.transactionHash,
        blockNum: secondTx.blockNumber,
        timestamp: new Date(+(secondTx.blockTimestamp + '000')).toString(),
        data: secondTx.metadata,
        from: secondTx.from,
        network: secondTx.network,
        amount: secondTx.amount,
        gasLimit: secondTx.gasLimit,
        status: 'Delivered',
      });

      console.log(
        'txxx',
        claimedTransactionDetails,
        claimedTransactionDetails[0]
      );

      setClaimedTxInfo(claimedTransactionDetails);
    }
    setBridgedTxInfo(bridgedTransactionDetails);
  };
  const walletChange = async () => {
    try {
      if (!address) {
        await open();
      }
      const { chain, chains } = getNetwork();

      if (currentDeposit.dest_net == 0) {
        if (chain.id != '5') {
          await switchNetwork({
            chainId: goerli.id,
          });
        }
      }
      if (currentDeposit.dest_net == 1) {
        if (chain.id != '1442') {
          await switchNetwork({
            chainId: polygonZkEvmTestnet.id,
          });
        }
      }
    } catch (e) {
      console.log(e, 'walletChange');
    }
  };

  const claim = async () => {
    try {
      await walletChange();
      const proofAxios = await axiosInstance.get(mekrleProofString, {
        params: {
          deposit_cnt: currentDeposit.deposit_cnt,
          net_id: currentDeposit.orig_net,
        },
      });

      const { proof } = proofAxios.data;
      const { hash } = await writeContract({
        address: ZKEvmBridge,
        abi: ZKEvmBridgeAbi,
        functionName: currentDeposit.amount > 0 ? 'claimAsset' : 'claimMessage',
        args: [
          proof.merkle_proof,
          currentDeposit.deposit_cnt,
          proof.main_exit_root,
          proof.rollup_exit_root,
          currentDeposit.orig_net,
          currentDeposit.orig_addr,
          currentDeposit.dest_net,
          currentDeposit.dest_addr,
          currentDeposit.amount,
          currentDeposit.metadata,
        ],
      });
      console.log('claim message succesfully send: ', hash);
      await waitForTransaction({
        hash,
      });
      toast.success('Claimed transaction!');
    } catch (e) {
      console.log(e, 'claim fn');
      toast.error('Claimed failed!');
    }
  };

  const getTransactionInfo = async () => {
    const data = await getRequest(
      `${SERVER_URI}/transaction/txHash/${transaction}`
    );

    if (data.currentTx.__typename === 'BridgeEvent') {
      setTransactionStates(data.currentTx, data.oppositeTx);
    } else {
      setTransactionStates(data.oppositeTx, data.currentTx);
    }

    let status = '';


    if (data.currentTx && data.oppositeTx && data.oppositeTx.id) {
      status = "Delivered";
    } else {
      const address = data.currentTx.destinationAddress;
      const depositAxions = await axiosInstance.get(
        getClaimsFromAcc + address,
        {
          params: { limit: 200, offset: 0 },
        }
      );
      const depositsArray = depositAxions.data.deposits;
      for (let i = 0; i < depositsArray.length; i++) {
        const deposit = depositsArray[i];
        console.log('xxx', deposit);

        if (deposit.tx_hash == data.currentTx.transactionHash) {
          if (deposit.ready_for_claim && deposit.claim_tx_hash != '') {
            status = 'Delivered';
          } else if (deposit.ready_for_claim && deposit.claim_tx_hash == '') {
            status = 'Ready For Claim';
            setCurrentDeposit(deposit);
          } else {
            status = 'Inflight';
          }
          break;
        }
      }
    }

    const transactionDetails = getTransactionDetails(
      data.currentTx.transactionHash,
      data.currentTx.blockNumber,
      new Date(+(data.currentTx.blockTimestamp + '000')).toString(),
      data.currentTx.depositCount
        ? data.currentTx.depositCount
        : data.currentTx.index,
      data.currentTx.from,
      data.currentTx.network,
      status
    );
    setStatus(status);

    setCurrentTxInfo(transactionDetails);
  };

  useEffect(() => {
    getTransactionInfo();
  }, []);

  const renderTransactionItem = (
    icon,
    label,
    value,
    isTransaction = false,
    title
  ) => {
    return (
      <TransactionItem
        icon={icon}
        label={label}
        value={value}
        isTransaction={isTransaction}
        title={title}
        currentDeposit={currentDeposit}
        claim={claim}
        isClaimable={status == 'Ready For Claim'}
      />
    );
  };

  return (
    <div className='w-[90%] mx-auto font-Roboto text-white mt-8'>
      <h1 className='text-xl mb-8'>Transaction Details</h1>

      {currentTxInfo && (
        <TransactionComp
          title={'Basic Info'}
          transactionDetails={currentTxInfo}
          renderTransactionItem={renderTransactionItem}
        />
      )}

      <div className='pl-6 border-l-2 border-[#161616] flex flex-col gap-8 mt-8 pb-8'>
        {bridgedTxInfo && (
          <TransactionComp
            title={'Bridged Transaction Info'}
            transactionDetails={bridgedTxInfo}
            renderTransactionItem={renderTransactionItem}
          />
        )}
        {claimedTxInfo?.length > 0 &&
          claimedTxInfo[0][0].value !== undefined && (
            <TransactionComp
              title={'Claimed Transaction Info'}
              transactionDetails={claimedTxInfo}
              renderTransactionItem={renderTransactionItem}
            />
          )}
      </div>
    </div>
  );
};

export default Transaction;
