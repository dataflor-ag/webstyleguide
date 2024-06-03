import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { radius } from "../tokens/shape"

export const getSliders = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    MuiSlider: {
      defaultProps: {
        color: "secondary",
        size: "medium"
      },
      styleOverrides: {
        root: {
          borderRadius: "50rem",
          padding: "1rem 0",
          "&.Mui-disabled": {
            ".MuiSlider-track": {
              backgroundColor: palette.grey[300],
            }
          },
        },
        rail: {
          backgroundColor: palette.grey[200],
          opacity: 1,
        },
        track: {
          border: "0 none",
        },
        thumb: {
          height: "1.5rem",
          width: "1.5rem",
          backgroundColor: isLightMode ? palette.surface[0] : palette.surface[100],
          boxShadow: 
            isLightMode 
            ? `0 0 0 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), 0 0 0 1px ${palette.grey?.[200]}` 
            : `0 0 0 0 rgba(255, 255, 255, 0.1), 0 1px 3px 0 rgba(0,0,0,0.40), 0 1px 2px -1px rgba(0,0,0,0.50), 0 0 0 1px ${palette.grey?.[200]}`,
          "&:before": {
            display: "none"
          },
          "&:after": {
            // backgroundColor: palette.surface[0],
            backgroundColor: palette.secondary[900],
            height: "0.375rem",
            width: "0.375rem",
          },
          "&.Mui-disabled": {
            backgroundColor: `${palette.secondary?.[50]}`,
            "&:after": {
              backgroundColor: `${palette.secondary?.[300]}`,
            },
          },
          "&.Mui-focusVisible, &:hover": {
            boxShadow: 
              isLightMode 
              ? `0 0 0 4px rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), 0 0 0 1px ${palette.grey?.[200]}` 
              : `0 0 0 4px rgba(255, 255, 255, 0.1), 0 1px 3px 0 rgba(0,0,0,0.40), 0 1px 2px -1px rgba(0,0,0,0.50), 0 0 0 1px ${palette.grey?.[200]}`,
          },
          "&.Mui-active": {
            boxShadow: 
              isLightMode 
              ? `0 0 0 8px rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), 0 0 0 1px ${palette.grey?.[200]}` 
              : `0 0 0 8px rgba(255, 255, 255, 0.1), 0 1px 3px 0 rgba(0,0,0,0.40), 0 1px 2px -1px rgba(0,0,0,0.50), 0 0 0 1px ${palette.grey?.[200]}`,
          },
        },
        valueLabel: {
          backgroundColor: palette.grey?.[900],
          color: palette.surface[0],
          borderRadius: radius.md,
          minHeight: "2rem",
          padding: "0.1875rem 0.75rem",
          ":before": {
            display: "none",
          },
          ".MuiSlider-valueLabelLabel": {
            fontSize: "0.75rem",
            fontWeight: 600,
          },
        },
      },
    },
  }
}
