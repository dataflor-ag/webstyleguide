import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { radius } from "../tokens/shape"

export const getMenus = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    MuiMenu: {
      defaultProps: {
        autoFocus: false,
        elevation: 4,
      },
      styleOverrides: {
        root: () => ({
          ".MuiPaper-root": {
            borderRadius: radius.md,
            marginTop: theme.spacing(1),
            minWidth: "10rem",
            backgroundColor: isLightMode
              ? palette.surface[0]
              : palette.surface[50],
            "&.select-dropdown": {
              ".MuiMenuItem-root": {
                fontSize: "1rem",
                minHeight: "0px !important"
              },
            },
          },
          ".MuiList-root": {
            padding: theme.spacing(1),
            display: "flex",
            flexDirection: "column",
            gap: "1px",
          },
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: () => ({
          borderRadius: radius.sm,
          fontSize: "0.875rem",
          fontWeight: "500",
          color: palette.grey[900],
          transition: "all 0.2s ease-in-out",
          padding: theme.spacing(0, 2),
          minHeight: "0px !important",
          height: "2.5rem",
          ".MuiSvgIcon-root": {
            fontSize: "1.25rem",
            marginRight: "0.5rem",
            color: palette.grey[400],
          },
          "&:hover": {
            backgroundColor: isLightMode ? palette.grey[50] : palette.grey[100],
          },
          "&.Mui-selected": {
            backgroundColor: palette.grey[100],
            "&:hover": {
              backgroundColor: palette.grey[100],
            },
          },
          "&.MuiMenuItem-divider": {
            border: "0 none",
            marginBottom: "0.625rem",
            "&:after": {
              content: '""',
              display: "block",
              width: "calc(100% + 0.5rem)",
              height: "1px",
              backgroundColor: palette.grey?.[200],
              position: "absolute",
              bottom: "-0.375rem",
              left: "-0.25rem",
            },
          },
        }),
      },
    },
  }
}
