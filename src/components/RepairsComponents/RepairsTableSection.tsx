/** @format */
"use client";
import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomTable from "../CommonComponents/CustomTable";
import {
  installationColumns,
  installationJobsData,
} from "@/data/InstallationData";
import type { InstallationJob } from "@/types/AllTypes";
import { useRouter } from "next/navigation";

const RepairsTableSection = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleAction = (job: InstallationJob) => {
    router.push(`/installation/${job.jobId}`);
  };

  const handleAddRepairs = () => {
    router.push("/repairs/add-repairs");
  };

  const filteredData = installationJobsData.filter(
    (job) =>
      job.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.jobId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.technician.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full space-y-4 sm:space-y-6 bg-white p-3 sm:p-4 md:p-6 rounded-2xl">
      {/* Header with Search and Button */}
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          Repairs
        </h1>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
          <div className="relative w-40 sm:w-48 md:w-56 lg:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 w-full text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
            />
          </div>
          <Button
            onClick={handleAddRepairs}
            className="bg-red-800 hover:bg-red-700 text-white px-3 sm:px-4 md:px-6 py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 text-sm"
          >
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <span className="whitespace-nowrap">Add Repairs</span>
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="">
        <CustomTable
          data={filteredData}
          columns={installationColumns}
          onAction={handleAction}
          itemsPerPage={10}
        />
      </div>
    </div>
  );
};

export default RepairsTableSection;
