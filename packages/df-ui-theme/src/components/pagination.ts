import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { radius } from "../tokens/shape"

export const getPagination = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  // const isLightMode = palette.mode === "light";

  return {
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
}
