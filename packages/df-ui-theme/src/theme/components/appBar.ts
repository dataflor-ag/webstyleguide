import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { radius } from "../shape"

export const getAppBar = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  return {
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
}
