/** @format */
"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ClientDetailsPage = () => {
  const router = useRouter();
  return (
    <div className="w-full p-4">
      <div className="max-w-[2500px] rounded-2xl mx-auto space-y-4">
        {/* table section */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => router.back()}
                className="flex cursor-pointer items-center font-bold gap-2 text-gray-800 hover:text-gray-900"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <span className="text-2xl font-bold">Client Details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsPage;
