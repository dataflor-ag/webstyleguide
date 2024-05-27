import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { getShadow } from "../utils/getShadows"
import { radius } from "../tokens/shape"

export const getDataGrid = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    MuiDataGrid: {
      defaultProps: {
        columnHeaderHeight: 40,
        rowHeight: 64,
      },
      styleOverrides: {
        root: {
          "--DataGrid-rowBorderColor": palette.grey?.[200],
          "--unstable_DataGrid-radius": "0.75rem",
          border: "0 none",
          boxShadow: getShadow(palette.mode).sm.base,
          backgroundColor: palette.surface[0],
          "*:focus, *:focus-within": {
            outline: "none !important",
          },
          ".MuiDataGrid-withBorderColor": {
            borderColor: "var(--DataGrid-rowBorderColor)",
          },
        },
        row: {
          transition: "background-color 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: palette.grey?.[50],
          },
          "&.Mui-selected": {
            backgroundColor: palette.grey?.[100],
            "&:hover": {
              backgroundColor: palette.grey?.[100],
            },
          },
          "&:last-of-type": {
            ".MuiDataGrid-cell": {
              borderBottomColor: "transparent",
            },
          },
        },
        columnHeaders: {
          "--DataGrid-containerBackground": palette.grey?.[50],
          backgroundColor: "var(--DataGrid-containerBackground)",
        },
        columnHeader: {
          padding: "0 1.5rem",
          height: "var(--DataGrid-headerHeight) !important",
          color: palette.grey?.[600],
          fontWeight: 500,
          fontSize: "0.75rem",
          position: "relative",
        },
        iconButtonContainer: {
          ".MuiIconButton-root": {
            "&:hover": {
              backgroundColor: "transparent !important",
            },
            "&:focus": {
              boxShadow: "none !important",
            },
          },
        },
        // DataGrid-Menu
        menu: {
          ".MuiPaper-root": {
            borderRadius: radius.md,
            marginTop: "-0.125rem",
            minWidth: "10rem !important",
            boxShadow: getShadow(palette.mode).lg.base,
            "&.select-dropdown": {
              ".MuiMenuItem-root": {
                fontSize: "1rem",
              },
            },
          },
          ".MuiDivider-root": {
            margin: "0.25rem -0.25rem",
          },
          ".MuiList-root": {
            padding: "0.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            minWidth: "10rem",
            ".MuiListItemIcon-root": {
              minWidth: "0",
            },
          },
        },
        cell: {
          padding: "0 1.5rem",
          color: palette.grey?.[700],
          display: "flex",
          alignItems: "center",
          "&.MuiDataGrid-cell--withRenderer": {
            overflow: "visible !important",
          },
          "&[data-field='id']": {
            fontWeight: 500,
            color: palette.grey?.[900],
            "&:before": {
              content: "'#'",
            },
          },
        },
        cellCheckbox: {
          maxWidth: "4rem !important",
          width: "4rem !important",
          minWidth: "4rem !important",
          "+ *": {
            paddingLeft: 0,
          },
        },
        columnHeaderCheckbox: {
          padding: "0",
          maxWidth: "4rem !important",
          width: "4rem !important",
          minWidth: "4rem !important",
          "+ *": {
            paddingLeft: 0,
          },
        },
        footerContainer: {
          borderColor: "var(--DataGrid-rowBorderColor) !important",
          padding: "0 1rem",
        },
        panel: {
          marginTop: "-0.25rem !important",
        },
        filterForm: {
          padding: "1rem",
          gap: "1.25rem",
          ".MuiFormControl-root": {
            marginBottom: "0rem !important",
            ".MuiFormControl-root": {
              marginBottom: "0 !important",
            },
            ".MuiButtonBase-root": {
              marginBottom: "0.25rem",
            },
          },
        },
        paper: {
          boxShadow: getShadow(palette.mode).lg.base,
          borderRadius: "0.5rem",
          backgroundColor: isLightMode
            ? palette.surface[0]
            : palette.surface[50],
          ".MuiDataGrid-columnsManagementHeader": {
            display: "none",
          },
          ".MuiDataGrid-columnsManagement": {
            padding: "1rem",
            ".MuiCheckbox-root": {
              padding: "0.5rem",
            },
          },
          ".MuiDataGrid-columnsManagementFooter": {
            padding: "0.75rem 1rem",
            ".MuiCheckbox-root": {
              padding: "0.5rem",
            },
          },
        },
      },
    },
  }
}
