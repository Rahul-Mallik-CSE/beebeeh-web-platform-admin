/** @format */

export interface Client {
  clientId: string;
  name: string;
  type: string;
  town: string;
  contactNumber: string;
  installations: number;
  lastService: string;
  created: string;
}

export interface ClientColumn {
  header: string;
  accessor: keyof Client | ((row: Client) => React.ReactNode);
  className?: string;
}
