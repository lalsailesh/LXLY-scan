import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAccount } from "wagmi";
import AutoClaimModal from "./AutoClaimModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const { open, close } = useWeb3Modal();
  const { address } = useAccount();
  const router = useRouter();

  const connectWallet = async () => {
    try {
      await open();
    } catch (e) {
      console.log(e, "ConnectWallet");
    }
  };

  return (
    <nav className="text-white font-Roboto flex justify-between w-screen px-20 mx-auto py-3 border-b-[1px] border-[#161616] items-center">
      <p
        onClick={() => {
          router.push("/");
        }}
        className="cursor-pointer"
      >
        LXLY Scan
      </p>

      <div className="flex gap-4 items-center text-sm text-[#A0A0A0]">
        <p
          onClick={() => {
            setShowModal(true);
          }}
          className="cursor-pointer hover:text-white"
        >
          Setup Autoclaim
        </p>

        <button
          onClick={connectWallet}
          className="py-2 w-[150px] rounded-sm bg-[#161616] font-medium hover:bg-[#1c1c1c]"
        >
          {address
            ? address.slice(0, 6) + "..." + address.slice(-6)
            : "Connect"}
        </button>
      </div>

      {showModal && (
        <AutoClaimModal
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
