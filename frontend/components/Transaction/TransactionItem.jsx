import { Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { IoCopy } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFire } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";

const TransactionItem = ({
  icon,
  label,
  value,
  isTransaction = false,
  title,
  currentDeposit,
  claim,
  isClaimable,
}) => {
  const router = useRouter();

  console.log("xxx", isClaimable, currentDeposit, isTransaction);

  return (
    <div
      className={`flex w-full  items-center ${
        isTransaction ? "bg-[#1C1C1C]" : "bg-[#161616] "
      } p-4 rounded-sm font-Roboto mb-1`}
    >
      <div className="flex items-center gap-2 w-[220px]">
        {icon}
        <p className=" text-sm text-[#f0f0f0]">{label}</p>
      </div>
      <div className="flex gap-2 items-center ">
        {label === "Amount" && (
          <span>
            <MdOutlineAttachMoney className="text-green-500" />
          </span>
        )}
        <p
          onClick={() => {
            if (isTransaction) {
              if (value.length === 42) {
                router.push(`/address/${value}`);
              } else {
                router.push(`/tx/${value}`);
              }
            }
          }}
          className={` break-words max-w-[1000px] text-sm text-[#b9b9b9]  font-light tracking-wide  flex items-center gap-2 ${
            isTransaction && "hover:underline hover:text-white cursor-pointer "
          } `}
        >
          {value}{" "}
          {label === "Gas Limit" && (
            <span>{<BsFire className="text-orange-500" />}</span>
          )}
          {label === "Amount" && <span>Wei</span>}
        </p>

        {isTransaction ? (
          <IoCopy
            className="text-[#b9b9b9] cursor-pointer hover:text-white"
            size={15}
          />
        ) : null}

        {isClaimable &&
        currentDeposit &&
        isTransaction &&
        value.length === 66 &&
        title === "Basic Info" ? (
          <Tooltip title="Claim the bridged transaction">
            <button
              className=" ml-6 px-6 py-1 rounded-md bg-[#464646] font-medium hover:bg-[#111111] text-xs"
              onClick={claim}
            >
              Claim
            </button>
          </Tooltip>
        ) : null}
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default TransactionItem;
