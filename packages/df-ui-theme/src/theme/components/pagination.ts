import { Components, Theme } from "@mui/material"
import { radius } from "../shape"
import { palette } from "../index"

const Styles: Components<Omit<Theme, "components">> = {
  MuiPagination: {
    defaultProps: {
      shape: "rounded",
      size: "large",
    },
    styleOverrides: {
      root: () => ({
        ".MuiPagination-ul": {
          gap: "0.125rem",
          "li:first-child": {
            marginRight: "auto",
          },
          "li:last-child": {
            marginLeft: "auto",
          },
        },
      }),
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: () => ({
        borderRadius: radius.md,
        margin: 0,
        fontWeight: "600",
        fontSize: "0.875rem",
        "&.Mui-selected": {
          backgroundColor: `${palette.grey?.[100]}`,
          "&:hover": {
            backgroundColor: `${palette.grey?.[100]}`,
          },
        },
        "&:hover": {
          backgroundColor: `${palette.grey?.[50]}`,
        },
      }),
    },
  },
}

export default Styles
