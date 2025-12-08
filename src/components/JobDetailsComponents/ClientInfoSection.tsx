/** @format */
import React from "react";
import { MapPin } from "lucide-react";

const ClientInfoSection = () => {
  return (
    <div className="bg-white">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Client Information Section:
      </h3>
      <div className="space-y-4 border border-gray-200 p-4 rounded-2xl">
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">Client Name :</p>
          <p className="text-gray-500 text-sm">John Doe</p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">
            Contact Number :
          </p>
          <p className="text-gray-500 text-sm">+1 345 824 9384</p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">Address :</p>
          <p className="text-gray-500 text-sm">24 New Street, Los Angeles</p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">Locality :</p>
          <p className="text-gray-500 text-sm">Downtown</p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">Notes :</p>
          <p className="text-gray-500 text-sm">Water pressure low last visit</p>
        </div>
        <div className="flex items-center justify-between py-2">
          <p className="text-gray-800 font-medium text-base">Pin Location :</p>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#FF6F001A] text-gray-600 rounded-lg hover:bg-orange-100 transition-colors">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Map</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientInfoSection;
