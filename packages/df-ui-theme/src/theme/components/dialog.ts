import type { Theme } from "@mui/material";
import type { ComponentStyles } from "../types/Components";
import { radius } from "../shape";

export const getDialogs = (theme: Theme): ComponentStyles => {
  const { palette } = theme;
  const isLightMode = palette.mode === "light";

  return {
    MuiDialog: {
      defaultProps: {
        PaperProps: {
          elevation: 6,
        },
      },
      styleOverrides: {
        root: () => ({
          ".MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          ".MuiDialog-paper": {
            borderRadius: radius["2xl"],
            backgroundColor: isLightMode
              ? palette.surface[0]
              : palette.surface[100],
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
  };
};
