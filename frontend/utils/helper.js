import { PiArrowsLeftRightFill } from "react-icons/pi";
import { IoCube, IoPerson } from "react-icons/io5";
import { AiFillClockCircle } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { MdOutlineStickyNote2 } from "react-icons/md";

const iconStyle = "text-[#f3f3f3]";

export const getTransactionDetails = (
  transaction,
  blockNum,
  timestamp,
  nonce,
  sender,
  network,
  status
) => {
  return [
    [
      {
        icon: <PiArrowsLeftRightFill className={iconStyle} size={15} />,
        label: "Transaction Hash",
        value: transaction,
        isTransaction: true,
      },
    ],
    [
      {
        icon: <MdOutlineStickyNote2 className={iconStyle} size={15} />,
        label: "Status",
        value: status,
      },
    ],
    [
      {
        icon: <IoCube className={iconStyle} size={15} />,
        label: "Block Number",
        value: blockNum,
      },
      {
        icon: <AiFillClockCircle className={iconStyle} size={15} />,
        label: "Created",
        value: timestamp,
      },
    ],
    [
      {
        icon: <MdOutlineStickyNote2 className={iconStyle} size={15} />,
        label: "Index",
        value: nonce,
      },
    ],
    [
      {
        icon: <IoPerson className={iconStyle} size={15} />,
        label: "Sender",
        value: sender,
        isTransaction: true,
      },
      {
        icon: <FaNetworkWired className={iconStyle} size={15} />,
        label: "Network",
        value: network,
      },
    ],
  ];
};

export const getBridgedTransactionDetails = ({
  transaction,
  blockNum,
  timestamp,
  data,
  from,
  network,
  amount,
  gasLimit,
  status,
}) => {
  return [
    [
      {
        icon: <PiArrowsLeftRightFill className={iconStyle} size={15} />,
        label: "Source transaction hash",
        value: transaction,
        isTransaction: true,
      },
    ],
    [
      {
        icon: <IoCube className={iconStyle} size={15} />,
        label: "Block number",
        value: blockNum,
      },
      {
        icon: <AiFillClockCircle className={iconStyle} size={15} />,
        label: "Created",
        value: timestamp,
      },
    ],
    // [
    //   {
    //     icon: <MdOutlineStickyNote2 className={iconStyle} size={15} />,
    //     label: "Status",
    //     value: status,
    //   },
    // ],
    [
      {
        icon: <MdOutlineStickyNote2 className={iconStyle} size={15} />,
        label: "Data",
        value: data,
      },
    ],
    [
      {
        icon: <IoPerson className={iconStyle} size={15} />,
        label: "From",
        value: from,
        isTransaction: true,
      },
    ],
    [
      {
        icon: <FaNetworkWired className={iconStyle} size={15} />,
        label: "Network",
        value: network,
      },
    ],
    [
      {
        icon: <FaNetworkWired className={iconStyle} size={15} />,
        label: "Amount",
        value: amount,
      },
      {
        icon: <FaNetworkWired className={iconStyle} size={15} />,
        label: "Gas Limit",
        value: gasLimit,
      },
    ],
  ];
};

export const getClaimedTransactionDetails = ({
  transaction,
  blockNum,
  timestamp,
  data,
  from,
  network,
  amount,
  gasLimit,
  status,
}) => {
  return [
    [
      {
        icon: <PiArrowsLeftRightFill className={iconStyle} size={15} />,
        label: "Destination transaction hash",
        value: transaction,
        isTransaction: true,
      },
    ],
    [
      {
        icon: <IoCube className={iconStyle} size={15} />,
        label: "Block number",
        value: blockNum,
      },
      {
        icon: <AiFillClockCircle className={iconStyle} size={15} />,
        label: "Created",
        value: timestamp,
      },
    ],
    // [
    //   {
    //     icon: <MdOutlineStickyNote2 className={iconStyle} size={15} />,
    //     label: "Status",
    //     value: status,
    //   },
    // ],
    [
      {
        icon: <MdOutlineStickyNote2 className={iconStyle} size={15} />,
        label: "Data",
        value: data,
      },
    ],
    [
      {
        icon: <IoPerson className={iconStyle} size={15} />,
        label: "From",
        value: from,
        isTransaction: true,
      },
    ],
    [
      {
        icon: <FaNetworkWired className={iconStyle} size={15} />,
        label: "Network",
        value: network,
      },
    ],
    [
      {
        icon: <FaNetworkWired className={iconStyle} size={15} />,
        label: "Amount",
        value: amount,
      },
      {
        icon: <FaNetworkWired className={iconStyle} size={15} />,
        label: "Gas Limit",
        value: gasLimit,
      },
    ],
  ];
};
