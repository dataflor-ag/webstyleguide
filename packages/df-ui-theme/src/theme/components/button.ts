import { Components, Theme } from "@mui/material"
import theme, { palette } from "../index"
import { radius } from "../shape"
import { customShadows } from "../shadows"

const styles: Components<Omit<Theme, "components">> = {
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
        borderRadius: radius.md,
        transition: "all 0.2s ease-in-out",
        "::after": {
          content: '""',
          position: "absolute",
          borderRadius: "inherit",
          opacity: "1",
          inset: "0px",
          transition: "all 0.2s ease-in-out",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.00) 100%)",
          PointerEvent: "none",
        },
        ":hover": {
          "::after": {
            opacity: "0",
          },
        },
      }),
      sizeSmall: () => ({
        height: theme.spacing(8),
        borderRadius: radius.sm,
        padding: theme.spacing(0, 4),
      }),
      sizeMedium: () => ({
        height: theme.spacing(10),
        borderRadius: radius.md,
        padding: theme.spacing(0, 5),
      }),
      sizeLarge: () => ({
        height: theme.spacing(12),
        borderRadius: radius.lg,
        padding: theme.spacing(0, 6),
      }),
      containedPrimary: {
        color: "white",
        boxShadow: customShadows.xs.primary,
        ":hover": {
          backgroundImage: "none",
          backgroundColor: `${palette.primary?.[600]}`,
          boxShadow: customShadows.xs.primary,
        },
        ":focus": {
          boxShadow: customShadows.xs.primaryFocus,
        },
        ":disabled": {
          boxShadow: customShadows.xs.primary,
          color: "white",
          backgroundColor: `${palette.primary?.[500]}`,
          opacity: 0.4,
        },
      },
      containedSecondary: {
        color: "white",
        boxShadow: customShadows.xs.secondary,
        ":hover": {
          backgroundImage: "none",
          boxShadow: customShadows.xs.secondary,
        },
        ":focus": {
          boxShadow: customShadows.xs.secondaryFocus,
        },
        ":disabled": {
          boxShadow: customShadows.xs.secondary,
          color: "white",
          backgroundColor: `${palette.secondary?.[900]}`,
          opacity: 0.4,
        },
      },
      outlinedSecondary: {
        boxShadow: customShadows.xs.base,
        border: "none",
        color: `${palette.grey?.[900]}`,
        backgroundColor: "white",
        ":hover": {
          backgroundColor: `${palette.grey?.[100]}`,
          boxShadow: customShadows.xs.base,
          border: "none",
        },
        ":focus": {
          boxShadow: customShadows.xs.focus,
        },
        ":disabled": {
          boxShadow: customShadows.xs.base,
          border: "none",
          opacity: "0.4",
        },
      },
      textSecondary: {
        color: `${palette.grey?.[700]}`,
        ":hover": {
          backgroundColor: `${palette.grey?.[100]}`,
          color: `${palette.grey?.[900]}`,
        },
        ":focus": {
          boxShadow: customShadows.xs.focus,
        },
        ":disabled": {
          color: `${palette.grey?.[700]}`,
          opacity: "0.4",
        },
      },
      containedError: {
        color: "white",
        backgroundColor: `${palette.error?.[600]}`,
        boxShadow: customShadows.xs.error,
        ":hover": {
          backgroundImage: "none",
          boxShadow: customShadows.xs.error,
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
          boxShadow: customShadows.xs.error,
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
  MuiButtonGroup: {
    defaultProps: {
      disableRipple: true,
      color: "secondary",
      variant: "contained",
    },
    styleOverrides: {
      root: () => ({
        borderRadius: radius.md,
        button: {
          backgroundColor: "transparent",
          color: `${palette.grey?.[900]}`,
          boxShadow: "none",
          borderRadius: "0",
          borderColor: `${palette.grey?.[200]}` + "!important",
          "&:first-child": {
            borderTopLeftRadius: radius.md,
            borderBottomLeftRadius: radius.md,
          },
          "&:last-child": {
            borderTopRightRadius: radius.md,
            borderBottomRightRadius: radius.md,
          },
          "&:hover": {
            backgroundColor: `${palette.grey?.[100]}`,
          },
          ":focus": {
            zIndex: "1",
            boxShadow: customShadows.xs.focus + "!important",
          },
        },
      }),
    },
  },
}

export default styles
