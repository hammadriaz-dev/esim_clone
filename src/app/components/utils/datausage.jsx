// components/DataUsage.js
import React from "react";

const DataUsage = ({ used, total }) => {
  const radius = 75; // circle radius
  const circumference = 2 * Math.PI * radius;
  const percentage = (used / total) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      {/* Top title */}
      <p className="text-lg font-semibold text-orange-500 mb-1">Data Usage</p>

      <div className="relative w-52 h-52">
        <svg viewBox="0 0 200 200" className="-rotate-90 w-52 h-52">
          {/* Dashed background circle */}
          <circle
            className="stroke-orange-200 stroke-[10]"
            fill="none"
            cx="100"
            cy="100"
            r={radius}
            strokeDasharray="8 12"
          />
          {/* Orange progress arc */}
          <circle
            className="stroke-orange-500 stroke-[10]"
            fill="none"
            cx="100"
            cy="100"
            r={radius}
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              transition: "stroke-dashoffset 0.5s ease-in-out",
            }}
          />
        </svg>

        {/* Center content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-md font-semibold text-gray-700">Data</p>
          <p className="text-3xl font-bold text-orange-500 mt-1">
            {used.toFixed(2)} GB
          </p>
          <p className="text-sm text-orange-500 mt-1">
            of {total} GB left
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataUsage;
