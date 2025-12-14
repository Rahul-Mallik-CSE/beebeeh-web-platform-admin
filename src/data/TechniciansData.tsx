/** @format */

import { Technician } from "@/types/TechniciansTypes";

export const techniciansData: Technician[] = [
  {
    id: "1",
    techId: "T-501",
    name: "Malik Khan",
    contactNumber: "+44 223 882",
    skills: "Installation, Repair",
    totalJobs: 90,
    status: "Available",
  },
  {
    id: "2",
    techId: "T-501",
    name: "Malik Khan",
    contactNumber: "+44 223 882",
    skills: "Maintenance",
    totalJobs: 90,
    status: "Unavailable",
  },
  {
    id: "3",
    techId: "T-501",
    name: "Malik Khan",
    contactNumber: "+44 223 882",
    skills: "Maintenance",
    totalJobs: 90,
    status: "Unavailable",
  },
  {
    id: "4",
    techId: "T-501",
    name: "Malik Khan",
    contactNumber: "+44 223 882",
    skills: "Installation, Repair",
    totalJobs: 90,
    status: "Available",
  },
  {
    id: "5",
    techId: "T-501",
    name: "Malik Khan",
    contactNumber: "+44 223 882",
    skills: "Maintenance",
    totalJobs: 90,
    status: "Unavailable",
  },
  {
    id: "6",
    techId: "T-501",
    name: "Malik Khan",
    contactNumber: "+44 223 882",
    skills: "Installation, Repair",
    totalJobs: 90,
    status: "Available",
  },
  {
    id: "7",
    techId: "T-501",
    name: "Malik Khan",
    contactNumber: "+44 223 882",
    skills: "Installation, Repair",
    totalJobs: 90,
    status: "Available",
  },
  {
    id: "8",
    techId: "T-501",
    name: "Malik Khan",
    contactNumber: "+44 223 882",
    skills: "Maintenance",
    totalJobs: 90,
    status: "Unavailable",
  },
  {
    id: "9",
    techId: "T-501",
    name: "Malik Khan",
    contactNumber: "+44 223 882",
    skills: "Installation, Repair",
    totalJobs: 90,
    status: "Available",
  },
  {
    id: "10",
    techId: "T-501",
    name: "Malik Khan",
    contactNumber: "+44 223 882",
    skills: "Maintenance",
    totalJobs: 90,
    status: "Unavailable",
  },
];

export const techniciansColumns = [
  {
    header: "Tech ID",
    accessor: (row: Technician) => row.techId,
  },
  {
    header: "Name",
    accessor: (row: Technician) => row.name,
  },
  {
    header: "Contact Number",
    accessor: (row: Technician) => row.contactNumber,
  },
  {
    header: "Skills",
    accessor: (row: Technician) => row.skills,
  },
  {
    header: "Total Jobs",
    accessor: (row: Technician) => row.totalJobs,
  },
  {
    header: "Status",
    accessor: (row: Technician) => {
      const statusColors = {
        Available: "bg-emerald-100 text-emerald-700",
        Unavailable: "bg-red-100 text-red-700",
      };
      return (
        <span
          className={`px-2 sm:px-3 py-1 rounded-md text-xs font-medium ${
            statusColors[row.status]
          }`}
        >
          {row.status}
        </span>
      );
    },
  },
];

import { TechnicianDetails } from "@/types/TechniciansTypes";

export const technicianDetailsData: TechnicianDetails = {
  id: "1",
  techId: "T-201",
  name: "Malik Ahmed",
  contactNumber: "+1 (555) 123-4567",
  email: "malik.ahmed@service.com",
  address: "123 Main St, New York",
  skills: "Install, Repair",
  rating: 5.0,
  completedJobs: 16,
  todaysJobs: 16,
  status: "Available",
  profileImage: undefined,
};

import { CalendarJobEvent } from "@/types/TechniciansTypes";

export const technicianCalendarEvents: CalendarJobEvent[] = [
  {
    id: "1",
    date: new Date(2025, 1, 7),
    installations: 5,
    repairs: 3,
    maintenance: 3,
    color: "#22d3ee",
  },
  {
    id: "2",
    date: new Date(2025, 1, 5),
    installations: 5,
    repairs: 3,
    maintenance: 3,
    color: "#3b82f6",
  },
  {
    id: "3",
    date: new Date(2025, 1, 3),
    installations: 5,
    repairs: 3,
    maintenance: 3,
    color: "#f97316",
  },
  {
    id: "4",
    date: new Date(2025, 1, 14),
    installations: 5,
    repairs: 3,
    maintenance: 3,
    color: "#ef4444",
  },
  {
    id: "5",
    date: new Date(2025, 1, 12),
    installations: 5,
    repairs: 3,
    maintenance: 3,
    color: "#eab308",
  },
  {
    id: "6",
    date: new Date(2025, 1, 8),
    installations: 5,
    repairs: 3,
    maintenance: 3,
    color: "#06b6d4",
  },
  {
    id: "7",
    date: new Date(2025, 1, 21),
    installations: 5,
    repairs: 3,
    maintenance: 3,
    color: "#10b981",
  },
  {
    id: "8",
    date: new Date(2025, 1, 20),
    installations: 5,
    repairs: 3,
    maintenance: 3,
    color: "#8b5cf6",
  },
  {
    id: "9",
    date: new Date(2025, 1, 17),
    installations: 5,
    repairs: 3,
    maintenance: 3,
    color: "#dc2626",
  },
  {
    id: "10",
    date: new Date(2025, 1, 26),
    installations: 5,
    repairs: 3,
    maintenance: 3,
    color: "#ec4899",
  },
  {
    id: "11",
    date: new Date(2025, 1, 23),
    installations: 5,
    repairs: 3,
    maintenance: 3,
    color: "#2563eb",
  },
];
