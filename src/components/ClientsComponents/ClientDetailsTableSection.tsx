/** @format */
"use client";
import React from "react";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { jobHistoryData, jobHistoryColumns } from "@/data/ClientsData";
import { JobHistory } from "@/types/ClientsTypes";
import { useRouter } from "next/navigation";
import { Eye } from "lucide-react";

const ClientDetailsTableSection = () => {
  const router = useRouter();

  const handleViewJob = (job: JobHistory) => {};

  const columnsWithActions = [
    ...jobHistoryColumns,
    {
      header: "Action",
      accessor: (row: JobHistory) => (
        <div className="flex items-center justify-end">
          <button
            onClick={() => handleViewJob(row)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Eye className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      ),
      className: "text-right",
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        All Job History
      </h3>
      <CustomTable
        data={jobHistoryData}
        columns={columnsWithActions}
        itemsPerPage={10}
      />
    </div>
  );
};

export default ClientDetailsTableSection;
