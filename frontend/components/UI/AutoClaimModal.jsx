import React, { useRef, useState } from "react";
import Image from "next/image";
import Backdrop from "./Backdrop";
import { toast, ToastContainer } from "react-toastify";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import "react-toastify/dist/ReactToastify.css";
import { autoclaim, autoclaimABI } from "@/constants";
import {
  writeContract,
  waitForTransaction,
  switchNetwork,
  getNetwork,
} from "@wagmi/core";
import { goerli } from "viem/chains";

const AutoClaimModal = ({ onClose }) => {
  const { address } = useAccount();
  const { open, close } = useWeb3Modal();

  const autoClaimHandler = async () => {
    try {
      if (address) {
        const { chain, chains } = getNetwork();
        if (chain.id != "5") {
          await switchNetwork({
            chainId: goerli.id,
          });
        }
        // const input = document.getElementById("inputAddress").value;
        // const { hash } = await writeContract({
        //   address: autoclaim,
        //   abi: autoclaimABI,
        //   functionName: "registerClaimer",
        //   args: [input],
        // });
        // await waitForTransaction({
        //   hash,
        // });
        toast.success("Successfully setuped!");
      } else {
        await open();
      }
    } catch (error) {
      toast.error("Setup failed");
    }
  };

  return (
    <div>
      <Backdrop onClose={onClose} />
      <div className="w-[550px] min-h-[300px] font-Roboto text-[#EDEDEF] text-xl bg-[#0A0A0A] p-10 rounded-2xl fixed top-[50%] left-[50%] shadow-2xl -translate-x-[50%] -translate-y-[50%] z-10 rounded-b-2xl  overflow-hidden">
        <p>Setup Autoclaim</p>
        <div className="flex flex-col mt-8">
          <label className="text-sm  mb-1 text-gray-400">Address *</label>
          <input
            className="bg-[#161616] text-sm py-3 px-2 border border-gray-900 rounded-md placeholder:text-gray-500 text-gray-300  outline-none mb-5"
            type="text"
            id="inputAddress"
          />
        </div>

        <div className="flex flex-col ">
          <label className="text-sm text-gray-400 mb-1">
            Choose Claim Type *
          </label>
          <select class="bg-[#161616] outline-none border border-gray-900 mb-4  py-3 px-2 text-gray-300 text-sm rounded-lg ">
            <option selected unselectable="on" disabled>
              Select type from here
            </option>
            <option value={"Asset"}>Asset</option>
            <option value={"Message"}>Message</option>
          </select>
        </div>

        <p className="text-sm  text-green-400 ">
          Note: Auto-claim is only available for Goerli right now!
        </p>

        <button
          onClick={autoClaimHandler}
          className="bg-[#3d3d3d] text-sm w-full text-center py-3 rounded-md mt-8 hover:bg-white hover:text-black"
        >
          {address ? "Register Claim" : "Connect"}
        </button>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default AutoClaimModal;
