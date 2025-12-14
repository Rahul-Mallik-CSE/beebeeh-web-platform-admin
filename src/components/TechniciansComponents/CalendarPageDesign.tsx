/** @format */
"use client";

import React, { useState, useMemo } from "react";
import { Calendar, momentLocalizer, View } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { technicianCalendarEvents } from "@/data/TechniciansData";
import { CalendarJobEvent } from "@/types/TechniciansTypes";
import { useRouter } from "next/navigation";

const localizer = momentLocalizer(moment);

const CalendarPageDesign = () => {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 1));
  const [view, setView] = useState<View>("month");

  // Custom date cell wrapper to show job counts
  const CustomDateCellWrapper = ({ children, value }: any) => {
    const dateStr = moment(value).format("YYYY-MM-DD");
    const event = technicianCalendarEvents.find(
      (e) => moment(e.date).format("YYYY-MM-DD") === dateStr
    );

    return (
      <div className="relative h-full">
        {children}
        {event && (
          <div
            className="absolute top-8 left-1 right-1 rounded-md p-1.5 text-[10px] leading-tight"
            style={{
              backgroundColor: event.color,
              color: "white",
            }}
          >
            <div className="flex justify-between items-center mb-0.5">
              <span className="font-medium">Installations</span>
              <span className="font-semibold">{event.installations}</span>
            </div>
            <div className="flex justify-between items-center mb-0.5">
              <span className="font-medium">Repairs</span>
              <span className="font-semibold">{event.repairs}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Maintenance</span>
              <span className="font-semibold">{event.maintenance}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Custom toolbar
  const CustomToolbar = (toolbar: any) => {
    const goToBack = () => {
      const newDate = moment(toolbar.date).subtract(1, "month").toDate();
      toolbar.onNavigate("prev", newDate);
      setCurrentDate(newDate);
    };

    const goToNext = () => {
      const newDate = moment(toolbar.date).add(1, "month").toDate();
      toolbar.onNavigate("next", newDate);
      setCurrentDate(newDate);
    };

    const label = moment(toolbar.date).format("MMMM YYYY");

    return (
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-800 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Technician Calendar
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-base font-medium text-gray-700">{label}</span>
          <button
            onClick={goToBack}
            className="p-1.5 hover:bg-gray-100 rounded transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={goToNext}
            className="p-1.5 bg-red-700 hover:bg-red-800 text-white rounded transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full p-2 sm:p-4 overflow-x-hidden">
      <div className="max-w-[2500px] rounded-2xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl p-3 sm:p-4 md:p-6">
          <div style={{ height: "700px" }}>
            <Calendar
              localizer={localizer}
              events={[]}
              startAccessor="start"
              endAccessor="end"
              date={currentDate}
              onNavigate={(date) => setCurrentDate(date)}
              view={view}
              onView={(newView) => setView(newView)}
              views={["month"]}
              components={{
                dateCellWrapper: CustomDateCellWrapper,
                toolbar: CustomToolbar,
              }}
              style={{ height: "100%" }}
              className="technician-calendar"
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .technician-calendar .rbc-calendar {
          font-family: inherit;
        }
        .technician-calendar .rbc-header {
          padding: 12px 8px;
          font-weight: 600;
          font-size: 14px;
          color: #374151;
          border-bottom: 1px solid #e5e7eb;
        }
        .technician-calendar .rbc-date-cell {
          padding: 8px;
          text-align: right;
          font-size: 14px;
          color: #1f2937;
        }
        .technician-calendar .rbc-month-view {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
        }
        .technician-calendar .rbc-day-bg {
          border-left: 1px solid #e5e7eb;
        }
        .technician-calendar .rbc-month-row {
          border-top: 1px solid #e5e7eb;
          min-height: 120px;
        }
        .technician-calendar .rbc-off-range {
          color: #9ca3af;
        }
        .technician-calendar .rbc-today {
          background-color: #fef3c7;
        }
      `}</style>
    </div>
  );
};

export default CalendarPageDesign;
