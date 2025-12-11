/** @format */
"use client";
import React, { useState } from "react";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { clientsData, clientsColumns } from "@/data/ClientsData";
import { Client } from "@/types/ClientsTypes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, Eye, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const ClientsTableSections = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClients = clientsData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.clientId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.town.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewClient = (client: Client) => {
    router.push(`/clients/${client.clientId}`);
  };

  const columnsWithActions = [
    ...clientsColumns,
    {
      header: "Action",
      accessor: (row: Client) => (
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => handleViewClient(row)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Eye className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => console.log("Delete", row.clientId)}
            className="p-2 hover:bg-red-50 rounded-full transition-colors"
          >
            <Trash2 className="w-5 h-5 text-red-600" />
          </button>
        </div>
      ),
      className: "text-right",
    },
  ];

  return (
    <div className="w-full space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-gray-800">Clients</h2>
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          {/* Add Button */}
          <Button
            onClick={() => router.push("/clients/add-client")}
            className="bg-red-800 hover:bg-red-700 text-white flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add New Client
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg">
        <CustomTable
          data={filteredClients}
          columns={columnsWithActions}
          itemsPerPage={10}
        />
      </div>
    </div>
  );
};

export default ClientsTableSections;
