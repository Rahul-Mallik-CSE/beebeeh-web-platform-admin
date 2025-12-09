/** @format */
"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { weeklyJobActivityData } from "@/data/ReportModuleData";

const JobActivityChart = () => {
  return (
    <div className="bg-transparent ">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Weekly Jobs Activity
      </h2>
      <div className="bg-white rounded-2xl py-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyJobActivityData} barGap={-15}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="day"
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              ticks={[0, 100, 200, 300, 400, 500, 600]}
            />
            <Legend
              verticalAlign="top"
              height={50}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{
                paddingBottom: "20px",
                fontSize: "13px",
                color: "#6B7280",
              }}
            />
            <Bar
              dataKey="installation"
              fill="#DC2626"
              radius={[4, 4, 0, 0]}
              barSize={20}
              name="Installation"
            />
            <Bar
              dataKey="repair"
              fill="#D4A5A5"
              radius={[4, 4, 0, 0]}
              barSize={20}
              name="Repair"
            />
            <Bar
              dataKey="maintenance"
              fill="#7C3434"
              radius={[4, 4, 0, 0]}
              barSize={20}
              name="Maintenance"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default JobActivityChart;
