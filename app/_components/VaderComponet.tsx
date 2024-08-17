import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoIcon, VaderIcon } from "./Icons";

interface VaderValuesCardProps {
  data: {
    avg_senti: number;
    avg_pos: number;
    avg_neg: number;
    avg_neu: number;
  } | null;
}

const CircleProgress: React.FC<{ value: number; color: string }> = ({
  value,
  color,
}) => {
  const radius = 35; // radius of the circle
  const strokeWidth = 4; // width of the border
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      className='absolute inset-0 transform -translate-x-1.5 -translate-y-1'
    >
      <circle
        stroke='#e5e7eb'
        fill='none'
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={color}
        fill='none'
        strokeLinecap='round'
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        className='transition-transform duration-500 ease-out'
      />
    </svg>
  );
};

const VaderValuesCard: React.FC<VaderValuesCardProps> = ({ data }) => {
  return (
    <Card className='bg-[#ebf5fc] custom-neumorphism rounded-3xl border-none px-2'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle className='flex items-center justify-center gap-2'>
            <div className='bg-gray-100 rounded-full p-3 shadow-inner-neumorphism'>
              <VaderIcon className='w-6 h-6 text-gray-700' />
            </div>
            <span className='text-2xl font-semibold text-gray-700'>
              Sentiment Values
            </span>
          </CardTitle>
          <div className='flex items-center gap-2 text-gray-500 text-sm'>
            <InfoIcon className='h-6 w-6' />
          </div>
        </div>
      </CardHeader>

      <CardContent className=''>
        <div className='flex flex-wrap  justify-center'>
          {/* Row 1 */}
          <div className='flex flex-col items-center gap-4 w-1/2 md:w-1/4'>
            <div className='relative w-16 h-16'>
              <CircleProgress value={data?.avg_pos || 0} color='#22c55e' />
              <div className='absolute inset-0 flex items-center justify-center text-lg font-bold'>
                {(data?.avg_pos || 0).toFixed(0)}%
              </div>
            </div>
            <div className='text-sm text-gray-500'>Positive</div>
          </div>
          <div className='flex flex-col items-center gap-4 w-1/2 md:w-1/4'>
            <div className='relative w-16 h-16'>
              <CircleProgress value={data?.avg_neg || 0} color='#ef4444' />
              <div className='absolute inset-0 flex items-center justify-center text-lg font-bold'>
                {(data?.avg_neg || 0).toFixed(0)}%
              </div>
            </div>
            <div className='text-sm text-gray-500'>Negative</div>
          </div>
          {/* Row 2 */}
          <div className='flex flex-col items-center gap-4 w-1/2 md:w-1/4'>
            <div className='relative w-16 h-16'>
              <CircleProgress value={data?.avg_neu || 0} color='#a855f7' />
              <div className='absolute inset-0 flex items-center justify-center text-lg font-bold'>
                {(data?.avg_neu || 0).toFixed(0)}%
              </div>
            </div>
            <div className='text-sm text-gray-500'>Neutral</div>
          </div>
          <div className='flex flex-col items-center gap-4 w-1/2 md:w-1/4'>
            <div className='relative w-16 h-16'>
              <CircleProgress value={data?.avg_senti || 0} color='#ffc107' />
              <div className='absolute inset-0 flex items-center justify-center text-lg font-bold'>
                {(data?.avg_senti || 0).toFixed(0)}%
              </div>
            </div>
            <div className='text-sm text-gray-500'>Compound</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VaderValuesCard;
