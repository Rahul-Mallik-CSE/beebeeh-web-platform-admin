/** @format */
"use client";
import TechnicianChartSection from "@/components/TechniciansComponents/TechnicianChartSection";
import TechnicianDetailsSection from "@/components/TechniciansComponents/TechnicianDetailsSection";
import TechnicianDetailsTableSection from "@/components/TechniciansComponents/TechnicianDetailsTableSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const TechnicianDetailsPage = () => {
  const router = useRouter();
  return (
    <div className="w-full p-2 sm:p-4 overflow-x-hidden">
      <div className="max-w-[2500px] rounded-2xl mx-auto space-y-3 sm:space-y-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <button
                onClick={() => router.back()}
                className="flex cursor-pointer items-center font-bold gap-2 text-gray-800 hover:text-gray-900"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <span className="text-2xl font-bold">Technician Details</span>
            </div>
            <div>
              {/* Action buttons can be added here */}
              <Button className="bg-red-800 hover:bg-red-700 text-white flex items-center gap-1.5 sm:gap-2 text-sm px-3 sm:px-4 py-2 ">
                <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> View Calendar
              </Button>
            </div>
          </div>

          {/* Technician data section */}
          <TechnicianDetailsSection />

          <TechnicianChartSection />

          <TechnicianDetailsTableSection />
        </div>
      </div>
    </div>
  );
};

export default TechnicianDetailsPage;
