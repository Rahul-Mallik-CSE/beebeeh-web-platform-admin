/** @format */

import React from "react";
import Image from "next/image";
import { StatsCardData } from "@/types/ReportModuleTypes";

interface StatsCardProps {
  data: StatsCardData;
}

const StatsCard: React.FC<StatsCardProps> = ({ data }) => {
  const {
    icon: Icon,
    title,
    value,
    trend,
    percentage,
    bgColor,
    iconColor,
  } = data;

  return (
    <div className={`bg-white rounded-2xl p-6  transition-all hover:shadow-md`}>
      <div className="flex items-center gap-4">
        <div
          className={` ${bgColor}  w-9 h-9 rounded-xl flex items-center justify-center text-2xl`}
        >
          <Icon className={`text-xl ${iconColor}`} />
        </div>
        <div>
          <p className="text-gray-600 text-xl font-bold">{title}</p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-semibold ${
              trend === "up" ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend === "up" ? "+" : "-"}
            {percentage}%
          </span>
          <Image
            src={trend === "up" ? "/statsUp.png" : "/statsDown.png"}
            alt={trend === "up" ? "Trending up" : "Trending down"}
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
