import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

import { Meta } from "@storybook/react";

const meta: Meta = {
  title: "MUI X/DataGrid",
};

export default meta;

export function _DataGrid() {
  const rows: GridRowsProp = [
    { id: 3061, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 3062, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3063, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 3064, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 3065, lastName: "Targaryen", firstName: "Daenerys", age: 16 },
    { id: 3066, lastName: "Melisandre", firstName: null, age: 172 },
    { id: 3067, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 3068, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 3069, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 124 },
    {
      field: "firstName",
      headerName: "First name",
      width: 172,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 172,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 132,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 196,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection
      disableRowSelectionOnClick
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
    />
  );
}
