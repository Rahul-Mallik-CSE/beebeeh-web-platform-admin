/** @format */
"use client";
import React from "react";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { productDetailsData } from "@/data/ProductsData";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { PartInventory, FrequentPart, RelatedJob } from "@/types/ProductsTypes";

const ProductsDetailsTableSection = () => {
  const product = productDetailsData["1"];

  // Installation Checklist Columns
  const installationColumns = [
    {
      header: "Task",
      accessor: (row: any) => row.task,
    },
    {
      header: "Checklist",
      accessor: (row: any) => (
        <input
          type="checkbox"
          checked={row.completed}
          className="w-4 h-4 rounded border-gray-300"
          readOnly
        />
      ),
    },
  ];

  // Parts Inventory Columns
  const partsInventoryColumns = [
    {
      header: "Part ID",
      accessor: (row: PartInventory) => row.partId,
    },
    {
      header: "Part Name",
      accessor: (row: PartInventory) => row.partName,
    },
    {
      header: "Availability",
      accessor: (row: PartInventory) => row.availability,
    },
    {
      header: "Status",
      accessor: (row: PartInventory) => {
        const statusColors = {
          Available: "bg-green-100 text-green-700",
          "Low Stock": "bg-yellow-100 text-yellow-700",
          "Out of Stock": "bg-red-100 text-red-700",
        };
        return (
          <span
            className={`px-2 sm:px-3 py-1 rounded-md text-xs font-medium ${
              statusColors[row.status]
            }`}
          >
            {row.status}
          </span>
        );
      },
    },
  ];

  // Frequently Used Parts Columns
  const frequentPartsColumns = [
    {
      header: "Part ID",
      accessor: (row: FrequentPart) => row.partId,
    },
    {
      header: "Part Name",
      accessor: (row: FrequentPart) => row.partName,
    },
    {
      header: "Units",
      accessor: (row: FrequentPart) => row.units,
    },
    {
      header: "Quantity",
      accessor: (row: FrequentPart) => row.quantity,
    },
  ];

  // Related Jobs Columns
  const relatedJobsColumns = [
    {
      header: "Job ID",
      accessor: (row: RelatedJob) => row.jobId,
    },
    {
      header: "Client",
      accessor: (row: RelatedJob) => row.client,
    },
    {
      header: "Type",
      accessor: (row: RelatedJob) => row.type,
    },
    {
      header: "Technician",
      accessor: (row: RelatedJob) => row.technician,
    },
    {
      header: "Criteria Date",
      accessor: (row: RelatedJob) => row.criteriaDate,
    },
    {
      header: "Complete Date",
      accessor: (row: RelatedJob) => row.completeDate,
    },
    {
      header: "Status",
      accessor: (row: RelatedJob) => {
        const statusColors = {
          Work: "bg-blue-100 text-blue-700",
          Done: "bg-green-100 text-green-700",
          Pending: "bg-yellow-100 text-yellow-700",
        };
        return (
          <span
            className={`px-2 sm:px-3 py-1 rounded-md text-xs font-medium ${
              statusColors[row.status]
            }`}
          >
            {row.status}
          </span>
        );
      },
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Checklists Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Installation Checklist */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              Installation Checklist
            </h3>
            <Button
              variant="outline"
              size="sm"
              className="text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3 border-gray-300"
            >
              <Plus className="w-3.5 h-3.5 mr-1" />
              Add Checklist
            </Button>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg">
            <CustomTable
              data={product.installationChecklist}
              columns={installationColumns}
              itemsPerPage={5}
            />
          </div>
        </div>

        {/* Maintenance Checklist */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              Maintenance Checklist
            </h3>
            <Button
              variant="outline"
              size="sm"
              className="text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3 border-gray-300"
            >
              <Plus className="w-3.5 h-3.5 mr-1" />
              Add Checklist
            </Button>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg">
            <CustomTable
              data={product.maintenanceChecklist}
              columns={installationColumns}
              itemsPerPage={5}
            />
          </div>
        </div>
      </div>

      {/* All Parts Inventory Status */}
      <div className="space-y-3">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
          All Parts Inventory Status
        </h3>
        <div className="bg-white border border-gray-200 rounded-lg">
          <CustomTable
            data={product.partsInventory}
            columns={partsInventoryColumns}
            itemsPerPage={5}
          />
        </div>
      </div>

      {/* Frequently Used Parts */}
      <div className="space-y-3">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
          Frequently Used Parts
        </h3>
        <div className="bg-white border border-gray-200 rounded-lg">
          <CustomTable
            data={product.frequentlyUsedParts}
            columns={frequentPartsColumns}
            itemsPerPage={5}
          />
        </div>
      </div>

      {/* Related Jobs */}
      <div className="space-y-3">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
          Related Jobs
        </h3>
        <div className="bg-white border border-gray-200 rounded-lg">
          <CustomTable
            data={product.relatedJobs}
            columns={relatedJobsColumns}
            itemsPerPage={5}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsTableSection;
