"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import {
  ReviewLengthCard,
  ReviewSentimentCard,
} from "./AverageReviewLengthComponent";
import FeatureCountCard from "./FeatureCountComponent";
import { HotelReviewIcon, TextIcon, UploadIcon } from "./Icons";
import VaderValuesCard from "./VaderComponet";
import WordsWeightageChartComponent from "./WordsWeightChartComponent";

const DashboardComponent = () => {
  const [responseData, setResponseData] = useState<
    | {
        avg_len: number;
        max_len: number;
        min_len: number;
      }
    | 0
  >(0);

  const [responseVader, setResponseVader] = useState<
    | {
        avg_senti: number;
        avg_pos: number;
        avg_neg: number;
        avg_neu: number;
      }
    | 0
  >(0);

  const [wordweightageresponse, setWordWeightageResponse] = useState<{
    top_words: [string, number][];
  }>({ top_words: [] });

  const [featurecntresponse, setFeatureCntResponse] = useState<
    | {
        pred_cnt: Record<string, number>;
        feat_cnt: Record<
          string,
          {
            positive: number;
            negative: number;
          }
        >;
      }
    | {}
  >({});

  const defaultReviewLengthData = {
    avg_len: 0,
    max_len: 0,
    min_len: 0,
  };
  const defaultVaderData = {
    avg_senti: 0,
    avg_pos: 0,
    avg_neg: 0,
    avg_neu: 0,
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        // Length Request
        const response = await fetch("https://wrd-len.onrender.com/wrd_len/", {
          method: "POST",
          body: formData,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setResponseData(data);

        // Vader Request
        const vaderResponse = await fetch(
          "https://vader-edft.onrender.com/vader/",
          {
            method: "POST",
            body: formData,
          },
        );
        if (!vaderResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const vaderData = await vaderResponse.json();
        setResponseVader(vaderData);

        // Word Weightage Request
        const wordWeightageResponse = await fetch(
          "https://imp-words.onrender.com/imp_words/",
          {
            method: "POST",
            body: formData,
          },
        );
        if (!wordWeightageResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const wordWeightageData = await wordWeightageResponse.json();
        setWordWeightageResponse(wordWeightageData);

        // Feature Count
        const featureCountResponse = await fetch(
          "https://modelapi-dt3c.onrender.com/model/",
          {
            method: "POST",
            body: formData,
          },
        );
        if (!featureCountResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const featureCountData = await featureCountResponse.json();
        console.log(featureCountData);
        setFeatureCntResponse(featureCountData);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };

  return (
    <div className='flex flex-col'>
      <header className='flex items-center h-16 px-4 border-b border-muted/20 shrink-0 md:px-6'>
        <Link
          href='#'
          className='flex items-center gap-2 text-lg font-semibold sm:text-base mr-4'
          prefetch={false}
        >
          <HotelReviewIcon className='w-6 h-6' />
          <span className='sr-only'>Hotel Review Analysis</span>
        </Link>
        <div className='flex items-center gap-4 ml-auto'>
          <div className='relative flex-1 max-w-md'>
            <Input
              type='text'
              placeholder='Enter Text'
              className='w-full rounded-lg bg-muted/10 pl-8 pr-4 py-2 text-sm'
            />
            <TextIcon className='absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground' />
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='file'
              id='fileInput'
              className='hidden'
              onChange={handleFileUpload}
            />
            <Button
              size='icon'
              variant='ghost'
              className='rounded-full border border-gray-300 hover:border-gray-500'
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              <UploadIcon className='w-5 h-5' />
              <span className='sr-only'>Upload</span>
            </Button>
          </div>
        </div>
      </header>
      <main className='flex flex-1 flex-col justify-center items-center gap-4 p-4 md:gap-8 md:p-6'>
        <div className=''>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2'>
              <ReviewSentimentCard
                featurecntresponse={featurecntresponse || {}}
              />
            </div>
            <VaderValuesCard data={responseVader || defaultVaderData} />
          </div>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <div className='col-span-2'>
              <ReviewLengthCard
                data={responseData || defaultReviewLengthData}
              />

              <WordsWeightageChartComponent
                wordweightageresponse={wordweightageresponse}
              />
            </div>
            <div className='col-span-1'>
              <FeatureCountCard featurecntresponse={featurecntresponse || {}} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardComponent;
