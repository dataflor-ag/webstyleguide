import { Components, Theme } from "@mui/material";
import palette from "../palette";
import { customShadows } from "../shadows";

const Styles: Components<Omit<Theme, "components">> = {
  MuiDataGrid: {
    defaultProps: {
      columnHeaderHeight: 40,
      rowHeight: 64,
      disableColumnMenu: true,
    },
    styleOverrides: {
      root: {
        "--DataGrid-rowBorderColor": palette.grey?.[200],
        "--unstable_DataGrid-radius": "0.75rem",
        border: "0 none",
        boxShadow: customShadows.sm.base,
        "*:focus, *:focus-within": {
          outline: "none !important",
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
      },
      columnHeaders: {
        "--DataGrid-containerBackground": palette.grey?.[50],
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
      // menu: {
      //   ".MuiPaper-root": {
      //     borderRadius: radius.md,
      //     marginTop: "-0.125rem",
      //     minWidth: "10rem",
      //     "&.select-dropdown": {
      //       ".MuiMenuItem-root": {
      //         fontSize: "1rem",
      //       },
      //     },
      //   },
      //   ".MuiList-root": {
      //     padding: "0.25rem",
      //     display: "flex",
      //     flexDirection: "column",
      //     gap: "1px",
      //   },
      // },
      cell: {
        padding: "0 1.5rem",
        color: palette.grey?.[700],
        display: "flex",
        alignItems: "center",
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
        boxShadow: customShadows.lg.base,
        borderRadius: "0.5rem",
        ".MuiDataGrid-columnsManagementHeader": {},
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
};

export default Styles;
