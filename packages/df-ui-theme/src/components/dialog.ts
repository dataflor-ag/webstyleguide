import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { radius } from "../tokens/shape"
import CustomFadeScale from '../animations/customFadeScale'

export const getDialogs = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    MuiDialog: {
      defaultProps: {
        maxWidth: "sm",
        TransitionComponent: CustomFadeScale,
        PaperProps: {
          elevation: 6,
        },
      },
      styleOverrides: {
        root: () => ({
          ".MuiBackdrop-root": {
            backgroundColor: isLightMode ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.2)",
            // backdropFilter: "blur(8px)",
          },
          ".MuiDialog-paper": {
            borderRadius: radius["2xl"],
            backgroundColor: isLightMode
              ? palette.surface[0]
              : palette.surface[50],
          },
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: () => ({
          padding: "1.25rem",
          fontSize: "1rem",
          "+ .MuiIconButton-root": {
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
          },
        }),
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: () => ({
          padding: "1.25rem",
        }),
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: () => ({
          padding: "1rem 1.25rem",
          gap: "0.75rem",
          ">*": {
            margin: "0 !important",
          },
        }),
      },
    },
  }
}
