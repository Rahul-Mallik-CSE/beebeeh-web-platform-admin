/** @format */

import React from "react";
import NotificationsSection from "@/components/NotificationsComponents/NotificationsSection";

const NotificationsPage = () => {
  return (
    <div className="w-full p-4">
      <div className="max-w-[2500px] rounded-2xl mx-auto space-y-6">
        <div className="bg-transparent rounded-2xl">
          <h1 className="text-3xl font-semibold text-gray-600">
            Notifications
          </h1>
        </div>
        <div>
          <NotificationsSection />
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
