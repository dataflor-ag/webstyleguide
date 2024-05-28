import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { getShadow } from "../utils/getShadows"
import { radius } from "../tokens/shape"

export const getSnackbar= (theme: Theme): ComponentStyles => {
  const { palette } = theme
  // const isLightMode = palette.mode === "light"
  


  return {
    MuiSnackbar: {
      defaultProps: {
        
      },
      styleOverrides: {
        root: () => ({
          // backgroundColor: "purple"
        })
      }
    },
    MuiSnackbarContent: {
      defaultProps: {
      },
      styleOverrides: {
        root: () => ({
          backgroundColor: theme.palette.surface[0],
          color: theme.palette.surface[900],
          boxShadow: getShadow(palette.mode).xs.base,
          borderRadius: radius.xl
        })
      }
    }
  }
}
