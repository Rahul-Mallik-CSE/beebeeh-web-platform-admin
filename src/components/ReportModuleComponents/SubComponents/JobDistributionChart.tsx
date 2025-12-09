/** @format */
"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { jobDistributionData } from "@/data/ReportModuleData";

const JobDistributionChart = () => {
  const renderCustomLabel = (entry: any) => {
    return (
      <text
        x={entry.x}
        y={entry.y}
        fill="white"
        textAnchor={entry.x > entry.cx ? "start" : "end"}
        dominantBaseline="central"
        style={{ fontSize: "14px", fontWeight: "bold" }}
      >
        <tspan x={entry.x} dy="0">
          {entry.percentage}%
        </tspan>
        <tspan
          x={entry.x}
          dy="18"
          style={{ fontSize: "12px", fontWeight: "normal" }}
        >
          {entry.name}
        </tspan>
      </text>
    );
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Job Distribution by Category
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={jobDistributionData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
          >
            {jobDistributionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            verticalAlign="top"
            height={40}
            iconType="circle"
            iconSize={8}
            wrapperStyle={{
              paddingBottom: "10px",
              fontSize: "13px",
              color: "#6B7280",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default JobDistributionChart;
