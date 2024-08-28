import React from "react";

type LoaderProps = {
  propsModelName: string;
};

const Loader: React.FC<LoaderProps> = ({ propsModelName }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-16'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <span className='text-4xl font-semibold text-gray-400/75 mt-16'>
          Please wait until the Results are fetched!
        </span>
        <span className='text-4xl font-semibold bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent mt-6'>
          <span className='text-4xl font-semibold text-gray-400/75 '>
            Model Selected:
          </span>
          {propsModelName}
        </span>
      </div>
      <div className='mt-16'>
        <div className='loader'>
          <div className='blue'></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
