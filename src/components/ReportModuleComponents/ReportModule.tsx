/** @format */

import React from "react";
import StatsSection from "./StatsSection";
import ChartSection from "./ChartSection";

const ReportModule = () => {
  return (
    <div className="w-full bg-transparent space-y-4">
      <StatsSection />

      <ChartSection />
    </div>
  );
};

export default ReportModule;
