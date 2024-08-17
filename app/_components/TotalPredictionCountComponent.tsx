import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  GaugeIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "./Icons";

interface TotalPredictionCountCardProps {
  featurecntresponse: {
    pred_cnt?: {
      [key: string]: number;
    };
  };
}

const TotalPredictionCountCard: React.FC<TotalPredictionCountCardProps> = ({
  featurecntresponse,
}) => {
  const pred_cnt = featurecntresponse.pred_cnt || {};

  const positiveCount = pred_cnt["0"] || 0;
  const negativeCount = pred_cnt["1"] || 0;
  const total = positiveCount + negativeCount;
  const positivePercentage = total ? (positiveCount / total) * 100 : 0;
  const negativePercentage = total ? (negativeCount / total) * 100 : 0;

  return (
    <Card className='bg-gradient-to-tl from-teal-300/30 to-white/10 backdrop-blur-lg border-2 border-white rounded-3xl shadow-lg p-6'>
      <CardHeader className='flex items-start justify-center'>
        <div className='flex gap-2'>
          <GaugeIcon className='w-6 h-6 text-muted-foreground' />
          <CardTitle>Sentiment Analysis</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex items-center justify-between mb-4 gap-20'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 mx-2'>
              <ThumbsUpIcon className='w-6 h-6 text-primary-foreground' />
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Positive</h3>
              <p className='text-2xl font-bold'>{positiveCount}</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 flex items-center justify-center rounded-full bg-red-500 mx-2'>
              <ThumbsDownIcon className='w-6 h-6 text-primary-foreground' />
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Negative</h3>
              <p className='text-2xl font-bold'>{negativeCount}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <Separator />
      <div className='flex items-center justify-between text-sm text-muted-foreground my-6 gap-20 mx-4'>
        <div className='flex items-center gap-2'>
          <TrendingUpIcon className='w-4 h-4 text-primary' />
          <span>Up {positivePercentage}%</span>
        </div>
        <div className='flex items-center gap-2'>
          <TrendingDownIcon className='w-4 h-4 text-red-500' />
          <span>Down {negativePercentage}% </span>
        </div>
      </div>
    </Card>
  );
};

export default TotalPredictionCountCard;
