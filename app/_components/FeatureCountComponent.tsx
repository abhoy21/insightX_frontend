import { Separator } from "@/components/ui/separator";
import { ActivityIcon, GaugeIcon, UploadIcon } from "./Icons";

interface FeatureCountTableProps {
  featurecntresponse: {
    feat_cnt?: {
      [key: string]: {
        positive: number;
        negative: number;
      };
    };
  };
}

export default function FeatureCountTable({
  featurecntresponse,
}: FeatureCountTableProps) {
  const feat_cnt = featurecntresponse.feat_cnt || {};
  const hasData = Object.keys(feat_cnt).length > 0;

  if (!hasData) {
    return (
      <div className='w-full bg-[#ebf5fc] rounded-3xl custom-neumorphism p-6'>
        <div className='flex flex-col items-center justify-center h-64'>
          <UploadIcon className='w-16 h-16 text-muted-foreground mb-4' />
          <p className='text-xl font-semibold text-center text-muted-foreground'>
            No features available. Upload data to see the Stats.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full bg-[#ebf5fc] custom-neumorphism rounded-3xl border-none mt-3'>
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse'>
          <thead className='block'>
            <tr className='w-full bg-[#ebf5fc]  text-gray-700 rounded-full'>
              <th className='p-4 text-left w-1/4'>Feature</th>
              <th className='p-4 text-left w-1/3'>
                <div className='flex gap-1'>
                  <ActivityIcon className='w-5 h-5 text-green-500' />
                  <span className='text-green-500/75'>Positive Impact</span>
                </div>
              </th>
              <th className='p-4 text-left w-1/3'>
                <div className='flex gap-1'>
                  <GaugeIcon className='w-5 h-5 text-red-500' />
                  <span className='text-red-500/75'>Negative Impact</span>
                </div>
              </th>
            </tr>
          </thead>
          <Separator />
          <tbody className='block h-[36rem] overflow-y-auto scrollbar-hidden'>
            {Object.entries(feat_cnt).map(([feature, counts]) => (
              <tr key={feature} className='border-b border-gray-200 flex'>
                <td className='p-4 w-1/3'>
                  <div className='flex items-center gap-2'>
                    <span className='text-lg font-semibold capitalize bg-gray-200/45 rounded-xl p-2'>
                      {feature}
                    </span>
                  </div>
                </td>
                <td className='p-4 w-1/3'>
                  <div className='flex items-center gap-2'>
                    <span className='text-xl font-bold text-green-500'>
                      +{counts.positive}
                    </span>
                  </div>
                </td>
                <td className='p-4 w-1/3'>
                  <div className='flex items-center gap-2'>
                    <span className='text-xl font-bold text-red-500'>
                      -{counts.negative}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
