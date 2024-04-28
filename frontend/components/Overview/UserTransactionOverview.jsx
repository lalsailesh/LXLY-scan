import Image from 'next/image';
import React from 'react';
import { CgArrangeBack } from 'react-icons/cg';
import { IoStatsChart } from 'react-icons/io5';
import DashboardItem from './DashboardItem';

const UserTransactionOverview = ({
  totalMessages,
  volume,
  inflighMessages,
}) => {
  return (
    <div className='flex w-[90%] mx-auto mt-16 gap-10 border-b-[1px] pb-5 border-[#161616]'>
      <DashboardItem
        title='Total Messages'
        value='644'
        renderIcon={() => (
          <Image
            src='/assets/chart.png'
            width={150}
            height={80}
          />
        )}
        borderStyle='flex-[0.40]'
        padding=''
      />

      <DashboardItem
        title='Total Volume'
        value='298'
        renderIcon={() => (
          <IoStatsChart className='text-[#737373] text-2xl font-thin' />
        )}
        borderStyle='flex-[0.30] border-x-[2px] border-[#161616]'
        padding='px-6'
      />

      <DashboardItem
        title='Inflight Messages'
        value='39'
        renderIcon={() => (
          <CgArrangeBack className='text-[#737373] text-2xl font-thin' />
        )}
        borderStyle='flex-[0.30] border-r-[2px] border-[#161616]'
        padding='pr-6'
      />
    </div>
  );
};

export default UserTransactionOverview;
