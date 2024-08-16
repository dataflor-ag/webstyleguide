import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { radius } from "../tokens/shape"
import { getShadow } from "../utils/getShadows"

export const getToggleButtons = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    MuiToggleButtonGroup: {
      defaultProps: {
        size: "medium",
      },
      styleOverrides: {
        root: () => ({
          height: "2.5rem",
          borderRadius: radius.md,
          backgroundColor: isLightMode
            ? "rgba(0, 0, 0, 0.04)"
            : "rgba(255, 255, 255, 0.04)",
          overflow: "hidden",
          alignItems: "center",
          gap: "0.25rem",
          padding: "0 0.125rem",
        }),
      },     
    },
    MuiToggleButton: {
      defaultProps: {
        color: "secondary"
      },
      styleOverrides: {
        root: () => ({
          height: "2.25rem",
          borderRadius: radius.sm + "!important",
          border: "0 none",
          padding: "0 0.875rem",
          color: palette.grey?.[500],
          fontWeight: "500",
          minWidth: "2.25rem",
          transition: "all 0.2s ease-in-out",
          fontSize: "0.875rem",
          "&:after": {
            content: '""',
            position: "absolute",
            borderRadius: "inherit",
            opacity: "0",
            inset: "0px",
            transition: "all 0.2s ease-in-out",
            background: isLightMode ? "linear-gradient(rgba(19, 19, 22, 0) 50%, rgba(19, 19, 22, 0.02))" : "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.00) 100%)",
            PointerEvent: "none",
          },
          "&:hover": {
            backgroundColor: isLightMode
              ? "rgba(0, 0, 0, 0.03)"
              : "rgba(255, 255, 255, 0.04)",
            color: palette.grey?.[600],
          },
          "&.Mui-selected": {
            color: palette.grey[900],
            backgroundColor: isLightMode ? palette.surface[0] : "rgba(255,255,255,0.04)",
            boxShadow: getShadow(palette.mode).xs.base,
            "&:hover": {
              backgroundColor: isLightMode ? palette.surface[0] : "rgba(255,255,255,0.04)",
            },
            "&:after": {
              opacity: 1,
            },
          },
        }),
      },
    variants: [ {
      props: {
        color: "primary",
      }, style: {
        "&.Mui-selected": {
          color: palette.primary.contrastText,
          boxShadow: getShadow(palette.mode).xs.primary,
          backgroundColor: palette.primary[500],
          ":hover": {
            backgroundImage: "none",
            backgroundColor: palette.primary[500],
            boxShadow: getShadow(palette.mode).xs.primary,
          },
          ":focus-visible": {
            boxShadow: getShadow(palette.mode).xs.primaryFocus,
          },
          ":disabled": {
            boxShadow: getShadow(palette.mode).xs.primary,
            color: palette.primary.contrastText,
            backgroundColor: palette.primary[500],
            opacity: 0.4,
          },
        },
      }

    },]
    },
  }
}
