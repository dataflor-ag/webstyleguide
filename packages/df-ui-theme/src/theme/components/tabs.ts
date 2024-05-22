import type { Theme } from "@mui/material";
import type { ComponentStyles } from "../types/Components";
import { radius } from "../shape";

export const getTabs = (theme: Theme): ComponentStyles => {
  const { palette } = theme;
  // const isLightMode = palette.mode === "light";

  return {
    MuiTabs: {
      styleOverrides: {
        root: () => ({
          position: "relative",
          ".MuiTabs-scroller": {
            display: "inline-flex",
            alignItems: "center",
          },
          ".MuiTabs-indicator": {
            borderTopLeftRadius: "50rem",
            borderTopRightRadius: "50rem",
            backgroundColor: `${palette.grey?.[900]}`,
          },
          ":after": {
            content: '""',
            position: "absolute",
            display: "block",
            width: "100%",
            height: "1px",
            bottom: "0",
            left: "0",
            backgroundColor: `${palette.grey?.[200]}`,
            zIndex: "-1",
          },
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: () => ({
          padding: "0",
          margin: "0 0.75rem",
          height: "2.5rem",
          borderRadius: radius.md,
          minWidth: "auto",
          minHeight: "auto",
          color: `${palette.grey?.[500]}`,
          transition: "all 0.2s ease-in-out",
          fontWeight: "500",
          letterSpacing: "0",
          "&:first-child": {
            marginLeft: "0",
          },
          "&.Mui-selected": {
            color: `${palette.grey?.[900]}`,
          },
          "&.Mui-disabled": {
            color: `${palette.grey?.[500]}`,
            opacity: "0.4",
          },
        }),
      },
    },
  };
};
