import { Components, Theme } from "@mui/material"
import { radius } from "../shape"
import palette from "../palette"

const Styles: Components<Omit<Theme, "components">> = {
  MuiAppBar: {
    styleOverrides: {
      root: () => ({
        borderRadius: radius.none,
        boxShadow: "none",
        backgroundColor: `${palette.grey?.[100]}`,
        color: `${palette.grey?.[700]}`,
      }),
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: () => ({
        minHeight: "4.5rem !important",
        justifyContent: "space-between",
      }),
    },
  },
}

export default Styles
