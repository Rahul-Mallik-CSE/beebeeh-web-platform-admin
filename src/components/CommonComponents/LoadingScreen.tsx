/** @format */

import React from "react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#E8CFDA] to-[#F5E6EE] flex items-center justify-center">
      <div className="text-center">
        {/* Logo dots */}
        <div className="flex gap-2 justify-center mb-8 animate-pulse">
          <div className="w-12 h-6 rounded-full bg-[#9E2729]"></div>
          <div className="w-6 h-6 rounded-full bg-[#9E2729]"></div>
          <div className="w-6 h-6 rounded-full bg-[#9E2729]"></div>
          <div className="w-6 h-6 rounded-full bg-[#9E2729]"></div>
        </div>

        {/* Beebeeh text */}
        <h1 className="text-5xl font-bold text-[#9E2729] mb-4">Beebeeh</h1>

        {/* Spinner */}
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-[#E8D5D8] border-t-[#9E2729] rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
