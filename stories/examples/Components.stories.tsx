import React from "react"
import { Meta } from "@storybook/react"

import {
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerSidebar,
} from "../../packages/df-ui-drawer/lib"
import {
  DialogHeader,
} from "../../packages/df-ui-dialog-header/lib"
import {
  Drawer,
  Button,
  Box,
  Stack,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip
} from "@mui/material"
import Icon from "../../packages/df-ui-icons/lib"
import { ActionBar, ActionBarItem } from "../../packages/df-ui-action-bar/lib"
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const meta: Meta = {
  title: "Examples/Components",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

export function DrawerExample() {
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <Box sx={{ width: "100%", height: "400px" }} role="presentation" p={4}>
      <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <DrawerSidebar>
          <Stack gap={4} direction={"column"}>
            <span>A</span>
            <span>B</span>
            <span>C</span>
          </Stack>
        </DrawerSidebar>
        <DrawerHeader content={<Typography variant="h4">Preview</Typography>}>
          <IconButton aria-label="close" onClick={toggleDrawer(false)}>
            <Icon.close />
          </IconButton>
        </DrawerHeader>
        <DrawerBody>
          <Typography variant="body1" mb={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eligendi odio assumenda fugit nisi. Repudiandae doloribus fuga saepe
            hic adipisci nulla minus magnam necessitatibus.
          </Typography>
          <Typography variant="body1" mb={1}>
            Unde, sit ullam deserunt odio. Hic ducimus vitae nostrum nulla
            omnis! Repellat fuga architecto aspernatur quis esse similique.
          </Typography>
        </DrawerBody>
        <DrawerFooter>
          <Stack
            gap={3}
            direction={"row"}
            justifyContent={"flex-end"}
            width={"100%"}
          >
            <Button variant="outlined">Cancel</Button>
            <Button color="primary">Save changes</Button>
          </Stack>
        </DrawerFooter>
      </Drawer>
    </Box>
  )
}

export function DialogExample() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Box sx={{ width: "100%", height: "400px" }} role="presentation" p={4}>
      <Stack direction="row">
        <Button onClick={handleClickOpen}>
          Open dialog
        </Button>
        <Dialog
          maxWidth="xs"
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogHeader 
            icon={<Icon.trash/>}
            iconVariant="error"
            title="Delete project" 
            subtitle="Are you sure you want to delete this project? This action cannot be undone."
            onClose={handleClose}
            >
          </DialogHeader>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button color="error" autoFocus onClick={handleClose}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Box>
  )
}

export function DataGridActionbarExample() {

  const rows: GridRowsProp = [
    {
      id: 3061,
      lastName: "Snow",
      firstName: "Jon",
      age: 14,
      status: "Paid",
    },
    {
      id: 3062,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 31,
      status: "Cancelled",
    },
    {
      id: 3063,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 31,
      status: "Paid",
    },
    {
      id: 3064,
      lastName: "Stark",
      firstName: "Arya",
      age: 11,
      status: "Cancelled",
    },
    {
      id: 3065,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: 16,
      status: "Paid",
    },
    {
      id: 3066,
      lastName: "Melisandre",
      firstName: "Harvey",
      age: 172,
      status: "Cancelled",
    },
    {
      id: 3067,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      status: "Paid",
    },
    {
      id: 3068,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      status: "Cancelled",
    },
    {
      id: 3069,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
      status: "Paid",
    },
    // Additional Rows
    {
      id: 3070,
      lastName: "Stark",
      firstName: "Sansa",
      age: 18,
      status: "Paid",
    },
    {
      id: 3071,
      lastName: "Baratheon",
      firstName: "Robert",
      age: 40,
      status: "Cancelled",
    },
    {
      id: 3072,
      lastName: "Tyrell",
      firstName: "Margaery",
      age: 25,
      status: "Paid",
    },
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
      field: "status",
      headerName: "Status",
      width: 172,
      renderCell: (params) => {
        const isRejected = params.value === "Cancelled";
        return (
          <Chip
            icon={isRejected ? <Icon.closeSmall /> : <Icon.checkSmall />}
            label={params.value}
            color={isRejected ? "error" : "success"}
          />
        );
      },
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

  const [selectionModel, setSelectionModel] = React.useState([]);

  // Function to handle selection change
  const handleSelectionChange = (newSelection) => {
    setSelectionModel(newSelection);
  };

  const scEdit = ["ALT", "E"]
  const scDelete = ["ALT", "D"]
  const scNew = ["ALT", "N"]
  return (
    <Box p={4}>
      <Typography variant="h2" mb={4} mt={8}>
        DataGrid (MUI X)
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={handleSelectionChange}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 16,
            },
          },
        }}
        pageSizeOptions={[6]}
      />
      <ActionBar label="selected" count={selectionModel.length}>
        <ActionBarItem shortcut={scEdit}>
          Edit
        </ActionBarItem>
        <ActionBarItem shortcut={scNew}>
          New
        </ActionBarItem>
        <ActionBarItem shortcut={scDelete}>
          Delete
        </ActionBarItem>
      </ActionBar>
    </Box>
  );
}