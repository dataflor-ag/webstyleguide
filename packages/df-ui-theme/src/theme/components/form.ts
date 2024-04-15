import { Components, Theme } from "@mui/material"
import theme, { palette } from "../index"
import { radius } from "../shape"
import shadows, { customShadows } from "../shadows"

const Styles: Components<Omit<Theme, "components">> = {
  MuiFormControl: {
    styleOverrides: {
      root: () => ({
        marginBottom: theme.spacing(5) + "!important",
      }),
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: () => ({
        marginLeft: "-0.5rem",
        ".MuiTypography-root": {
          fontWeight: "500",
          color: `${palette.grey?.[600]}`,
          transition: "all 0.2s ease-in-out",

          "&.Mui-disabled": {
            opacity: "0.4",
            color: `${palette.grey?.[600]}`,
          },
        },
      }),
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "standard",
      fullWidth: true,
    },
  },
  MuiInputLabel: {
    defaultProps: {
      shrink: true,
    },
    styleOverrides: {
      root: () => ({
        "&.Mui-focused": {
          color: `${palette.grey?.[900]}`,
        },
        "&.Mui-error": {
          color: `${palette.error?.[600]}`,
        },
        ".MuiFormLabel-asterisk": {
          display: "none",
        },
        marginBottom: "0.375rem",
        fontSize: "0.875rem",
        fontWeight: "500",
        position: "relative",
        transform: "none",
        color: `${palette.grey?.[700]}`,
      }),
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: () => ({
        marginTop: "0.25rem",
        color: `${palette.grey?.[600]}`,
        "&.Mui-error": {
          color: `${palette.error?.[600]}`,
        },
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: () => ({
        "label + &": {
          marginTop: "0 !important",
        },
        "& .MuiInputBase-input": {
          padding: 0,
          border: 0,
          "&[type=password]": {
            letterSpacing: "2px",
          },
        },
        "&:after": {
          display: "none",
        },
        "&:before": {
          display: "none",
        },
      }),
    },
  },
  MuiInput: {
    styleOverrides: {
      root: () => ({
        fontSize: "1rem",
        fontWeight: "400",
        borderRadius: radius.md,
        padding: theme.spacing(0, 3),
        height: "2.5rem",
        width: "auto",
        border: 0,
        marginTop: 0,
        transition: "all 0.1s ease-in-out",
        boxShadow: shadows[1],
        input: {
          "&::placeholder": {
            color: palette.grey?.[400],
            opacity: "1",
          },
        },
        "&.Mui-focused": {
          boxShadow: customShadows.xs.focus,
        },
        "&.Mui-disabled": {
          backgroundColor: `${palette.grey?.[50]}`,
        },
        "&.Mui-error": {
          boxShadow: customShadows.xs.error,
        },
        "&.Mui-error.Mui-focused": {
          boxShadow: customShadows.xs.errorFocus,
        },
      }),
    },
  },
}

export default Styles
