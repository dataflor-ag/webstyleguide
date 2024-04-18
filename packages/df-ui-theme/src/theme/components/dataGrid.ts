import { Components, Theme } from "@mui/material";
import palette from "../palette";
import { customShadows } from "../shadows";

const Styles: Components<Omit<Theme, "components">> = {
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
        boxShadow: customShadows.sm.base,
        "*:focus, *:focus-within": {
          outline: "none !important",
        },
      },
      row: {
        transition: "all 0.2s ease-in-out",
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
        // "&:after": {
        //   content: "''",
        //   position: "absolute",
        //   right: 0,
        //   width: "1px",
        //   height: "1rem",
        //   backgroundColor: palette.grey?.[200],
        // },
      },
      cell: {
        padding: "0 1.5rem",
        color: palette.grey?.[700],
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
    },
  },
};

export default Styles;
