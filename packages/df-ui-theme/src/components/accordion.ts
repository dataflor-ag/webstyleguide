import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { radius } from "../tokens/shape"
// import { accordionIcon } from "../utils/accordion"
import { getShadow } from "../utils/getShadows"

export const getAccordion = (theme: Theme): ComponentStyles => {
  const { palette } = theme

  return {
    MuiAccordion: {
      defaultProps: {
        variant: "elevation",
      },
      styleOverrides: {
        root: () => ({
          marginTop: 0,
          marginBottom: theme.spacing(2),
          border: "0 none",
          padding: 0,
          borderRadius: radius.md,
          boxShadow: getShadow(palette.mode).xs.base,
          transition: "all 0.2s ease-in-out",

          "&:first-of-type": {
            borderRadius: radius.md,
          },
          "&:last-of-type": {
            borderRadius: radius.md,
          },

          "&:before": {
            display: "none",
          },

          "&.Mui-expanded": {
            marginTop: 0,
            backgroundColor: palette.grey[100],
            boxShadow: "none",
          },
        }),
      },
    },
    MuiAccordionSummary: {
      defaultProps: {
        // expandIcon: accordionIcon,
      },
      styleOverrides: {
        root: () => ({
          padding: 0,
          minHeight: theme.spacing(12),
          "&.Mui-expanded": {
            minHeight: theme.spacing(12),
          },
        }),
        content: () => ({
          fontSize: "0.875rem",
          padding: `0 ${theme.spacing(4)}`,
          margin: 0,
          fontWeight: 600,

          "&.Mui-expanded": {
            margin: 0,
          },
        }),
        expandIconWrapper: () => ({
          padding: `0 ${theme.spacing(4)}`,

          "&.Mui-expanded": {
            transform: "none",
          },
          "&.Mui-expanded accordion-expaned-icon": {
            transform: "none",
          },
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: () => ({
          padding: `0 ${theme.spacing(4)}`,
          fontSize: "0.875rem",
          marginBottom: theme.spacing(4),
          marginTop: theme.spacing(-2),
        }),
      },
    },
  }
}
