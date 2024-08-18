import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function TextIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect x='4' y='6' width='16' height='12' rx='2' />
      <path d='M6 10h12' />
      <path d='M6 14h8' />
    </svg>
  );
}

export function UploadIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
      <polyline points='17 8 12 3 7 8' />
      <line x1='12' x2='12' y1='3' y2='15' />
    </svg>
  );
}

export function HotelReviewIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect x='3' y='5' width='18' height='14' rx='2' />
      <path d='M12 15H8V17H12V15Z' />
      <path d='M16 15H12V17H16V15Z' />
      <path d='M10 19H14V21H10V19Z' />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m6 9 6 6 6-6' />
    </svg>
  );
}
export function FilterIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polygon points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' />
    </svg>
  );
}
export function StarIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </svg>
  );
}

export function InsightsIcon(props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={800}
      height={800}
      fill='none'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='#000'
        fillRule='evenodd'
        d='M4 3a1 1 0 0 0-2 0v17.2A1.8 1.8 0 0 0 3.8 22H21a1 1 0 1 0 0-2H4V3Zm17.707 4.707a1 1 0 0 0-1.414-1.414L14 12.586l-3.293-3.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L10 11.414l3.293 3.293a1 1 0 0 0 1.414 0l7-7Z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export function VaderIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='12' x2='12' y1='20' y2='10' />
      <line x1='18' x2='18' y1='20' y2='4' />
      <line x1='6' x2='6' y1='20' y2='16' />
    </svg>
  );
}

export function GaugeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m12 14 4-4' />
      <path d='M3.34 19a10 10 0 1 1 17.32 0' />
    </svg>
  );
}

export function ThumbsDownIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M17 14V2' />
      <path d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z' />
    </svg>
  );
}

export function ThumbsUpIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M7 10v12' />
      <path d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z' />
    </svg>
  );
}
export function TrendingDownIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='22 17 13.5 8.5 8.5 13.5 2 7' />
      <polyline points='16 17 22 17 22 11' />
    </svg>
  );
}

export function TrendingUpIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='22 7 13.5 15.5 8.5 10.5 2 17' />
      <polyline points='16 7 22 7 22 13' />
    </svg>
  );
}

export function Percentageicon(props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={800}
      height={800}
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M12 2.2C7.03 2.2 2 3.334 2 5.5v12.8c0 2.273 5.152 3.5 10 3.5s10-1.227 10-3.5V5.5c0-2.166-5.03-3.3-10-3.3zm0 18.6c-5.576 0-9-1.456-9-2.5v-6.282c1.708 1.173 5.366 1.782 9 1.782s7.292-.61 9-1.782V18.3c0 1.044-3.424 2.5-9 2.5zm0-8c-5.494 0-9-1.363-9-2.3V7.018C4.708 8.191 8.366 8.8 12 8.8s7.292-.61 9-1.782V10.5c0 .938-3.506 2.3-9 2.3zm0-5c-5.494 0-9-1.363-9-2.3s3.506-2.3 9-2.3 9 1.362 9 2.3-3.506 2.3-9 2.3z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
}

export function VaderValuesIcon(props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={800}
      height={800}
      fill='none'
      viewBox='0 0 16 16'
      {...props}
    >
      <path
        fill='#000'
        fillRule='evenodd'
        d='M1.75 2a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1zm5 3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5zM1 6.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 1 6.25zM1.75 9a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5zM1 13.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75zM6.75 2a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5zM6 9.75A.75.75 0 0 1 6.75 9h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 6 9.75zm.75 2.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5z'
      />
    </svg>
  );
}

export function GraphIcon(props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={800}
      height={800}
      viewBox='0 0 16 16'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M1.5 14H15v-1H2V0H1v13.5l.5.5zM3 11.5v-8l.5-.5h2l.5.5v8l-.5.5h-2l-.5-.5zm2-.5V4H4v7h1zm6-9.5v10l.5.5h2l.5-.5v-10l-.5-.5h-2l-.5.5zm2 .5v9h-1V2h1zm-6 9.5v-6l.5-.5h2l.5.5v6l-.5.5h-2l-.5-.5zm2-.5V6H8v5h1z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export function ActivityIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2' />
    </svg>
  );
}

export function TabIcon1(props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      width={800}
      height={800}
      viewBox='0 0 42 32'
      {...props}
    >
      <path
        fill='#737373'
        d='M39 0c-1.654 0-3 1.346-3 3 0 .888.396 1.679 1.011 2.229l-8.8 14.031A2.972 2.972 0 0 0 27 19c-.868 0-1.644.376-2.193.967l-9.073-5.745c.168-.374.266-.786.266-1.222 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .904.41 1.706 1.044 2.256L4.149 26.231A2.972 2.972 0 0 0 3 26c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-.888-.395-1.678-1.01-2.228l6.904-10.99c.343.138.715.218 1.106.218.859 0 1.629-.367 2.176-.947l9.078 5.748A2.981 2.981 0 0 0 24 22c0 1.654 1.346 3 3 3s3-1.346 3-3c0-.863-.371-1.636-.957-2.184l8.81-14.046c.354.147.741.23 1.147.23 1.654 0 3-1.346 3-3s-1.346-3-3-3zM5 29c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm8-14c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm14 9c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM39 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z'
      />
    </svg>
  );
}

export function OverviewIcon(props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={800}
      height={800}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='#d4d4d4'
        fillRule='evenodd'
        d='M10 14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h7Zm11-5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h7ZM10 2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7Zm11 0a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7Z'
      />
    </svg>
  );
}

export function WordWeightIcon(props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={800}
      height={800}
      fill='none'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='#525252'
        d='M14 22.75h-4c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h4c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-4-20C5.39 2.75 3.75 4.39 3.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25h-4Z'
      />
      <path
        fill='#525252'
        d='M15.07 12.54c-.18 0-.36-.07-.5-.19a3.875 3.875 0 0 0-5.14 0c-.16.15-.38.21-.61.18a.748.748 0 0 1-.53-.35l-2.18-3.5a.763.763 0 0 1 .14-.96 8.666 8.666 0 0 1 11.5 0c.27.24.33.65.14.96l-2.18 3.5a.78.78 0 0 1-.53.35c-.04 0-.08.01-.11.01ZM12 9.87c1 0 1.99.28 2.86.83l1.4-2.25c-2.53-1.88-6-1.88-8.53 0l1.4 2.25c.88-.56 1.87-.83 2.87-.83Z'
      />
    </svg>
  );
}

export function InfoIcon(props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      viewBox='0 0 32 32'
      fill='#9ca3af'
      {...props}
    >
      <path d='M15 14h2v8h-2zM15 10h2v2h-2z' />
      <circle
        cx={16}
        cy={16}
        r={12}
        fill='none'
        stroke='#9ca3af'
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  );
}
