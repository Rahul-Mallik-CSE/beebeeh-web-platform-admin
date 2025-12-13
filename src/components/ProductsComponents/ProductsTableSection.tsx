/** @format */
"use client";
import React, { useState } from "react";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { productsData, productsColumns } from "@/data/ProductsData";
import { Product } from "@/types/ProductsTypes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, Eye, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const ProductsTableSection = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = productsData.filter(
    (product) =>
      product.modelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.productId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.alias.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewProduct = (product: Product) => {
    router.push(`/products/${product.id}`);
  };

  const columnsWithActions = [
    ...productsColumns,
    {
      header: "Action",
      accessor: (row: Product) => (
        <div className="flex items-center justify-end gap-1 sm:gap-2">
          <button
            onClick={() => handleViewProduct(row)}
            className="p-1.5 sm:p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
          >
            <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
          <button
            onClick={() => console.log("Delete", row.id)}
            className="p-1.5 sm:p-2 cursor-pointer hover:bg-red-50 rounded-full transition-colors"
          >
            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
          </button>
        </div>
      ),
      className: "text-right",
    },
  ];

  return (
    <div className="w-full space-y-3 sm:space-y-4">
      {/* Header Section */}
      <div className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center justify-between gap-3 sm:gap-4">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
          Products
        </h2>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 w-full xs:w-auto">
          {/* Search */}
          <div className="relative flex-1 xs:flex-none">
            <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-7 sm:pl-9 md:pl-10 w-full xs:w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 text-xs sm:text-sm h-8 sm:h-9 md:h-10"
            />
          </div>
          {/* Add Button */}
          <Button
            onClick={() => router.push("/products/add-product")}
            className="bg-red-800 hover:bg-red-700 text-white flex items-center gap-1 sm:gap-1.5 md:gap-2 text-xs sm:text-sm px-2 sm:px-3 md:px-4 h-8 sm:h-9 md:h-10"
          >
            <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            <span className="whitespace-nowrap">Add New Product</span>
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg">
        <CustomTable
          data={filteredProducts}
          columns={columnsWithActions}
          itemsPerPage={10}
        />
      </div>
    </div>
  );
};

export default ProductsTableSection;
