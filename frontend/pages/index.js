'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import Search from '@/components/search';
import SearchBar from '@/components/UI/SearchBar';
import Overview from '@/components/Overview/Overview';
import RecentTransactionList from '@/components/RecentTrans/RecentTransactionList';
import { bridgeHeaders, claimHeaders, SERVER_URI } from '@/constants';
import { useEffect, useState } from 'react';
import { getRequest } from '@/apis';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [claimTxs, setClaimTxs] = useState([]);
  const [bridgeTxs, setBridgeTxs] = useState([]);

  const getRecentTxs = async () => {
    const data = await getRequest(`${SERVER_URI}/recent/transactions`);
    setBridgeTxs(data.bridgeTxs);
    setClaimTxs(data.claimTxs);
  };

  useEffect(() => {
    getRecentTxs();
    setInterval(() => {
      getRecentTxs();
    }, 10000);
  }, []);

  return (
    <div>
      <SearchBar />
      <Overview />
      <div className='flex gap-10 w-[90%] mx-auto'>
        {bridgeTxs.length > 0 && (
          <RecentTransactionList
            title={'Recent bridged'}
            data={bridgeTxs}
            headers={bridgeHeaders}
          />
        )}
        {claimTxs.length > 0 && (
          <RecentTransactionList
            title={'Recent claimed'}
            data={claimTxs}
            headers={claimHeaders}
          />
        )}
      </div>
    </div>
  );
}
