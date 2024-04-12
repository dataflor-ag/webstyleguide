import { Components, Theme } from "@mui/material"
import { radius } from "../shape"
import theme from "../index"
import { customShadows } from "../shadows"

const Styles: Components<Omit<Theme, "components">> = {
  MuiToggleButtonGroup: {
    defaultProps: {
      size: "medium",
    },
    styleOverrides: {
      root: () => ({
        height: "2.5rem",
        borderRadius: radius.md,
        backgroundColor: theme.palette.grey?.[100],
        overflow: "hidden",
        alignItems: "center",
        gap: "0.25rem",
        padding: "0 0.125rem",
      }),
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: () => ({
        height: "2.25rem",
        borderRadius: radius.sm + "!important",
        border: "0 none",
        padding: "0 0.875rem",
        color: theme.palette.grey?.[500],
        fontWeight: "500",
        minWidth: "2.25rem",
        transition: "all 0.2s ease-in-out",
        fontSize: "0.875rem",
        "&:hover": {
          backgroundColor: theme.palette.grey?.[200],
          color: theme.palette.grey?.[600],
        },
        "&.Mui-selected": {
          backgroundColor: "white",
          boxShadow: customShadows.xs.base,
          color: theme.palette.grey?.[900],
          "&:hover": {
            backgroundColor: "white",
          },
        },
      }),
    },
  },
}

export default Styles
