import type { Theme } from "@mui/material";
import type { ComponentStyles } from "../types/Components";

export const getTimeline = (theme: Theme): ComponentStyles => {
  const { palette } = theme;
  const isLightMode = palette.mode === "light";

  return {
    MuiTimelineSeparator: {
      styleOverrides: {
        root: () => ({
          ".MuiAvatar-root": {
            marginBottom: ".25rem",
            marginTop: ".25rem",
          },
        }),
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: () => ({
          backgroundColor: palette.grey[200],
          borderRadius: "50rem",
        }),
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: () => ({
          boxShadow: "none",
          backgroundColor: palette.grey[300],
        }),
      },
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: () => ({
          ".MuiTypography-caption": {
            color: isLightMode ? palette.grey[600] : palette.grey[500],
          },
          ".MuiTypography-body2": {
            color: palette.grey[700],
          },
        }),
      },
    },
  };
};
