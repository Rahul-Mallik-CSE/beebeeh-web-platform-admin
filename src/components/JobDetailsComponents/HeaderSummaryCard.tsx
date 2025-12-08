/** @format */
import React from "react";

interface HeaderSummaryCardProps {
  jobId: string;
}

const HeaderSummaryCard = ({ jobId }: HeaderSummaryCardProps) => {
  return (
    <div className="bg-white   ">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Header Summary card:
      </h3>
      <div className="space-y-4 border border-gray-200 p-4 rounded-2xl">
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">Job ID :</p>
          <p className="text-gray-500 text-sm">#{jobId}</p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">Job Type :</p>
          <p className="text-gray-500 text-sm">Installation</p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">Product Model :</p>
          <p className="text-gray-500 text-sm">AquaPure Pro 300</p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">Serial Number :</p>
          <p className="text-gray-500 text-sm">SR 20248</p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">Client Name :</p>
          <p className="text-gray-500 text-sm">John Doe</p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">
            Client Location :
          </p>
          <p className="text-gray-500 text-sm">24 New Street, LA</p>
        </div>
        <div className="flex items-center justify-between py-2">
          <p className="text-gray-800 font-medium text-base">
            Scheduled Date :
          </p>
          <p className="text-gray-500 text-sm">04 Nov 2025, 2:30 PM</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSummaryCard;
