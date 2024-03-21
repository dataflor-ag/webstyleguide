import { Components, Theme } from "@mui/material"
import palette from "./palette"
import theme from "./index"
import shadows, { customShadows } from "./shadows"

const components: Components<Omit<Theme, "components">> = {
  MuiGrid: {
    defaultProps: {
      spacing: 6,
    },
  },

  // Button
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    defaultProps: {
      color: "secondary",
      variant: "contained",
      disableElevation: true,
    },
    styleOverrides: {
      root: () => ({
        fontWeight: "600",
        borderRadius: 8,
        transition: "all 0.2s ease-in-out",
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
        backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.00) 100%)",
        boxShadow: customShadows.xs.primary,
        ":hover": {
          backgroundImage: "none",
          backgroundColor: `${palette.primary?.[600]}`,
          boxShadow: customShadows.md.primary,
        },
        ":focus": {
          boxShadow: customShadows.xs.primaryFocus,
        },
        ":disabled": {
          backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.00) 100%)",
          boxShadow: customShadows.xs.primary,
          color: "white",
          backgroundColor: `${palette.primary?.[500]}`,
          opacity: 0.4,
        },
      },
      containedSecondary: {
        color: "white",
        backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.00) 100%)",
        boxShadow: customShadows.xs.secondary,
        ":hover": {
          backgroundImage: "none",
          boxShadow: customShadows.md.secondary,
        },
        ":focus": {
          boxShadow: customShadows.xs.secondaryFocus,
        },
        ":disabled": {
          backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.00) 100%)",
          boxShadow: customShadows.xs.secondary,
          color: "white",
          backgroundColor: `${palette.secondary?.[900]}`,
          opacity: 0.4,
        },
      },
      outlinedSecondary: {
        boxShadow: customShadows.xs.base,
        border: "none",
        color: `${palette.grey?.[700]}`,
        ":hover": {
          backgroundColor: `${palette.grey?.[50]}`,
          boxShadow: customShadows.md.base,
          color: `${palette.grey?.[900]}`,
          border: "none",
        },
        ":focus": {
          boxShadow: customShadows.xs.focus,
        },
        ":disabled": {
          color: `${palette.grey?.[700]}`,
          boxShadow: customShadows.xs.base,
          border: "none",
          opacity: "0.4",
        },
      },
      containedError: {
        color: "white",
        backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.00) 100%)",
        backgroundColor: `${palette.error?.[600]}`,
        boxShadow: customShadows.xs.error,
        ":hover": {
          backgroundImage: "none",
          boxShadow: customShadows.md.error,
        },
        ":focus": {
          boxShadow: customShadows.xs.errorFocus,
        },
        ":disabled": {
          boxShadow: customShadows.xs.error,
          color: "white",
          backgroundColor: `${palette.error?.[600]}`,
          opacity: 0.4,
        },
      },
      outlinedError: {
        boxShadow: customShadows.xs.error,
        border: "none",
        color: `${palette.error?.[600]}`,
        ":hover": {
          backgroundColor: `${palette.error?.[50]}`,
          boxShadow: customShadows.md.error,
          border: "none",
        },
        ":focus": {
          boxShadow: customShadows.xs.errorFocus,
        },
        ":disabled": {
          color: `${palette.error?.[600]}`,
          boxShadow: customShadows.xs.error,
          border: "none",
          opacity: "0.4",
        },
      },
    },
  },

  // Input
  MuiFormControl: {
    styleOverrides: {
      root: () => ({
        marginBottom: theme.spacing(5) + "!important",
      }),
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "standard",
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: () => ({
        "&.Mui-focused": {
          color: `${palette.grey?.[900]}`,
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
  MuiInputBase: {
    styleOverrides: {
      root: () => ({
        "label + &": {
          marginTop: "0 !important",
        },
        "& .MuiInputBase-input": {
          padding: 0,
          border: 0,
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
        borderRadius: 8,
        padding: theme.spacing(0, 3),
        height: "2.5rem",
        width: "auto",
        border: 0,
        marginTop: 0,
        transition: "all 0.1s ease-in-out",
        boxShadow: shadows[1],
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

  // Cards
  MuiPaper: {
    styleOverrides: {
      root: () => ({
        borderRadius: 12,
      }),
    },
  },
  MuiCardMedia: {
    styleOverrides: {
      root: () => ({
        marginBottom: theme.spacing(5),
        borderRadius: 8,
      }),
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: () => ({
        padding: theme.spacing(6),
      }),
    },
  },
  MuiCardActionArea: {
    styleOverrides: {
      root: () => ({
        padding: theme.spacing(0),
      }),
    },
  },
}

export default components
