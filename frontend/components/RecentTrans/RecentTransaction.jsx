import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import StatusBadge from './StatusBadge';

const RecentTransaction = ({ transaction, isAddressPage = false }) => {
  const {
    blockNumber,
    transactionHash,
    blockTimestamp,
    network,
    status,
    destinationAddress,
  } = transaction;

  const router = useRouter();

  return (
    <ul className='flex mb-1 rounded-sm items-center w-full py-4 font-light text-slate-200 text-sm border-b-[1px] border-[#181818] bg-[#161616] hover:bg-[#202020] cursor-pointer'>
      <li className={`pl-4 ${isAddressPage ? 'flex-[0.15]' : 'flex-[0.25]'}`}>
        <StatusBadge status={network} />
      </li>
      <li
        onClick={() => {
          router.push(`/tx/${transactionHash}`);
        }}
        className={`pl-4 ${
          isAddressPage ? 'flex-[0.24]' : 'flex-[0.5]'
        } hover:underline`}>
        {transactionHash.slice(0, 13) + '.....' + transactionHash.slice(-13)}
      </li>

      {isAddressPage && (
        <li className='pl-4 flex-[0.24] text-[#737373] hover:underline'>
          {destinationAddress.slice(0, 13) +
            '.....' +
            destinationAddress.slice(-13)}
        </li>
      )}

      {isAddressPage && (
        <li className={`pl-4 flex-[0.24] text-[#737373]`}>
          {new Date(+blockTimestamp * 1000).toString()}
        </li>
      )}

      <li
        className={`pl-4  ${
          isAddressPage ? 'flex-[0.15]' : 'flex-[0.25]'
        } text-[#737373]`}>
        {blockNumber}
      </li>
    </ul>
  );
};

export default RecentTransaction;
