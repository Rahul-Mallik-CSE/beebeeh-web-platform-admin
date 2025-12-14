/** @format */

export interface Maintenance {
  client: string;
  model: string;
  dueDate: string;
  dayLeft: string;
  locality: string;
  lastService: string;
  clientContacted: boolean;
  status: "Upcoming" | "Overdue";
}

export interface MaintenanceColumn {
  header: string;
  accessor: keyof Maintenance | ((row: Maintenance) => React.ReactNode);
  className?: string;
}
