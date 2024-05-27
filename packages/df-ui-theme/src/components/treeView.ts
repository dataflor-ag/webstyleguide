import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"

export const getTreeView = (theme: Theme): ComponentStyles => {
  const { palette } = theme

  return {
    MuiSimpleTreeView: {
      styleOverrides: {
        root: {
          backgroundColor: palette.primary[400]
        }
      }
    }
  }
}