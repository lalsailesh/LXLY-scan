import { BsCheck } from 'react-icons/bs';
import { PiArrowsClockwiseBold } from 'react-icons/pi';
import { FaEthereum } from 'react-icons/fa';
import Image from 'next/image';

const StatusBadge = ({ status }) => {
  const isDelivered = status === 'Goerli';
  const badgeStyle = isDelivered
    ? 'bg-white text-black'
    : 'bg-[#A77DFF] text-black';
  const Icon = isDelivered ? FaEthereum : PiArrowsClockwiseBold;

  return (
    <p
      className={`w-[90px] text-center py-1 rounded-full text-xs font-normal flex items-center justify-center ${badgeStyle}`}>
      {status === 'Goerli' ? (
        <>
          <Icon
            className={isDelivered ? '' : 'mr-1'}
            size={isDelivered ? 16 : 14}
          />
          {status}
        </>
      ) : (
        <>
          <Image
            src='/assets/polygon.png'
            height={20}
            width={20}
            className='mr-1'
          />
          {status}
        </>
      )}
    </p>
  );
};

export default StatusBadge;
