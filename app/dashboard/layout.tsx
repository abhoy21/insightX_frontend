import React from "react";

const DasboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen bg-[#ebf5fc] overflow-hidden'>
      <main className='h-full'>{children}</main>
    </div>
  );
};

export default DasboardLayout;
