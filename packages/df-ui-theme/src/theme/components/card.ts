import type { Theme } from "@mui/material";
import type { ComponentStyles } from "../types/Components";
import { radius } from "../shape";

export const getCards = (theme: Theme): ComponentStyles => {
  const { palette } = theme;
  return {
    MuiPaper: {
      styleOverrides: {
        root: () => ({
          borderRadius: radius.xl,
          backgroundColor: palette.surface[0],
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
