import Lottie from "lottie-react";
import Link from "next/link";
import animationData from "../../public/Animation - 1724528100201.json";
import { SparklesIcon } from "./Icons";

export default function HeroSection(): JSX.Element {
  return (
    <section className='w-full py-12 sm:py-16 md:py-36 bg-[#ebf5fc]'>
      <div className='md:px-6'>
        <div className='grid gap-4 lg:grid-cols-2 lg:gap-12'>
          <div className='flex flex-col justify-center space-y-4 ml-20'>
            <div className='space-y-2 space-x-2'>
              <h1 className='text-3xl bg-gradient-to-r from-sky-600 to-sky-500/45 bg-clip-text text-transparent font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl py-2'>
                Streamline Your Business with InsightX
              </h1>
              <p className='max-w-[600px] text-muted-foreground md:text-xl text-justify font-medium py-4'>
                Our solution utilizes machine learning algorithms for sentiment
                analysis, specifically focused on text reviews. We process
                review comments, classify them as positive or negative, and
                summarize the results using various tools, delivering clear
                insights for better decision-making.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link
                href='dashboard'
                className='inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-tl from-sky-500 to-sky-500/25 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                prefetch={false}
              >
                <SparklesIcon className='h-6 w-6 inline align-text-top mr-2' />
                Get Started
              </Link>
              <Link
                href='#'
                className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-gradient-to-tl from-gray-200 to-gray-100 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-full h-auto lg:max-w-[600px]'>
              <Lottie
                animationData={animationData}
                className='aspect-square rounded-xl object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
