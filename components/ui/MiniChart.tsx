import React from 'react';

interface MiniChartProps {
  isPositive: boolean;
  className?: string;
}

export const MiniChart: React.FC<MiniChartProps> = ({ isPositive, className = '' }) => {
  const color = isPositive ? '#10b981' : '#ef4444'; // green-500 : red-500
  
  // Simple upward or downward trend line
  const path = isPositive
    ? 'M 0 20 L 4 16 L 8 12 L 12 8 L 16 4 L 20 0'
    : 'M 0 0 L 4 4 L 8 8 L 12 12 L 16 16 L 20 20';
  
  return (
    <svg width="40" height="20" viewBox="0 0 20 20" className={className}>
      <path
        d={path}
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};



