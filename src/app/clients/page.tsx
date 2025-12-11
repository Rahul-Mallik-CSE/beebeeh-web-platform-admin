/** @format */

import ClientsTableSections from "@/components/ClientsComponents/ClientsTableSections";
import React from "react";

const ClientsPage = () => {
  return (
    <div className="w-full p-4">
      <div className="max-w-[2500px] rounded-2xl mx-auto bg-white">
        <ClientsTableSections />
      </div>
    </div>
  );
};

export default ClientsPage;
