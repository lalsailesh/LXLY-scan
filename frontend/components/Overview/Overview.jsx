import Image from 'next/image';
import React from 'react';
import { IoPieChart, IoStatsChart } from 'react-icons/io5';
import { IoMdGitNetwork } from 'react-icons/io';
import { CgArrangeBack } from 'react-icons/cg';
import DashboardItem from './DashboardItem';

const Overview = () => {
  return (
    <div className='flex w-[90%] mx-auto mt-16 gap-10 border-b-[1px] pb-5 border-[#161616]'>
      <DashboardItem
        title='Total Messages'
        value='803,644'
        renderIcon={() => (
          <Image
            src='/assets/chart.png'
            width={150}
            height={80}
          />
        )}
        borderStyle='flex-[0.25]'
        padding=''
      />
      <DashboardItem
        title='Volume(24h)'
        value='3,798'
        renderIcon={() => (
          <IoStatsChart className='text-[#737373] text-2xl font-thin' />
        )}
        borderStyle='flex-[0.18] border-x-[2px] border-[#161616]'
        padding='px-6'
      />
      <DashboardItem
        title='Inflight Messages'
        value='5,939'
        renderIcon={() => (
          <CgArrangeBack className='text-[#737373] text-2xl font-thin' />
        )}
        borderStyle='flex-[0.18] border-r-[2px] border-[#161616]'
        padding='pr-6'
      />
      <DashboardItem
        title='Total UA'
        value='5,983'
        renderIcon={() => (
          <IoPieChart className='text-[#737373] text-2xl font-thin' />
        )}
        borderStyle='flex-[0.18] border-r-[2px] border-[#161616]'
        padding='pr-6'
      />
      <DashboardItem
        title='Networks'
        value='2'
        renderIcon={() => (
          <IoMdGitNetwork className='text-[#737373] text-2xl font-thin' />
        )}
        borderStyle='flex-[0.18]'
        padding=''
      />
    </div>
  );
};

export default Overview;
