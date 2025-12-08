/** @format */

import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend: string;
  trendDirection: "up" | "down";
  iconBgColor: string;
}

const StatsCard = ({
  title,
  value,
  icon,
  trend,
  trendDirection,
  iconBgColor,
}: StatsCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-between">
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-gray-800 mb-2">{value}</h3>
        <div className="flex items-center gap-1">
          <svg
            className={`w-4 h-4 ${
              trendDirection === "up" ? "text-green-500" : "text-red-500"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {trendDirection === "up" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              />
            )}
          </svg>
          <span
            className={`text-sm font-medium ${
              trendDirection === "up" ? "text-green-500" : "text-red-500"
            }`}
          >
            {trend}
          </span>
        </div>
      </div>
      <div
        className={`w-14 h-14 ${iconBgColor} rounded-xl flex items-center justify-center shrink-0`}
      >
        {icon}
      </div>
    </div>
  );
};

export default StatsCard;
