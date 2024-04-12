import { Components, Theme } from "@mui/material"
import { chipIconRemove } from "../utils/chips"
import palette from "../palette"
import { customShadows } from "../shadows"

const Styles: Components<Omit<Theme, "components">> = {
  MuiChip: {
    defaultProps: {
      variant: "outlined",
      deleteIcon: chipIconRemove,
    },
    styleOverrides: {
      root: () => ({
        fontWeight: "600",
        backgroundColor: "white",
        borderColor: `${palette.grey?.[200]}`,
        color: `${palette.grey?.[600]}`,
        ".chip-icon-remove": {
          width: "1rem",
          height: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 0.2s ease-in-out",
        },
        "&.MuiChip-clickable:active": {
          boxShadow: customShadows.xs.focus,
        },
      }),
      sizeMedium: () => ({
        height: "28px",
        fontSize: "0.875rem",
      }),
      sizeSmall: () => ({
        height: "20px",
        fontSize: "0.75rem",
      }),
      labelMedium: {
        padding: "0.375rem 0.75rem",
      },
      labelSmall: {
        padding: "0.375rem 0.75rem",
      },

      colorPrimary: {
        backgroundColor: `${palette.primary?.[50]}`,
        borderColor: `${palette.primary?.[200]}`,
        color: `${palette.primary?.[600]}`,
        "&.MuiChip-clickable:active": {
          boxShadow: customShadows.xs.primaryFocus,
        },
      },
      colorSecondary: {
        backgroundColor: `${palette.secondary?.[50]}`,
        borderColor: `${palette.secondary?.[200]}`,
        color: `${palette.secondary?.[600]}`,
        "&.MuiChip-clickable:active": {
          boxShadow: customShadows.xs.secondaryFocus,
        },
      },
      colorSuccess: {
        backgroundColor: `${palette.success?.[50]}`,
        borderColor: `${palette.success?.[200]}`,
        color: `${palette.success?.[600]}`,
        "&.MuiChip-clickable:active": {
          boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.success?.[300]}, 0 0 0 4px ${palette.success?.[200]}`,
        },
      },
      colorWarning: {
        backgroundColor: `${palette.warning?.[50]}`,
        borderColor: `${palette.warning?.[200]}`,
        color: `${palette.warning?.[600]}`,
        "&.MuiChip-clickable:active": {
          boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.warning?.[300]}, 0 0 0 4px ${palette.warning?.[200]}`,
        },
      },
      colorError: {
        backgroundColor: `${palette.error?.[50]}`,
        borderColor: `${palette.error?.[200]}`,
        color: `${palette.error?.[600]}`,
        "&.MuiChip-clickable:active": {
          boxShadow: customShadows.xs.errorFocus,
        },
      },
      colorInfo: {
        backgroundColor: `${palette.info?.[50]}`,
        borderColor: `${palette.info?.[200]}`,
        color: `${palette.info?.[600]}`,
        "&.MuiChip-clickable:active": {
          boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.info?.[300]}, 0 0 0 4px ${palette.info?.[200]}`,
        },
      },
    },
  },
}

export default Styles
