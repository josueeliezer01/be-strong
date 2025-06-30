// src/components/Logo.tsx
import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width = 200,
  height = 60,
  className = '',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 200 60"
    role="img"
    aria-labelledby="logoTitle"
    className={className}
  >
    <title id="logoTitle">Be-Strong Logo</title>
    <text
      x="50%"
      y="50%"
      fill="#007cf7"
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize="28"
      fontWeight="bold"
      textAnchor="middle"
      dominantBaseline="middle"
      alignmentBaseline="central"
    >
      BE-STRONG
    </text>
  </svg>
);

export default Logo;
