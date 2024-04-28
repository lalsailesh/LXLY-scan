import React from 'react';
import Navbar from '../UI/Navbar';

const Layout = ({ children }) => {
  return (
    <div className='bg-[#0A0A0A] min-h-screen w-screen'>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
