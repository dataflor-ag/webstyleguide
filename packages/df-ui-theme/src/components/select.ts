import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"

export const getSelects = (theme: Theme): ComponentStyles => {
  const { palette } = theme

  return {
    MuiSelect: {
      defaultProps: {
        variant: "standard",
        displayEmpty: true,
        fullWidth: true,
        MenuProps: {
          PopoverClasses: {
            paper: "select-dropdown",
          },
        },
      },
      styleOverrides: {
        root: () => ({
          padding: "0",
          ".select-placeholder": {
            color: palette.grey?.[400],
          },
          ".MuiSelect-select": {
            padding: theme.spacing(0, 3),
            height: "inherit !important",
            display: "flex",
            alignItems: "center",
            paddingRight: theme.spacing(10) + "!important",
          },
          ".MuiSelect-select:focus": {
            backgroundColor: "transparent",
          },
          ".MuiSelect-icon": {
            width: "1.25rem",
            height: "1.25rem",
            top: "calc(50% - 0.625rem)",
            right: theme.spacing(3),
            color: `${palette.grey?.[400]}`,
          },
        }),
      },
    },
  }
}
