import { Components, Theme } from "@mui/material"

const Styles: Components<Omit<Theme, "components">> = {
  MuiDataGrid: {
    styleOverrides: {
      root: {
        backgroundColor: "red",
      },
    },
  },
}

export default Styles
