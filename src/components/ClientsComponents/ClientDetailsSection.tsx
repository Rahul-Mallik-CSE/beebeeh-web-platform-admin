/** @format */
"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Briefcase, Edit } from "lucide-react";
import { MdBlockFlipped, MdEmail, MdLocalPhone } from "react-icons/md";
import { ClientDetails, InfoCard } from "@/types/ClientsTypes";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { TbSquareRoundedCheck } from "react-icons/tb";

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
    <div className="w-full bg-white rounded-lg border border-gray-200 p-6 space-y-6">
      {/* Header Section */}
      <div className="flex items-start justify-between">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-linear-to-br from-pink-400 to-purple-500">
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
            className="border-gray-300 text-gray-700  bg-gray-50 hover:bg-gray-100 flex items-center gap-2"
          >
            <MdBlockFlipped className="w-4 h-4" />
            Disable Account
          </Button>
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-4 gap-4">
        {[
          {
            id: "phone",
            label: "Phone",
            value: client.contactNumber,
            icon: MdLocalPhone,
            iconBgColor: "bg-blue-100",
            iconColor: "text-blue-600",
          },
          {
            id: "email",
            label: "Email",
            value: client.email,
            icon: MdEmail,
            iconBgColor: "bg-purple-100",
            iconColor: "text-purple-600",
          },
          {
            id: "address",
            label: "Address",
            value: client.address,
            icon: FaMapMarkerAlt,
            iconBgColor: "bg-green-100",
            iconColor: "text-green-600",
          },
          {
            id: "totalJob",
            label: "Total Job",
            value: client.totalJobs,
            icon: TbSquareRoundedCheck,
            iconBgColor: "bg-cyan-100",
            iconColor: "text-cyan-600",
          },
        ].map((card) => {
          const IconComponent = card.icon;
          return (
            <div key={card.id} className="bg-gray-50 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 ${card.iconBgColor} rounded-lg flex items-center justify-center`}
                >
                  <IconComponent className={`w-4 h-4 ${card.iconColor}`} />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {card.label}
                </span>
              </div>
              <p
                className={`${
                  card.id === "totalJob" ? "text-2xl" : "text-base"
                } font-semibold text-gray-800`}
              >
                {card.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientDetailsSection;
