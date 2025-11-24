import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size = 20 }) => {
  // Using SVG icons as inline components
  const icons: Record<string, React.ReactNode> = {
    search: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m19 19-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    chevronDown: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    star: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M10 2l2.5 6 6.5.5-5 4.5 1.5 6.5L10 15.5 4.5 19.5l1.5-6.5-5-4.5 6.5-.5L10 2z" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
      </svg>
    ),
    bell: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M10 2a6 6 0 0 1 6 6v4a6 6 0 0 0 2 4H2a6 6 0 0 0 2-4V8a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 18a3 3 0 0 0 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    filter: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M3 5h14M5 10h10M7 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    grid: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <rect x="2" y="2" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="2" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="12" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="12" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    eye: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M1 10s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    document: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M4 2h8l4 4v12H4V2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    user: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 19c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    wallet: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    twitter: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M19 2.5c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.8-2.5 1-.7-.8-1.7-1.3-2.8-1.3-2.1 0-3.8 1.7-3.8 3.8 0 .3 0 .6.1.9-3.1-.2-5.9-1.7-7.7-4-.3.5-.5 1.1-.5 1.7 0 1.3.7 2.4 1.7 3.1-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.4 3 3.7-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.6 2.6-1.3 1-3 1.6-4.8 1.6-.3 0-.6 0-.9-.1 1.7 1.1 3.7 1.7 5.9 1.7 7.1 0 11-5.9 11-11v-.5c.8-.6 1.4-1.3 1.9-2.1z" fill="currentColor"/>
      </svg>
    ),
    calendar: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <rect x="3" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 8h14M7 2v4M13 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    edit: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M11 3H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="m18.5 2.5-3 3M15 2.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    camera: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <rect x="2" y="6" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="11.5" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    lock: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <rect x="4" y="8" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 8V5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    link: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M10 13a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v3a3 3 0 0 0 3 3z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 7h6M7 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    users: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 19v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M18 19v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    settings: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16.5 10a1.5 1.5 0 0 0 .3-1.7l1.4-4.2a1.5 1.5 0 0 0-1.9-1.9l-4.2 1.4a1.5 1.5 0 0 0-1.7.3L7.5 3.5a1.5 1.5 0 0 0-2.1 0L3.5 5.4a1.5 1.5 0 0 0 0 2.1l1.6 1.6a1.5 1.5 0 0 0 .3 1.7l-1.4 4.2a1.5 1.5 0 0 0 1.9 1.9l4.2-1.4a1.5 1.5 0 0 0 1.7-.3l1.6-1.6a1.5 1.5 0 0 0 2.1 0l1.9-1.9a1.5 1.5 0 0 0 0-2.1L16.5 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    chart: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <path d="M3 17V7M7 17V3M11 17v-6M15 17v-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    discover: (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="2" fill="currentColor"/>
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  };
  
  return <>{icons[name] || null}</>;
};


