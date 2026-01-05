import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, light = false }) => {
  return (
    <img
      src="/assets/images/logo-aadhar.jpeg"
      alt="Aadhar Logo"
      className={className}
    />
  );
};

export default Logo;
