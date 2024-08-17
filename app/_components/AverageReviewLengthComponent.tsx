"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AverageCard from "./AverageCard";
import { InfoIcon, Percentageicon } from "./Icons";
import LongestCard from "./LongestCard";
import ShortestCard from "./ShortestCard";

interface ReviewSentimentCardProps {
  featurecntresponse: {
    pred_cnt?: {
      [key: string]: number;
    };
  };
}

interface ReviewLengthData {
  avg_len: number;
  max_len: number;
  min_len: number;
}

interface ReviewLengthCardProps {
  data: ReviewLengthData;
}

const ReviewLengthCard: React.FC<ReviewLengthCardProps> = ({ data }) => {
  return (
    <div className='flex gap-6 my-6'>
      <AverageCard average={data.avg_len} />
      <LongestCard longest={data.max_len} />
      <ShortestCard shortest={data.min_len} />
    </div>
  );
};

const ReviewSentimentCard: React.FC<ReviewSentimentCardProps> = ({
  featurecntresponse,
}) => {
  const pred_cnt = featurecntresponse.pred_cnt || {};

  const positiveCount = pred_cnt["0"] || 0;
  const negativeCount = pred_cnt["1"] || 0;
  const total = positiveCount + negativeCount;
  const positivePercentage = total ? (positiveCount / total) * 100 : 0;
  const negativePercentage = total ? (negativeCount / total) * 100 : 0;

  let resultText = "Neutral";
  let resultColor = "text-gray-500";
  let resultMessage = "Results are neutral";

  if (positivePercentage > negativePercentage) {
    resultText = "Positive";
    resultColor = "text-green-500";
    resultMessage = "Results look good for the business";
  } else if (negativePercentage > positivePercentage) {
    resultText = "Negative";
    resultColor = "text-red-500";
    resultMessage = "Results may need attention";
  }

  return (
    <Card className='min-w-[1000px] bg-[#ebf5fc] custom-neumorphism rounded-3xl border-none p-3'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle className='flex items-center justify-center gap-2'>
            <div className='bg-gray-200/35 rounded-full p-3'>
              <Percentageicon className='w-6 h-6 text-muted-foreground' />
            </div>
            <span className={`text-4xl ${resultColor}`}>{resultText}</span>
            <p className='text-sm text-gray-400 mt-4 ml-4 font-mono'>
              {resultMessage}
            </p>
          </CardTitle>
          <div className='flex items-center gap-2 text-muted-foreground text-sm'>
            <InfoIcon className='h-6 w-6' />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col items-center gap-2'>
          <div className='relative w-full h-10 rounded-full bg-[#dff2ff] overflow-hidden shadow-custom-neumorphism'>
            <div
              className='absolute top-0 left-0 h-full bg-gradient-to-b from-green-300/50 to-green-500 shadow-green-500/75 rounded-r-lg backdrop-blur-md rounded-l-full'
              style={{ width: `${positivePercentage}%` }}
            />
            <div
              className='absolute top-0 right-0 h-full bg-gradient-to-b from-red-400/50 to-red-500/80 shadow-red-500/75 rounded-r-full backdrop-blur-md'
              style={{ width: `${negativePercentage}%` }}
            />
            <div className='absolute inset-0 flex justify-between items-center px-2 text-sm font-medium text-white'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span>{positivePercentage.toFixed(2)}%</span>
                  </TooltipTrigger>
                  <TooltipContent>Positive</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span>{negativePercentage.toFixed(2)}%</span>
                  </TooltipTrigger>
                  <TooltipContent>Negative</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className='text-sm text-muted-foreground'>
            Positive vs. Negative (The overall result)
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { ReviewLengthCard, ReviewSentimentCard };
