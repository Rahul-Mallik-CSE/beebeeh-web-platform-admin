/** @format */
"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { View } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomTableProps<T> {
  data: T[];
  columns: {
    header: string;
    accessor: keyof T | ((row: T) => React.ReactNode);
    className?: string;
  }[];
  onAction?: (row: T) => void;
  itemsPerPage?: number;
  title?: string;

  additionalCount?: number;
}

const CustomTable = <T extends Record<string, any>>({
  data,
  columns,
  onAction,
  itemsPerPage = 10,
  title,
}: CustomTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "in progress":
        return "bg-cyan-100 text-cyan-700";
      case "complete":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const renderCell = (row: T, column: (typeof columns)[0]) => {
    if (typeof column.accessor === "function") {
      return column.accessor(row);
    }

    const value = row[column.accessor as keyof T];

    // Special rendering for status
    if (column.header === "Status" && typeof value === "string") {
      return (
        <div
          className={cn(
            "w-24 px-2  py-1 flex justify-center items-center rounded-md text-sm font-medium",
            getStatusColor(value)
          )}
        >
          {value}
        </div>
      );
    }

    return value as React.ReactNode;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="w-full space-y-4">
      {/* Header */}
      {title && (
        <div className="flex items-center justify-between">
          {title && (
            <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
          )}
        </div>
      )}

      <div className="rounded-lg overflow-hidden">
        <Table className="border-none">
          <TableHeader>
            <TableRow className="bg-[#F1F4F9] hover:bg-[#F1F4F9] border-none">
              {columns.map((column, index) => (
                <TableHead
                  key={index}
                  className={cn(
                    "font-semibold text-gray-700 text-sm py-3",
                    column.className
                  )}
                >
                  {column.header}
                </TableHead>
              ))}
              {onAction && (
                <TableHead className="font-semibold text-gray-700 text-sm text-right">
                  Action
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="hover:bg-gray-50 transition-colors"
              >
                {columns.map((column, colIndex) => (
                  <TableCell
                    key={colIndex}
                    className={cn("text-gray-700 py-5", column.className)}
                  >
                    {renderCell(row, column)}
                  </TableCell>
                ))}
                {onAction && (
                  <TableCell className="text-right">
                    <button
                      onClick={() => onAction(row)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors inline-flex items-center justify-center"
                    >
                      <View className="w-5 h-5 text-gray-600" />
                    </button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              className={cn(
                currentPage === 1
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              )}
            />
          </PaginationItem>

          {getPageNumbers().map((page, index) => (
            <PaginationItem key={index}>
              {page === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  onClick={() => handlePageChange(page as number)}
                  isActive={currentPage === page}
                  className={cn(
                    "cursor-pointer",
                    currentPage === page &&
                      "bg-red-800 text-white hover:bg-red-700 hover:text-white"
                  )}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              className={cn(
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CustomTable;
