/** @format */
import React from "react";

const ProductDetailsSection = () => {
  return (
    <div className="bg-white">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Product Details Section:
      </h3>
      <div className="space-y-4 border border-gray-200 p-4 rounded-2xl">
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">Product Model :</p>
          <p className="text-gray-500 text-sm">AquaFilter Pro 200</p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">Alias :</p>
          <p className="text-gray-500 text-sm">AP-200</p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">Serial Number :</p>
          <p className="text-gray-500 text-sm">SN-20498</p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <p className="text-gray-800 font-medium text-base">
            Installed Date :
          </p>
          <p className="text-gray-500 text-sm">
            Not installed (New Installation)
          </p>
        </div>
        <div className="flex items-center justify-between py-2">
          <p className="text-gray-800 font-medium text-base">
            Last Service Date :
          </p>
          <p className="text-gray-500 text-sm">N/A (First time)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
