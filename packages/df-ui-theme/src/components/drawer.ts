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
              : palette.surface[50],
          },
          ".MuiBackdrop-root": {
            backgroundColor: isLightMode ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.2)",
            // backdropFilter: "blur(8px)",
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
