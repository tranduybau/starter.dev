import { Props } from './types';

export function QwikIcon({ size = 48, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 518 518"
      width={size}
      height={size}
      className={className}
    >
      <path
        fill="#18B6F6"
        d="m387.18 455.5-70.54-70.18-1 .17v-.74l-150-148.34 37.03-35.69L180.9 75.91 77.82 203.78c-17.5 17.67-20.86 46.58-8.18 67.79l64.42 106.92c9.84 16.4 25.32 26.94 46.92 26.16 45.75-1.62 65.86-1.62 65.86-1.62l140.3 52.43.04.05Z"
      />
      <path
        fill="#AC7EF4"
        d="M422.03 258.84c10.15-20.95 13.78-39.27 3.76-57.68l-14.26-26.24-7.39-13.47-2.88-5.25-.27.3-38.79-67.3A54.24 54.24 0 0 0 314.58 62l-34.02.96-101.55.27a54.45 54.45 0 0 0-46.58 26.85l-61.7 122.54L181.15 75.25 326 234.53l-25.93 26.28 15.48 124.6.22-.27v.35h-.22l.3.3 12.08 11.77 58.42 57.07c2.45 2.36 6.43-.48 4.81-3.4l-36.12-71.07"
      />
      <path
        fill="#fff"
        d="M326.34 234.13 181.11 75.65l20.64 124.1-36.96 35.87 150.49 149.56-13.56-124.15 24.62-26.85v-.05Z"
      />
    </svg>
  );
}
