"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { GraphIcon, InfoIcon } from "./Icons";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  wordweightageresponse: { top_words: [string, number][] };
}

const WordsWeightageChartComponent: React.FC<Props> = ({
  className,
  wordweightageresponse,
}) => {
  return (
    <Card
      className={`mt-10 bg-[#ebf5fc] border-none custom-neumorphism rounded-3xl min-w-[1040px] max-h-[500px] ${className}`}
    >
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle className='flex items-center justify-center gap-2'>
            <div className='bg-gray-200/45 rounded-full px-3'>
              <GraphIcon className='w-6 h-6 text-muted-foreground' />
            </div>
            <span className='text-2xl font-semibold'>
              Words Weightage
              <CardDescription className='font-medium'>
                Impact of certain words in Sentiment Analysis
              </CardDescription>
            </span>
          </CardTitle>
          <div className='flex items-center gap-2 text-muted-foreground text-sm'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className='h-6 w-6' />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Displays the weightage of words based on their impact in
                    sentiment analysis.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <BarChartComponent
          className='aspect-[9/4]'
          wordweightageresponse={wordweightageresponse}
        />
      </CardContent>
    </Card>
  );
};

export default WordsWeightageChartComponent;

const BarChartComponent: React.FC<Props> = ({
  className,
  style,
  wordweightageresponse,
}) => {
  const maxLength = 7; // Example max length, adjust as needed

  const data =
    wordweightageresponse?.top_words
      ?.filter(([word]) => word.length <= maxLength) // Filter out words with length greater than maxLength
      .map(([word, weight]) => ({ word, weight }))
      .sort((a, b) => a.word.localeCompare(b.word)) // Sort alphabetically by word
      .slice(0, 25) || []; // Slice the desired range
  const isEmpty = data.length === 0;

  return (
    <div className={className} style={style}>
      <ChartContainer
        config={{
          weightage: {
            label: "weight",
            color: "#14b8a6",
          },
        }}
        className='max-h-[350px] min-w-[1000px]'
      >
        <BarChart
          width={1000}
          height={300}
          data={data}
          margin={{ top: 10, right: 10, bottom: 20, left: 10 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          {isEmpty ? (
            <text
              className='font-bold text-7xl'
              x='50%'
              y='50%'
              dominantBaseline='middle'
              textAnchor='middle'
              fill='#0ea5e9'
            >
              No data
            </text>
          ) : (
            <>
              <XAxis
                dataKey='word' // Updated dataKey to match the data
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis tickLine={false} tickMargin={10} axisLine={false} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey='weight' // Updated dataKey to match the data
                fill='#0ea5e9'
                fillOpacity={0.6}
                radius={[8, 8, 6, 6]}
                barSize={30}
              />
            </>
          )}
        </BarChart>
      </ChartContainer>
    </div>
  );
};
