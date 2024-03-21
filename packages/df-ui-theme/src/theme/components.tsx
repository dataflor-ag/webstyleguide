import { Components, Theme } from "@mui/material"
import palette from "./palette"
import theme from "./index"
import shadows from "./shadows"

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
    styleOverrides: {
      root: () => ({
        marginBottom: theme.spacing(5) + "!important",
      }),
    },
  },
  MuiTextField:{
    defaultProps:{
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
          boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 
                      0 1px 2px -1px rgba(0,0,0,0.08), 
                      0 0 0 1px ${palette.grey?.[300]}, 
                      0 0 0 1px #C9C9CF, 0 0 0 4px ${palette.grey?.[200]}`,
        },
        "&.Mui-disabled": {
          backgroundColor: `${palette.grey?.[50]}`,
        },
        "&.Mui-error": {
          boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 
                      0 1px 2px -1px rgba(0,0,0,0.08), 
                      0 0 0 1px ${palette.error?.[500]}`,
        },
        "&.Mui-error.Mui-focused": {
          boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 
                      0 1px 2px -1px rgba(0,0,0,0.08), 
                      0 0 0 1px ${palette.error?.[500]},
                      0 0 0 1px #C9C9CF, 0 0 0 4px ${palette.error?.[200]}`,
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
      // elevation: () => ({
      //   boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), 0 0 0 1px ${palette.grey![200]}`,
      // }),
    }
  },
  MuiCardMedia: {
    styleOverrides:{
      root: () => ({
        marginBottom: theme.spacing(5),
        borderRadius: 8,
      })
    }
  },
  MuiCardContent: {
    styleOverrides:{
      root: () => ({
        padding: theme.spacing(6),
      })
    }
  },
  MuiCardActionArea: {
    styleOverrides:{
      root: () => ({
        padding: theme.spacing(0),
      })
    }
  }
}

export default components
