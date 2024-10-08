import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#ddeffc]'>
      <p className='text-xs text-muted-foreground'>
        &copy; 2024 InsightX. All rights reserved.
      </p>
      <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
        <Link
          href='#'
          className='text-xs hover:underline underline-offset-4'
          prefetch={false}
        >
          Terms of Service
        </Link>
        <Link
          href='#'
          className='text-xs hover:underline underline-offset-4'
          prefetch={false}
        >
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
}
