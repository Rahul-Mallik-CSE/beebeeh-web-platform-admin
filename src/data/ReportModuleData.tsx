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
    iconBg: "bg-yellow-100",
  },
  {
    id: "2",
    icon: "❌",
    title: "Total Installations",
    value: 568,
    trend: "down",
    percentage: 5,
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-100",
  },
  {
    id: "3",
    icon: "🔧",
    title: "Total Repairs",
    value: 123,
    trend: "up",
    percentage: 10,
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100",
  },
  {
    id: "4",
    icon: "⚙️",
    title: "Total Maintenance",
    value: 568,
    trend: "down",
    percentage: 5,
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
  },
];
