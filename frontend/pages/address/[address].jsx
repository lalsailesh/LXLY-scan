'use client';

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import UserTransactionOverview from '@/components/Overview/UserTransactionOverview';
import RecentTransactionList from '@/components/RecentTrans/RecentTransactionList';
import { addressPageHeaders, SERVER_URI } from '@/constants';
import { getRequest } from '@/apis';
import TableShimmer from '@/components/Skeletons/TableShimmer';

const Address = () => {
  const [bridgedTxDetails, setBridgedTxDetails] = useState(null);
  const [claimTxDetails, setClaimTxDetails] = useState(null);

  const router = useRouter();
  const { address } = router.query;

  const getDetails = async () => {
    const data = await getRequest(
      `${SERVER_URI}/transaction/address/${address}`
    );

    setBridgedTxDetails(data.bridgeTxs);
    setClaimTxDetails(data.claimTxs);
  };

  useEffect(() => {
    if (address) {
      getDetails();
    }
  }, [address]);

  return (
    <section className=' mx-auto font-Roboto '>
      <div className='py-10 w-[90%] mx-auto'>
        <p className='text-xs text-[#A0A0A0]'>Address</p>
        <p className='text-white text-lg'>{address}</p>
      </div>

      <UserTransactionOverview />

      <div className='flex flex-col '>
        {!bridgedTxDetails && <TableShimmer />}

        {bridgedTxDetails && bridgedTxDetails.length > 0 && (
          <RecentTransactionList
            isAddressPage={true}
            title={'Bridged'}
            data={bridgedTxDetails}
            headers={addressPageHeaders}
          />
        )}

        <div className={`${!bridgedTxDetails && '-mt-20'}`}>
          {claimTxDetails && claimTxDetails.length > 0 && (
            <RecentTransactionList
              isAddressPage={true}
              title={'Claimed'}
              data={claimTxDetails}
              headers={addressPageHeaders}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Address;
