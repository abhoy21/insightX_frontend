interface ShortestCardProps {
  shortest: number;
}

const ShortestCard: React.FC<ShortestCardProps> = ({ shortest }) => {
  const radius = 50;
  const normalizedRadius = radius - 10 * 0.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (shortest / 100) * circumference;
  return (
    <div className='flex items-center flex-wrap max-w-md px-10 bg-[#ebf5fc] custom-neumorphism  rounded-2xl h-20 relative'>
      <div className='flex items-center justify-center -m-6 overflow-hidden bg-[#ebf5fc] custom-neumorphism  rounded-full'>
        <svg
          className='w-32 h-32 transform translate-x-3.5 translate-y-3.5'
          aria-hidden='true'
        >
          <circle
            className='text-gray-300'
            strokeWidth='10'
            stroke='currentColor'
            fill='transparent'
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            className='text-fuchsia-500'
            strokeWidth='10'
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap='round'
            stroke='currentColor'
            fill='transparent'
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <span className='absolute text-2xl text-fuchsia-500'>{`${shortest}%`}</span>
      </div>
      <p className='ml-10 font-medium text-gray-600 sm:text-xl'>Shortest</p>
      <span className='text-xl font-medium text-fuchsia-500 hidden sm:block ml-4'>
        +{shortest}
      </span>
    </div>
  );
};

export default ShortestCard;
