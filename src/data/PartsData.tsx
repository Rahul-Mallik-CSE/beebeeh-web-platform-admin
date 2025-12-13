/** @format */

import { Part } from "@/types/PartsTypes";

export const partsData: Part[] = [
  {
    id: "1",
    partId: "Pr - 501",
    name: "Filter A22",
    stock: 15,
    unit: "pcs",
    min: 20,
    models: "12 models",
  },
  {
    id: "2",
    partId: "Pr - 501",
    name: "Copper Coil",
    stock: 15,
    unit: "rolls",
    min: 20,
    models: "8 models",
  },
  {
    id: "3",
    partId: "Pr - 501",
    name: "Filter A22",
    stock: 15,
    unit: "pcs",
    min: 20,
    models: "12 models",
  },
  {
    id: "4",
    partId: "Pr - 501",
    name: "Copper Coil",
    stock: 15,
    unit: "rolls",
    min: 20,
    models: "8 models",
  },
  {
    id: "5",
    partId: "Pr - 501",
    name: "Copper Coil",
    stock: 15,
    unit: "rolls",
    min: 20,
    models: "8 models",
  },
  {
    id: "6",
    partId: "Pr - 501",
    name: "Filter A22",
    stock: 15,
    unit: "pcs",
    min: 20,
    models: "12 models",
  },
  {
    id: "7",
    partId: "Pr - 501",
    name: "Copper Coil",
    stock: 15,
    unit: "rolls",
    min: 20,
    models: "8 models",
  },
  {
    id: "8",
    partId: "Pr - 501",
    name: "Filter A22",
    stock: 15,
    unit: "pcs",
    min: 20,
    models: "12 models",
  },
  {
    id: "9",
    partId: "Pr - 501",
    name: "Copper Coil",
    stock: 15,
    unit: "rolls",
    min: 20,
    models: "8 models",
  },
  {
    id: "10",
    partId: "Pr - 501",
    name: "Filter A22",
    stock: 15,
    unit: "pcs",
    min: 20,
    models: "12 models",
  },
];

export const partsColumns = [
  {
    header: "Part ID",
    accessor: (row: Part) => row.partId,
  },
  {
    header: "Name",
    accessor: (row: Part) => row.name,
  },
  {
    header: "Stock",
    accessor: (row: Part) => row.stock,
  },
  {
    header: "Unit",
    accessor: (row: Part) => row.unit,
  },
  {
    header: "Min",
    accessor: (row: Part) => row.min,
  },
  {
    header: "Models",
    accessor: (row: Part) => row.models,
  },
];
