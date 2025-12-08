/** @format */
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CustomerSignatureSection = () => {
  const [signatureImage, setSignatureImage] = useState<string | null>(null);

  const handleSignatureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSignatureImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCollectClick = () => {
    document.getElementById("signature-upload")?.click();
  };

  return (
    <div className="bg-white">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Customer Signature Section:
      </h3>
      <div className="border border-gray-200 rounded-2xl p-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Left side - Client info */}
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <p className="text-gray-800 font-medium text-base">
                Client Name :
              </p>
              <p className="text-gray-500 text-sm">John Doe</p>
            </div>
            <div className="flex items-center justify-between py-2">
              <p className="text-gray-800 font-medium text-base">
                Signature time :
              </p>
              <p className="text-gray-500 text-sm">24 Nov 2025, 2:30 PM</p>
            </div>
            <div className="flex items-center justify-between py-2">
              <p className="text-gray-800 font-medium text-base">
                Signature Status :
              </p>
              <p
                className={`font-medium text-sm ${
                  signatureImage ? "text-teal-500" : "text-red-500"
                }`}
              >
                {signatureImage ? "Complete" : "Incomplete"}
              </p>
            </div>
          </div>

          {/* Right side - Signature area and button */}
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg h-16 flex items-center justify-center ">
              {signatureImage ? (
                <Image
                  src={signatureImage}
                  alt="Customer signature"
                  width={200}
                  height={64}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <p className="text-gray-400 text-sm">Signature area</p>
              )}
            </div>
            <div className="border border-black w-full"></div>
            <input
              id="signature-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleSignatureUpload}
            />
            <Button
              onClick={handleCollectClick}
              className="w-full bg-[#5C3D2E] hover:bg-[#4A2F22] text-white rounded-lg"
            >
              Collect
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSignatureSection;
