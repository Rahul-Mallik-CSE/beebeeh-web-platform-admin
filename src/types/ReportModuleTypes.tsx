/** @format */

export interface StatsCardData {
  id: string;
  icon: string;
  title: string;
  value: number;
  trend: "up" | "down";
  percentage: number;
  bgColor: string;
  iconColor: string;
}
