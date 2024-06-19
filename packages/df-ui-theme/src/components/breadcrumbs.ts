import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"

export const getBreadcrumbs = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  // const isLightMode = palette.mode === "light"

  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        ol: {
          gap: "0.375rem",
        },
        separator: {
          margin: 0,
          svg: {
            fontSize: "1.25rem",
            color: palette.grey[400],
          },
        },
        li: {
          a:{
            color: palette.grey[500],
            fontWeight: 500,
            display: "flex",
            textDecoration: "none",
            fontSize: "0.875rem",
            "> svg": {
              fontSize: "1.25rem",
              color: palette.grey[500],
            },
            "&:hover": {
              textDecoration: "none",
            },
          },
          p: {
            color: palette.grey[900],
            fontWeight: 500,
            fontSize: "0.875rem",
          },
        },
      },
    },
  }
}
