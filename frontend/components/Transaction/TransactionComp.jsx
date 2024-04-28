import React from 'react';

const TransactionComp = ({
  title,
  transactionDetails,
  renderTransactionItem,
}) => {
  return (
    <div>
      <p className='text-[#737373] font-light mb-1'>{title}</p>
      <div>
        {transactionDetails?.map((group, index) => (
          <div
            key={index}
            className={`${
              group.length > 1 ? 'flex items-center gap-1 w-full' : ''
            }`}>
            {group.map((item, subIndex) =>
              renderTransactionItem(
                item.icon,
                item.label,
                item.value,
                item.isTransaction,
                title
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionComp;
