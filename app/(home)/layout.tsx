import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen overflow-hidden bg-[#ebf5fc]'>
      <main className='h-full'>{children}</main>

      {/* background effect */}

      {/* <div className='md:w-[1600px] md:h-[1000px] absolute -bottom-40 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-teal-300 via-teal-100 to-cyan-100 rounded-[999px]'></div> */}
    </div>
  );
};

export default HomeLayout;
