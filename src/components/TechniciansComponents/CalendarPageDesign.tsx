/** @format */
"use client";

import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { technicianCalendarEvents } from "@/data/TechniciansData";
import { CalendarJobEvent } from "@/types/TechniciansTypes";

const CalendarPageDesign = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 1));

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get calendar data for the current month
  const calendarData = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // First day of the month
    const firstDay = new Date(year, month, 1);
    const startingDayOfWeek = firstDay.getDay();

    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();

    // Previous month's last day
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    const days: {
      day: number;
      isCurrentMonth: boolean;
      date: Date;
      event?: CalendarJobEvent;
    }[] = [];

    // Previous month's days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const day = prevMonthLastDay - i;
      const date = new Date(year, month - 1, day);
      days.push({ day, isCurrentMonth: false, date });
    }

    // Current month's days
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(year, month, day);
      const event = technicianCalendarEvents.find(
        (e) =>
          e.date.getFullYear() === year &&
          e.date.getMonth() === month &&
          e.date.getDate() === day
      );
      days.push({ day, isCurrentMonth: true, date, event });
    }

    // Next month's days to complete the grid
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, month + 1, day);
      days.push({ day, isCurrentMonth: false, date });
    }

    return days;
  }, [currentDate]);

  const goToPrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const monthYear = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Split calendar data into weeks
  const weeks = [];
  for (let i = 0; i < calendarData.length; i += 7) {
    weeks.push(calendarData.slice(i, i + 7));
  }

  return (
    <div className="w-full p-4 sm:p-6 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            {monthYear}
          </h1>
          <div className="flex items-center gap-1">
            <button
              onClick={goToPrevMonth}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            </button>
            <button
              onClick={goToNextMonth}
              className="p-1 bg-red-600 hover:bg-red-700 rounded transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Days of Week Header */}
          <div className="grid grid-cols-7 border-b border-gray-200">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="px-2 py-3 text-center text-sm font-medium text-gray-600 border-r border-gray-200 last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Weeks */}
          {weeks.map((week, weekIndex) => (
            <div
              key={weekIndex}
              className="grid grid-cols-7 border-b border-gray-200 last:border-b-0"
            >
              {week.map((dayData, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`min-h-[120px] p-2 border-r border-gray-200 last:border-r-0 ${
                    !dayData.isCurrentMonth ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  {/* Date Number */}
                  <div
                    className={`text-right text-sm font-medium mb-1 ${
                      dayData.isCurrentMonth ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {dayData.day}
                  </div>

                  {/* Event Card */}
                  {dayData.event && (
                    <div
                      className="rounded-md p-2 text-xs"
                      style={{
                        backgroundColor: dayData.event.bgColor,
                        borderLeft: `3px solid ${dayData.event.color}`,
                      }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span
                          style={{ color: dayData.event.textColor }}
                          className="font-medium"
                        >
                          Installations
                        </span>
                        <span
                          style={{ color: dayData.event.textColor }}
                          className="font-semibold"
                        >
                          {dayData.event.installations}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-1">
                        <span
                          style={{ color: dayData.event.textColor }}
                          className="font-medium"
                        >
                          Repairs
                        </span>
                        <span
                          style={{ color: dayData.event.textColor }}
                          className="font-semibold"
                        >
                          {dayData.event.repairs}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span
                          style={{ color: dayData.event.textColor }}
                          className="font-medium"
                        >
                          Maintenance
                        </span>
                        <span
                          style={{ color: dayData.event.textColor }}
                          className="font-semibold"
                        >
                          {dayData.event.maintenance}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPageDesign;
