import { Components, Theme } from "@mui/material";
import { palette } from "../index";

const Styles: Components<Omit<Theme, "components">> = {
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
        backgroundColor: `${palette.grey?.[200]}`,
        borderRadius: "50rem",
      }),
    },
  },
  MuiTimelineDot: {
    styleOverrides: {
      root: () => ({
        boxShadow: "none",
        backgroundColor: `${palette.grey?.[300]}`,
      }),
    },
  },
  MuiTimelineContent: {
    styleOverrides: {
      root: () => ({
        ".MuiTypography-caption": {
          color: `${palette.grey?.[600]}`,
        },
        ".MuiTypography-body2": {
          color: `${palette.grey?.[700]}`,
        },
      }),
    },
  },
};

export default Styles;
