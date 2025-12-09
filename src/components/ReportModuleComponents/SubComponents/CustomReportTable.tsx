/** @format */

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Column {
  key: string;
  label: string;
  width?: string;
}

interface CustomReportTableProps {
  title: string;
  columns: Column[];
  data: any[];
  renderCell?: (key: string, value: any, row: any) => React.ReactNode;
}

const CustomReportTable: React.FC<CustomReportTableProps> = ({
  title,
  columns,
  data,
  renderCell,
}) => {
  const getStatusBadge = (status: string) => {
    const statusStyles: Record<string, string> = {
      "Stock Out": "bg-red-100 text-red-700",
      "Low Stock": "bg-yellow-100 text-yellow-700",
      "In Stock": "bg-cyan-100 text-cyan-700",
    };

    return (
      <span
        className={`px-3 py-1 rounded-md text-xs font-medium ${
          statusStyles[status] || ""
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="bg-transparent">
      <h2 className="text-2xl font-bold text-[#535F72]  pb-4">{title}</h2>
      <ScrollArea className="h-[380px]">
        <Table className="bg-white rounded-2xl overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#5C2E2E] hover:bg-[#5C2E2E]">
              {columns.map((column, index) => (
                <TableHead
                  key={column.key}
                  className={`text-white font-semibold text-sm h-12 ${
                    index === 0 ? "rounded-tl-2xl" : ""
                  } ${index === columns.length - 1 ? "rounded-tr-2xl" : ""}`}
                  style={{ width: column.width }}
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={row.id || index}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    className="py-4 text-sm text-gray-700"
                  >
                    {renderCell ? (
                      renderCell(column.key, row[column.key], row)
                    ) : column.key === "status" ? (
                      getStatusBadge(row[column.key])
                    ) : column.key === "rating" ? (
                      <span className="flex items-center gap-1">
                        ⭐ {row[column.key]}
                      </span>
                    ) : (
                      row[column.key]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default CustomReportTable;
