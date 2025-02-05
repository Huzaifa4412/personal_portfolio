"use client";

import type React from "react";
import { useState } from "react";

interface CircularProgressBarProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress,
  size = 160,
  strokeWidth = 15,
  label,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        className="transform transition-transform duration-300 ease-in-out"
        width={size}
        height={size}
        style={{
          transform: isHovered
            ? "scale(1.1) rotate(180deg)"
            : "scale(1) rotate(0deg)",
        }}
      >
        <circle
          className="text-background"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-primary hover:text-gray transition-all duration-300 ease-in-out"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 0.5s ease-in-out",
          }}
        />
      </svg>
      <div
        className="absolute flex flex-col items-center justify-center transition-opacity duration-300"
        style={{ opacity: isHovered ? 0 : 1 }}
      >
        <span className="text-4xl font-bold text-primary">{`${progress}%`}</span>
        {label && <span className="text-sm text-gray mt-2">{label}</span>}
      </div>
      <div
        className="absolute flex flex-col items-center justify-center transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <span className="text-2xl font-bold text-white">{label}</span>
        <span className="text-sm text-gray mt-2">{progress}</span>
      </div>
    </div>
  );
};

export default CircularProgressBar;
