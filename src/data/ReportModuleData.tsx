/** @format */

import { WeeklyJobActivity, JobDistribution } from "@/types/ReportModuleTypes";

export const weeklyJobActivityData: WeeklyJobActivity[] = [
  { day: "Sat", installation: 480, repair: 180, maintenance: 340 },
  { day: "Sun", installation: 470, repair: 160, maintenance: 330 },
  { day: "Mon", installation: 480, repair: 170, maintenance: 340 },
  { day: "Tue", installation: 490, repair: 160, maintenance: 320 },
  { day: "Wed", installation: 480, repair: 190, maintenance: 330 },
  { day: "Thu", installation: 470, repair: 170, maintenance: 340 },
  { day: "Fri", installation: 490, repair: 150, maintenance: 350 },
];

export const jobDistributionData: JobDistribution[] = [
  { name: "Installation", value: 45, percentage: 45, color: "#6B3838" },
  { name: "Repair", value: 35, percentage: 35, color: "#E8D4D4" },
  { name: "Maintenance", value: 35, percentage: 35, color: "#A14545" },
];
