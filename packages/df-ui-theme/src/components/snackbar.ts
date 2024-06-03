import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { getShadow } from "../utils/getShadows"
import { radius } from "../tokens/shape"

export const getSnackbar= (theme: Theme): ComponentStyles => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    MuiSnackbar: {
      defaultProps: {},
      styleOverrides: {
        root: () => ({})
      }
    },
    MuiSnackbarContent: {
      defaultProps: {
      },
      styleOverrides: {
        root: () => ({
          backgroundColor: isLightMode
              ? palette.surface[0]
              : palette.surface[100],
          color: theme.palette.surface[900],
          boxShadow: getShadow(palette.mode).lg.base,
          borderRadius: radius.xl
        })
      }
    }
  }
}
