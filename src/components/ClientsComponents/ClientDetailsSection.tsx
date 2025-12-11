/** @format */
"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Briefcase, Edit, UserX } from "lucide-react";
import { ClientDetails } from "@/types/ClientsTypes";

interface ClientDetailsSectionProps {
  client: ClientDetails;
  onEdit?: () => void;
  onDisable?: () => void;
}

const ClientDetailsSection: React.FC<ClientDetailsSectionProps> = ({
  client,
  onEdit,
  onDisable,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-emerald-100 text-emerald-700";
      case "Unavailable":
        return "bg-red-100 text-red-700";
      case "Busy":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="w-full bg-white rounded-lg p-6 space-y-6">
      {/* Header Section */}
      <div className="flex items-start justify-between">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-pink-400 to-purple-500">
            {client.profileImage ? (
              <Image
                src={client.profileImage}
                alt={client.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                {client.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
          </div>

          {/* Name and ID */}
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-800">{client.name}</h2>
            <p className="text-sm text-gray-600">ID: {client.clientId}</p>
            <div
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                client.status
              )}`}
            >
              {client.status}
            </div>
          </div>
        </div>

        {/* Avatar and Buttons */}
        <div className="flex items-center gap-3">
          {/* Small Avatar */}
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-pink-400 to-purple-500">
            {client.profileImage ? (
              <Image
                src={client.profileImage}
                alt={client.name}
                width={48}
                height={48}
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-sm font-bold">
                {client.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
          </div>

          {/* Edit Client Button */}
          <Button
            onClick={onEdit}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
          >
            <Edit className="w-4 h-4" />
            Edit Client
          </Button>

          {/* Disable Account Button */}
          <Button
            onClick={onDisable}
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
          >
            <UserX className="w-4 h-4" />
            Disable Account
          </Button>
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-4 gap-4">
        {/* Phone Card */}
        <div className="bg-blue-50 rounded-lg p-4 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Phone className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Phone</span>
          </div>
          <p className="text-base font-semibold text-gray-800">
            {client.contactNumber}
          </p>
        </div>

        {/* Email Card */}
        <div className="bg-purple-50 rounded-lg p-4 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <Mail className="w-4 h-4 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Email</span>
          </div>
          <p className="text-base font-semibold text-gray-800">
            {client.email}
          </p>
        </div>

        {/* Address Card */}
        <div className="bg-green-50 rounded-lg p-4 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Address</span>
          </div>
          <p className="text-base font-semibold text-gray-800">
            {client.address}
          </p>
        </div>

        {/* Total Job Card */}
        <div className="bg-cyan-50 rounded-lg p-4 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-cyan-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Total Job</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">{client.totalJobs}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsSection;
