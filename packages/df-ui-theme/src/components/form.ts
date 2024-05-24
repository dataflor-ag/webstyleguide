import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { radius } from "../tokens/shape"
import { getShadow } from "../utils/getShadows"

export const getForms = (theme: Theme): ComponentStyles => {
  const { palette } = theme

  return {
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
          // boxShadow: shadows[1],
          boxShadow: getShadow(palette.mode).xs.base,
          backgroundColor: palette.surface[0],
          input: {
            "&::placeholder": {
              color: palette.grey?.[400],
              opacity: "1",
            },
            "&[type=search]": {
              "&::-webkit-search-cancel-button": {
                display: "none",
              },
            },
          },
          ".MuiInputAdornment-root": {
            color: palette.grey?.[600],
            svg: {
              fontSize: "1.25rem",
            },
          },
          ".MuiInputAdornment-positionEnd": {
            "> svg": {
              color: palette.grey?.[400],
            },
            ".MuiButtonBase-root": {
              marginRight: "-0.25rem",
              backgroundColor: "transparent !important",
              boxShadow: "none !important",
            },
          },
          "&.Mui-focused": {
            boxShadow: getShadow(palette.mode).xs.focus,
          },
          "&.Mui-disabled": {
            backgroundColor: `${palette.grey?.[100]}`,
            opacity: "0.75",
          },
          "&.Mui-error": {
            boxShadow: getShadow(palette.mode).xs.error,
          },
          "&.Mui-error.Mui-focused": {
            boxShadow: getShadow(palette.mode).xs.errorFocus,
          },
          "&.MuiInputBase-multiline": {
            padding: "0",
            height: "auto",
            minHeight: "5rem",
            alignItems: "flex-start",
            overflow: "hidden",
            textarea: {
              padding: theme.spacing(2, 3),
            },
          },
        }),
      },
    },
  }
}
