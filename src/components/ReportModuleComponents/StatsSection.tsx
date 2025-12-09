/** @format */

import React from "react";
import StatsCard from "./SubComponents/StatsCard";

/** @format */

import { StatsCardData } from "@/types/ReportModuleTypes";

export const statsCardsData: StatsCardData[] = [
  {
    id: "1",
    icon: "🔧",
    title: "Parts Used",
    value: 123,
    trend: "up",
    percentage: 10,
    bgColor: "bg-yellow-50",
    iconColor: "bg-yellow-100",
  },
  {
    id: "2",
    icon: "❌",
    title: "Total Installations",
    value: 568,
    trend: "down",
    percentage: 5,
    bgColor: "bg-pink-50",
    iconColor: "bg-pink-100",
  },
  {
    id: "3",
    icon: "🔧",
    title: "Total Repairs",
    value: 123,
    trend: "up",
    percentage: 10,
    bgColor: "bg-purple-50",
    iconColor: "bg-purple-100",
  },
  {
    id: "4",
    icon: "⚙️",
    title: "Total Maintenance",
    value: 568,
    trend: "down",
    percentage: 5,
    bgColor: "bg-orange-50",
    iconColor: "bg-orange-100",
  },
];

const StatsSection = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Report Module</h1>
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="this-month">This Month</option>
          <option value="last-month">Last Month</option>
          <option value="this-year">This Year</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCardsData.map((cardData) => (
          <StatsCard key={cardData.id} data={cardData} />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
