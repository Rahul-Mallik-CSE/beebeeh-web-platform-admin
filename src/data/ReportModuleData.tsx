/** @format */

import { WeeklyJobActivity, JobDistribution } from "@/types/ReportModuleTypes";

export const weeklyJobActivityData: WeeklyJobActivity[] = [
  { day: "Sat", installation: 450, repair: 350, maintenance: 500 },
  { day: "Sun", installation: 480, repair: 320, maintenance: 450 },
  { day: "Mon", installation: 470, repair: 340, maintenance: 480 },
  { day: "Tue", installation: 460, repair: 330, maintenance: 470 },
  { day: "Wed", installation: 490, repair: 310, maintenance: 440 },
  { day: "Thu", installation: 470, repair: 350, maintenance: 460 },
  { day: "Fri", installation: 450, repair: 340, maintenance: 480 },
];

export const jobDistributionData: JobDistribution[] = [
  { name: "Installation", value: 45, percentage: 45, color: "#7C3434" },
  { name: "Repair", value: 35, percentage: 35, color: "#D4A5A5" },
  { name: "Maintenance", value: 35, percentage: 35, color: "#A04545" },
];
