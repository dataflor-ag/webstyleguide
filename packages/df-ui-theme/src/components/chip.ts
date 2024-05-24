import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { chipIconRemove } from "../icons/chips"
import { getShadow } from "../utils/getShadows"

export const getChips = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    MuiChip: {
      defaultProps: {
        variant: "outlined",
        deleteIcon: chipIconRemove,
      },
      styleOverrides: {
        root: () => ({
          fontWeight: "600",
          backgroundColor: palette.surface[0],
          borderColor: palette.grey[200],
          color: palette.grey[600],
          "> .MuiSvgIcon-root": {
            fontSize: "1rem",
            margin: "0 -0.5rem 0 0.375rem",
          },
          ".chip-icon-remove": {
            width: "1rem",
            height: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 0.25rem 0 -0.5rem",
            transition: "all 0.2s ease-in-out",
            ".MuiSvgIcon-root": {
              fontSize: "1rem",
            },
          },
          "&.MuiChip-clickable:active": {
            boxShadow: getShadow(palette.mode).xs.focus,
          },
        }),
        sizeMedium: () => ({
          height: "1.5rem",
          fontSize: "0.875rem",
        }),
        sizeSmall: () => ({
          height: "20px",
          fontSize: "0.75rem",
        }),
        labelMedium: {
          padding: "0 0.625rem",
        },
        labelSmall: {
          padding: "0 0.5rem",
        },

        colorPrimary: {
          backgroundColor: palette.primary[50],
          borderColor: palette.primary[200],
          color: palette.primary?.[600],
          "&.MuiChip-clickable:active": {
            boxShadow: getShadow(palette.mode).xs.primaryFocus,
          },
        },
        colorSecondary: {
          backgroundColor: isLightMode
            ? palette.secondary[50]
            : palette.secondary[100],
          borderColor: palette.secondary[200],
          color: palette.secondary[600],
          "&.MuiChip-clickable:active": {
            boxShadow: getShadow(palette.mode).xs.secondaryFocus,
          },
        },
        colorSuccess: {
          backgroundColor: palette.success[50],
          borderColor: palette.success[200],
          color: palette.success[600],
          "&.MuiChip-clickable:active": {
            boxShadow: `0 0 0 1px ${palette.success?.[300]}, 0 0 0 4px ${palette.success?.[200]}`,
          },
        },
        colorWarning: {
          backgroundColor: palette.warning[50],
          borderColor: palette.warning[200],
          color: palette.warning[600],
          "&.MuiChip-clickable:active": {
            boxShadow: `0 0 0 1px ${palette.warning?.[300]}, 0 0 0 4px ${palette.warning?.[200]}`,
          },
        },
        colorError: {
          backgroundColor: isLightMode ? palette.error[50] : palette.error[950],
          borderColor: isLightMode ? palette.error[200] : palette.error[700],
          color: palette.error[600],
          "&.MuiChip-clickable:active": {
            boxShadow: getShadow(palette.mode).xs.errorFocus,
          },
        },
        colorInfo: {
          backgroundColor: palette.info[50],
          borderColor: palette.info[200],
          color: palette.info[600],
          "&.MuiChip-clickable:active": {
            boxShadow: `0 0 0 1px ${palette.info?.[300]}, 0 0 0 4px ${palette.info?.[200]}`,
          },
        },
      },
    },
  }
}
