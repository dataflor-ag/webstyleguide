import type { Theme } from "@mui/material";
import type { ComponentStyles } from "../types/Components";
import { radius } from "../shape";

export const getCards = (theme: Theme): ComponentStyles => {
  const { palette } = theme;
  const isLightMode = palette.mode === "light";

  return {
    MuiCard: {
      styleOverrides: {
        root: () => ({
          backgroundColor: isLightMode
            ? palette.surface[0] + "!important"
            : "rgba(255,255,255,0.04) !important",
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: () => ({
          borderRadius: radius.xl,
          backgroundColor: isLightMode
            ? palette.surface[0]
            : palette.surface[50],
          backgroundImage: "none",
        }),
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: () => ({
          marginBottom: theme.spacing(5),
          borderRadius: radius.md,
        }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: () => ({
          padding: theme.spacing(6),
        }),
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: () => ({
          padding: theme.spacing(0),
          "&:hover": {
            ".MuiCardActionArea-focusHighlight": {
              opacity: 0.04,
            },
          },
        }),
      },
    },
  };
};
