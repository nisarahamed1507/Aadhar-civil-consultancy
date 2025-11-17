
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, light = false }) => {
  const primaryColor = light ? '#FFFFFF' : '#2563EB'; // Blue-600
  const secondaryColor = light ? '#9CA3AF' : '#6B7280'; // Gray-400 / Gray-500

  return (
    <svg 
      className={className} 
      viewBox="0 0 100 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Aadhar Logo</title>
      {/* The base/foundation */}
      <path d="M5 75 H95" stroke={secondaryColor} strokeWidth="8" strokeLinecap="round" />
      
      {/* The main 'A' structure */}
      <path d="M25 75 L50 10" stroke={primaryColor} strokeWidth="10" strokeLinecap="round" />
      <path d="M75 75 L50 10" stroke={primaryColor} strokeWidth="10" strokeLinecap="round" />
      
      {/* Crossbar of 'A' */}
      <path d="M35 50 H65" stroke={primaryColor} strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
};

export default Logo;
