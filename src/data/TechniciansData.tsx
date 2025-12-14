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
