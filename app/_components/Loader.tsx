import React from "react";

const Loader: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-16'>
      <span className='text-4xl font-semibold text-gray-400/75 mt-16'>
        Please wait until the Results are fetched!
      </span>
      <div className='mt-16'>
        <div className='loader'>
          <div className='blue'></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
