import React from "react";

interface ActivityButtonProps {
  title: string;
  activity: number;
  onClick: () => void;
  icon: React.ElementType;
  colorClasses: string;
}

const ActivityButton: React.FC<ActivityButtonProps> = ({
  title,
  activity,
  onClick,
  icon: IconComponent,
  colorClasses,
}) => {
  return (
    <div
      className={`rounded-lg py-3 px-6 shadow-md cursor-pointer transition-transform transform hover:scale-105 active:scale-95 ease-in-out duration-300 ${colorClasses}`}
      onClick={onClick}
    >
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-white text-lg font-bold'>{title}</h2>
          <p className='text-white text-2xl font-bold'>{activity}</p>
        </div>
        <div className='flex-end items-end ml-10 bg-gray-100/25 rounded-full p-3'>
          <IconComponent className='h-6 w-6' />
        </div>
      </div>
    </div>
  );
};

export default ActivityButton;
