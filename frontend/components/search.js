import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { ZKEvmBridgeAbi, ZKEvmBridge } from "@/constants";
import { writeContract, waitForTransaction } from "@wagmi/core";

export default function Search() {
  const [data, setData] = useState([]);

  const baseURL = "https://bridge-api.public.zkevm-test.net/";
  const axiosInstance = axios.create({
    baseURL,
  });
  const mekrleProofString = "/merkle-proof";
  const getClaimsFromAcc = "/bridges/";

  const claim = async (currentDeposit) => {
    try {
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
        functionName: "claimMessage",
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
      console.log("claim message succesfully send: ", hash);
      await waitForTransaction({
        hash,
      });
      console.log("mined tx");
    } catch (e) {
      console.log(e, "claim fn");
    }
  };
  const getDetails = async () => {
    try {
      const address = "0xD1A36C9aDE0C3814360c4ea7923BCf1B5F4eb7b8";
      const depositAxions = await axiosInstance.get(
        getClaimsFromAcc + address,
        {
          params: { limit: 100, offset: 0 },
        }
      );
      const depositsArray = depositAxions.data.deposits;
      console.log(depositsArray);
      setData(depositsArray);
    } catch (e) {
      console.log(e, "getDetails");
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div>
      <input />
      <button onClick={() => claim(data[0])}>Claim</button>
    </div>
  );
}
