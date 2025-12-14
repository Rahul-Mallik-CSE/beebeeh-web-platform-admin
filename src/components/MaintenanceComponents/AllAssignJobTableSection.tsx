/** @format */
"use client";
import { ArrowLeft, Eye, Search } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import CustomTable from "../CommonComponents/CustomTable";
import { allAssignJobData } from "@/data/MaintenanceData";
import { AllAssignJob, AllAssignJobColumn } from "@/types/MaintenanceTypes";
import { useRouter } from "next/navigation";

const AllAssignJobTableSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredData = allAssignJobData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const allAssignJobColumns: AllAssignJobColumn[] = [
    {
      header: "Client",
      accessor: "jobId",
    },
    {
      header: "Client",
      accessor: "client",
    },
    {
      header: "Product",
      accessor: "product",
    },
    {
      header: "Type",
      accessor: "type",
    },
    {
      header: "Technician",
      accessor: "technician",
    },
    {
      header: "Scheduled",
      accessor: "scheduled",
    },
    {
      header: "Status",
      accessor: (row: AllAssignJob) => (
        <div
          className={`px-3 py-1 w-24  flex justify-center items-center rounded-md text-sm font-medium ${
            row.status === "Assign"
              ? "bg-blue-100 text-blue-700"
              : row.status === "In-Progress"
              ? "bg-purple-100 text-purple-700"
              : "bg-cyan-100 text-cyan-700"
          }`}
        >
          {row.status}
        </div>
      ),
    },
    {
      header: "Action",
      accessor: (row: AllAssignJob) => (
        <div className="flex items-center justify-center">
          <button className="p-1.5 cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      ),
      className: "text-center",
    },
  ];

  return (
    <div className="w-full space-y-4 sm:space-y-6 bg-white p-3 sm:p-4 md:p-6 rounded-2xl">
      {/* Back Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => router.back()}
          className="flex cursor-pointer items-center gap-2 text-gray-800 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <span className="text-sm sm:text-base md:text-2xl font-semibold text-gray-800">
          View All Assign Job
        </span>
      </div>

      {/* Header with Search */}
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          Maintenance
        </h1>
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
      </div>

      {/* Table */}
      <CustomTable data={filteredData} columns={allAssignJobColumns} />
    </div>
  );
};

export default AllAssignJobTableSection;
