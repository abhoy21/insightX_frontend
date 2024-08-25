import Link from "next/link";
import { HotelReviewIcon } from "./Icons";

export default function Header(): JSX.Element {
  return (
    <header className='px-4 lg:px-6 h-14 flex items-center pb-4 pt-6 bg-[#ddeffc]'>
      <Link href='/' className='flex items-center justify-center'>
        <HotelReviewIcon className='w-6 h-6' />
        <span className='text-3xl bg-gradient-to-r from-blue-500 to-sky-500/45 bg-clip-text text-transparent'>
          InsightX
        </span>
      </Link>
      <nav className='ml-auto flex gap-4 sm:gap-6'>
        <Link
          href='dashboard'
          className='text-sm font-medium hover:underline underline-offset-4 text-gray-500'
          prefetch={false}
        >
          Dashboard
        </Link>
        <Link
          href='#'
          className='text-sm font-medium hover:underline underline-offset-4 text-gray-500'
          prefetch={false}
        >
          Documentation
        </Link>
        <Link
          href='#'
          className='text-sm font-medium hover:underline underline-offset-4 text-gray-500'
          prefetch={false}
        >
          Status
        </Link>
      </nav>
    </header>
  );
}
