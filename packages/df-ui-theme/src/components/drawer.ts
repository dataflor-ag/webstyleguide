import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { radius } from "../tokens/shape"

export const getDrawers = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    MuiDrawer: {
      defaultProps: {
        PaperProps: {
          elevation: 6,
        },
      },
      styleOverrides: {
        root: () => ({
          ".MuiPaper-root": {
            height: "auto",
            borderRadius: radius["2xl"],
            minWidth: "25rem",
            maxWidth: "33rem",
            overflow: "visible",
            transformStyle: "preserve-3d",
            backgroundColor: isLightMode
              ? palette.surface[0]
              : palette.surface[100],
          },
          ".MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }),
        paperAnchorRight: () => ({
          top: "0.5rem",
          right: "0.5rem",
          bottom: "0.5rem",
        }),
        paperAnchorLeft: () => ({
          top: "0.5rem",
          left: "0.5rem",
          bottom: "0.5rem",
        }),
      },
    },
  }
}
