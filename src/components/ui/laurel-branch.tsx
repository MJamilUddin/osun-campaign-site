import React from 'react';

interface LaurelBranchProps {
  className?: string;
  direction?: 'left' | 'right';
}

export const LaurelBranch: React.FC<LaurelBranchProps> = ({ className = '', direction = 'left' }) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        transform: direction === 'right' ? 'scaleX(-1)' : undefined
      }}
    >
      <g>
        {/* Main Branch */}
        <path
          d="M24 8C28 12 28 18 24 22C20 18 20 12 24 8Z"
          fill="currentColor"
        />
        <path
          d="M22 10C25 12 25 16 22 18C19 16 19 12 22 10Z"
          fill="currentColor"
        />
        {/* Left Leaves */}
        <path
          d="M12 20C16 24 16 30 12 34C8 30 8 24 12 20Z"
          fill="currentColor"
        />
        <path
          d="M10 22C13 24 13 28 10 30C7 28 7 24 10 22Z"
          fill="currentColor"
        />
        {/* Right Leaves */}
        <path
          d="M36 20C40 24 40 30 36 34C32 30 32 24 36 20Z"
          fill="currentColor"
        />
        <path
          d="M34 22C37 24 37 28 34 30C31 28 31 24 34 22Z"
          fill="currentColor"
        />
        {/* Bottom Leaves */}
        <path
          d="M18 35C22 39 22 45 18 49C14 45 14 39 18 35Z"
          fill="currentColor"
        />
        <path
          d="M16 37C19 39 19 43 16 45C13 43 13 39 16 37Z"
          fill="currentColor"
        />
        <path
          d="M30 35C34 39 34 45 30 49C26 45 26 39 30 35Z"
          fill="currentColor"
        />
        <path
          d="M28 37C31 39 31 43 28 45C25 43 25 39 28 37Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
