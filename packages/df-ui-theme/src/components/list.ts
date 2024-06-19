import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { radius } from "../tokens/shape"
import { getShadow } from "../utils/getShadows"

export const getLists = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
          gap: "0.25rem",
          display: "flex",
          flexDirection: "column"
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          margin: 0,
          minWidth: "0 !important",
          
          ".MuiSvgIcon-root": {
            margin: 0,
            fontSize: "1.25rem"
          }
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: theme.spacing(0, 3),
          ".MuiButtonBase-root": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            position: "relative",
            height: theme.spacing(10),
            borderRadius: radius.md,
            padding: theme.spacing(0, 3),
            color: theme.palette.secondary[500],
            fontWeight: "500",
            ".MuiSvgIcon-root": {
              color: theme.palette.secondary[500],
            },
            ".MuiListItemText-root":{
              margin: 0,
              ".MuiTypography-root": {
                fontSize: "0.875rem",
                fontWeight: "inherit",
              },
            },
            "&:hover": {
              backgroundColor: isLightMode? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)",
              ".MuiSvgIcon-root": {
                color: theme.palette.secondary[600],
              }
            },
            "&:focus, &.Mui-focusVisible": {
              backgroundColor: isLightMode? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)",
              boxShadow: getShadow(palette.mode).xs.focus,
            },
            "&:disabled": {
              color: `${palette.grey?.[500]}`,
              opacity: "0.4",
            },
            "&.Mui-selected": {
              boxShadow: getShadow(palette.mode).xs.base,
              backgroundColor: isLightMode ? palette.surface[0] : "rgba(255,255,255,0.04)",
              color: theme.palette.secondary[800],
              fontWeight: "600",
              ".MuiSvgIcon-root": {
                color: theme.palette.secondary[600],
              },
              "&:hover": {
                backgroundColor: isLightMode
                  ? "rgba(0,0,0,0.04)"
                  : "rgba(255,255,255,0.06)",
                boxShadow: getShadow(palette.mode).xs.base,
                border: "none",
              },
              ":disabled": {
                boxShadow: getShadow(palette.mode).xs.secondary,
                color: palette.secondary.contrastText,
                backgroundColor: `${palette.secondary?.[900]}`,
                opacity: 0.4,
              },
              ":focus": {
                boxShadow: getShadow(palette.mode).xs.focus,
              },
            },
          },
        },
      },
    },
  }
}
