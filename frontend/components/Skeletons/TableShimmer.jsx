import { Skeleton } from '@mui/material';
import React from 'react';

const TableShimmer = () => {
  return (
    <div className='mt-24'>
      <Skeleton
        variant='rectangular'
        width={'90%'}
        height={50}
        style={{
          background: '#111111',
          margin: '0 auto',
          borderRadius: '4px',
          marginBottom: '6px',
        }}
      />
      <Skeleton
        variant='rectangular'
        width={'90%'}
        height={50}
        style={{
          background: '#1f1f1f',
          margin: '0 auto',
          borderRadius: '4px',
          marginBottom: '6px',
        }}
      />
      <Skeleton
        variant='rectangular'
        width={'90%'}
        height={50}
        style={{
          background: '#1f1f1f',
          margin: '0 auto',
          borderRadius: '6px',
          marginBottom: '6px',
        }}
      />
      <Skeleton
        variant='rectangular'
        width={'90%'}
        height={50}
        style={{
          background: '#1f1f1f',
          margin: '0 auto',
          borderRadius: '6px',
          marginBottom: '6px',
        }}
      />
      <Skeleton
        variant='rectangular'
        width={'90%'}
        height={50}
        style={{
          background: '#1f1f1f',
          margin: '0 auto',
          borderRadius: '6px',
          marginBottom: '6px',
        }}
      />
      <Skeleton
        variant='rectangular'
        width={'90%'}
        height={50}
        style={{
          background: '#1f1f1f',
          margin: '0 auto',
          borderRadius: '6px',
          marginBottom: '6px',
        }}
      />
    </div>
  );
};

export default TableShimmer;
