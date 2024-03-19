import { Components, Theme } from "@mui/material"
import palette from "./palette"
import theme from "./index"

const components: Components<Omit<Theme, "components">> = {
  MuiGrid: {
    defaultProps: {
      spacing: 6,
    },
  },

  // Button
  MuiButtonBase: {
    defaultProps: {
      color: "primary",
      disableRipple: true,
    },
  },
  MuiButton: {
    defaultProps: {
      variant: "contained",
      disableElevation: true,
    },
    styleOverrides: {
      root: () => ({
        fontWeight: "500",
        borderRadius: 8,
      }),
      sizeSmall: () => ({
        height: theme.spacing(8),
        borderRadius: "0.375rem",
        padding: theme.spacing(0, 4),
      }),
      sizeMedium: () => ({
        height: theme.spacing(10),
        borderRadius: "0.5rem",
        padding: theme.spacing(0, 5),
      }),
      sizeLarge: () => ({
        height: theme.spacing(12),
        borderRadius: "0.625rem",
        padding: theme.spacing(0, 6),
      }),
      containedPrimary: {
        color: "white",
        ":disabled": {
          color: "white",
          backgroundColor: `${palette.primary![500]}`,
          opacity: 0.4,
        },
      },
    },
  },
  // Input
  MuiFormControl: {
    defaultProps: {},
    styleOverrides: {
      root: () => ({
        // padding: theme.spacing(3, 0),
      }),
    },
  },
  MuiInputLabel: {
    defaultProps: {
      // shrink: false,
      shrink: true,
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: () => ({
        "label + &": {
          // marginTop: theme.spacing(11),
        },
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {},
    },
  },
  MuiTextField: {
    defaultProps: {
      InputLabelProps: { shrink: true },
    },

    styleOverrides: {
      root: () => ({
        // padding: theme.spacing(0, 4),
      }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: () => ({
        // fontWeight: "500",
        borderRadius: 8,
        // padding: theme.spacing(0, 3),
        // height: "2.5rem",
      }),
    },
  },
}

export default components
