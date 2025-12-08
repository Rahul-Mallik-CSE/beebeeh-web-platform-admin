/** @format */
"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import HeaderSummaryCard from "./HeaderSummaryCard";
import FrequentlyUsedParts from "./FrequentlyUsedParts";
import ChecklistSection from "./ChecklistSection";
import ImageUploadSection from "./ImageUploadSection";
import ClientInfoSection from "./ClientInfoSection";
import ProductDetailsSection from "./ProductDetailsSection";
import CustomerSignatureSection from "./CustomerSignatureSection";

interface JobDetailsPageProps {
  jobId: string;
}

const JobDetailsPage = ({ jobId }: JobDetailsPageProps) => {
  const router = useRouter();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => router.back()}
            className="flex cursor-pointer items-center font-bold gap-2 text-gray-800 hover:text-gray-900"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="text-2xl font-bold">Job Details</span>
        </div>

        <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium px-6">
          Pending
        </Button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-7 gap-6">
        {/* Left Column - 2/3 */}
        <div className="lg:col-span-2 xl:col-span-2 space-y-6">
          <HeaderSummaryCard jobId={jobId} />
          <ClientInfoSection />
          <ProductDetailsSection />
        </div>
        {/* Right Column - 1/3 */}
        <div className="lg:col-span-3 xl:col-span-5  space-y-6">
          <FrequentlyUsedParts />
          <ChecklistSection />
          <ImageUploadSection />
          <CustomerSignatureSection />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 pt-6">
        <Button
          variant="outline"
          className="px-8 py-4 text-red-800 border-red-800 hover:bg-red-50"
        >
          Cancel Job
        </Button>
        <Button className="px-8 py-4 bg-red-800 hover:bg-red-700 text-white">
          Start Job
        </Button>
      </div>
    </div>
  );
};

export default JobDetailsPage;
