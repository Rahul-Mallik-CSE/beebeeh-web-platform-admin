/** @format */
"use client";
import React from "react";
import NotificationCard from "./NotificationCard";
import { notificationsData } from "@/data/AllData";

const NotificationsSection = () => {
  return (
    <div className="space-y-4">
      {notificationsData.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationsSection;
