'use client';

import React, { useState } from 'react';
import TransactionListHeader from './TransactionListHeader';
import RecentTransaction from './RecentTransaction';

const RecentTransactionList = ({ headers, data, title, isAddressPage }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='mt-20 font-Roboto w-[90%] mx-auto mb-3 text-white '>
      <p className='text-sm font-light pb-2 border-b-[1px]  border-[#161616]'>
        {title} Transactions
      </p>

      <div className='w-full'>
        <TransactionListHeader headers={headers} />

        {isAddressPage &&
          data.length > 10 &&
          data.slice(0, 10).map((transaction, index) => (
            <RecentTransaction
              isAddressPage={isAddressPage}
              transaction={transaction}
              key={index}
            />
          ))}

        {isAddressPage &&
          showMore &&
          data.map((transaction, index) => (
            <RecentTransaction
              isAddressPage={isAddressPage}
              transaction={transaction}
              key={index}
            />
          ))}

        {!isAddressPage &&
          data.map((transaction, index) => (
            <RecentTransaction
              isAddressPage={isAddressPage}
              transaction={transaction}
              key={index}
            />
          ))}

        {isAddressPage && (
          <p
            onClick={() => {
              setShowMore(!showMore);
            }}
            className='text-right text-sm mt-5 text-[#737373] mb-3 cursor-pointer hover:underline'>
            View {showMore ? 'Less' : 'More'}
          </p>
        )}
      </div>
    </div>
  );
};

export default RecentTransactionList;
