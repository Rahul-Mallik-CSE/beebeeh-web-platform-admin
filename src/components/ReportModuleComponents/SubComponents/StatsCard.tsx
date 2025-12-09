/** @format */

import React from "react";
import Image from "next/image";
import { StatsCardData } from "@/types/ReportModuleTypes";

interface StatsCardProps {
  data: StatsCardData;
}

const StatsCard: React.FC<StatsCardProps> = ({ data }) => {
  const { icon, title, value, trend, percentage, bgColor, iconColor } = data;

  return (
    <div
      className={`${bgColor} rounded-2xl p-6 flex items-center justify-between transition-all hover:shadow-md`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`${iconColor} w-12 h-12 rounded-xl flex items-center justify-center text-2xl`}
        >
          {icon}
        </div>
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Image
          src={trend === "up" ? "/statsUp.png" : "/statsDown.png"}
          alt={trend === "up" ? "Trending up" : "Trending down"}
          width={20}
          height={20}
          className="object-contain"
        />
        <span
          className={`text-sm font-semibold ${
            trend === "up" ? "text-green-600" : "text-red-600"
          }`}
        >
          {trend === "up" ? "+" : "-"}
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default StatsCard;
