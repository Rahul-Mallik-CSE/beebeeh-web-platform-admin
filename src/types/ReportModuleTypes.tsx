/** @format */

import type { IconType } from "react-icons/lib";

export interface StatsCardData {
  id: string;
  icon: IconType;
  title: string;
  value: number;
  trend: "up" | "down";
  percentage: number;
  bgColor: string;
  iconColor: string;
}

export interface WeeklyJobActivity {
  day: string;
  installation: number;
  repair: number;
  maintenance: number;
}

export interface JobDistribution {
  name: string;
  value: number;
  percentage: number;
  color: string;
}
