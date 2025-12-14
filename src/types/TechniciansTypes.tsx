/** @format */

export interface Technician {
  id: string;
  techId: string;
  name: string;
  contactNumber: string;
  skills: string;
  totalJobs: number;
  status: "Available" | "Unavailable";
}
