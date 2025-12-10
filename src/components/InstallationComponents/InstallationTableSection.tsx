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

const InstallationTableSection = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleAction = (job: InstallationJob) => {
    router.push(`/installation/${job.jobId}`);
  };

  const filteredData = installationJobsData.filter(
    (job) =>
      job.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.jobId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.technician.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full space-y-6 bg-white p-6 rounded-2xl">
      {/* Header with Search and Button */}
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold text-gray-800">Installations</h1>
        <div className="flex items-center gap-4">
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
            />
          </div>
          <Button className="bg-red-800 hover:bg-red-700 text-white px-6 py-2 rounded-lg flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add Installations
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

export default InstallationTableSection;
