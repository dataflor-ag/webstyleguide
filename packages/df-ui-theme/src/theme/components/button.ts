import type { Theme } from "@mui/material";
import type { ComponentStyles } from "../types/Components";
import { radius } from "../shape";
import { getShadow } from "../utils/getShadows";

export const getButtons = (theme: Theme): ComponentStyles => {
  const { palette } = theme;
  const isLightMode = palette.mode === "light";

  return {
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
          ".MuiButton-startIcon": {
            marginRight: "0.375rem",
            marginLeft: "-0.25rem",
          },
          ".MuiButton-endIcon": {
            marginLeft: "0.375rem",
            marginRight: "-0.25rem",
          },
          ".MuiButton-icon": {
            svg: {
              fontSize: "1rem",
            },
          },
        }),
        sizeMedium: () => ({
          height: theme.spacing(10),
          borderRadius: radius.md,
          padding: theme.spacing(0, 5),
          ".MuiButton-startIcon": {
            marginRight: "0.5rem",
            marginLeft: "-0.25rem",
          },
          ".MuiButton-endIcon": {
            marginLeft: "0.5rem",
            marginRight: "-0.25rem",
          },
          ".MuiButton-icon": {
            svg: {
              fontSize: "1.25rem",
            },
          },
        }),
        sizeLarge: () => ({
          height: theme.spacing(12),
          borderRadius: radius.lg,
          padding: theme.spacing(0, 6),
          ".MuiButton-startIcon": {
            marginRight: "0.5rem",
            marginLeft: "-0.25rem",
          },
          ".MuiButton-endIcon": {
            marginLeft: "0.5rem",
            marginRight: "-0.25rem",
          },
          ".MuiButton-icon": {
            svg: {
              fontSize: "1.5rem",
            },
          },
        }),
        containedPrimary: () => ({
          color: palette.primary.contrastText,
          boxShadow: getShadow(palette.mode).xs.primary,
          ":hover": {
            backgroundImage: "none",
            backgroundColor: isLightMode
              ? `${palette.primary?.[600]}`
              : `${palette.primary?.[400]}`,
            boxShadow: getShadow(palette.mode).xs.primary,
          },
          ":focus": {
            boxShadow: getShadow(palette.mode).xs.primaryFocus,
          },
          ":disabled": {
            boxShadow: getShadow(palette.mode).xs.primary,
            color: palette.primary.contrastText,
            backgroundColor: palette.primary[500],
            opacity: 0.4,
          },
        }),
        containedSecondary: {
          color: palette.secondary.contrastText,
          boxShadow: getShadow(palette.mode).xs.secondary,
          ":hover": {
            backgroundColor: isLightMode
              ? palette.secondary[800]
              : palette.secondary[700],
            backgroundImage: "none",
            boxShadow: getShadow(palette.mode).xs.secondary,
          },
          ":focus": {
            boxShadow: getShadow(palette.mode).xs.secondaryFocus,
          },
          ":disabled": {
            boxShadow: getShadow(palette.mode).xs.secondary,
            color: palette.secondary.contrastText,
            backgroundColor: `${palette.secondary?.[900]}`,
            opacity: 0.4,
          },
        },
        outlinedSecondary: {
          boxShadow: getShadow(palette.mode).xs.base,
          border: "none",
          color: palette.grey[900],
          backgroundColor: palette.secondary[0],
          ":hover": {
            backgroundColor: isLightMode
              ? `${palette.grey?.[100]}`
              : "rgba(255,255,255,0.04)",
            boxShadow: getShadow(palette.mode).xs.base,
            border: "none",
          },
          ":focus": {
            boxShadow: getShadow(palette.mode).xs.focus,
          },
          ":disabled": {
            boxShadow: getShadow(palette.mode).xs.base,
            color: palette.grey[900],
            border: "none",
            opacity: "0.4",
          },
          ":after": {
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.00) 100%)",
          },
          ".MuiButton-icon": {
            color: `${palette.grey?.[600]}`,
          },
        },
        textSecondary: {
          color: `${palette.grey?.[700]}`,
          ":hover": {
            backgroundColor: palette.grey[100],
            color: palette.grey[900],
          },
          ":focus": {
            boxShadow: getShadow(palette.mode).xs.focus,
          },
          ":disabled": {
            color: `${palette.grey?.[700]}`,
            opacity: "0.4",
          },
          ":after": {
            background: "none",
          },
          ".MuiButton-icon": {
            color: `${palette.grey?.[600]}`,
          },
        },
        containedError: {
          color: palette.error.contrastText,
          backgroundColor: palette.error[600],
          boxShadow: getShadow(palette.mode).xs.error,
          ":hover": {
            backgroundImage: "none",
            boxShadow: getShadow(palette.mode).xs.error,
          },
          ":focus": {
            boxShadow: getShadow(palette.mode).xs.errorFocus,
          },
          ":disabled": {
            boxShadow: getShadow(palette.mode).xs.error,
            color: palette.error.contrastText,
            backgroundColor: `${palette.error?.[600]}`,
            opacity: 0.4,
          },
        },
        outlinedError: {
          boxShadow: getShadow(palette.mode).xs.error,
          // backgroundColor:
          border: "none",
          color: `${palette.error?.[600]}`,
          ":hover": {
            backgroundColor: isLightMode
              ? palette.error[50]
              : palette.error[950],
            boxShadow: getShadow(palette.mode).xs.error,
            border: "none",
          },
          ":focus": {
            boxShadow: getShadow(palette.mode).xs.errorFocus,
          },
          ":disabled": {
            color: `${palette.error?.[600]}`,
            boxShadow: getShadow(palette.mode).xs.error,
            border: "none",
            opacity: "0.4",
          },
          ":after": {
            background: `linear-gradient(180deg, ${palette.error?.[950]} 0%, rgba(255,255,255,0.00) 100%)`,
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
              backgroundColor: isLightMode
                ? `${palette.grey?.[100]}`
                : "rgba(255,255,255,0.04)",
            },
            ":focus": {
              zIndex: "1",
              boxShadow: getShadow(palette.mode).xs.focus + "!important",
            },
            "&:after": {
              background: "none",
            },
          },
        }),
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "inherit",
      },
      styleOverrides: {
        root: () => ({
          padding: "0",
          transition: "all 0.2s ease-in-out",
          ":disabled": {
            opacity: "0.4",
          },
        }),

        colorInherit: {
          color: palette.grey[600],
          ":hover": {
            backgroundColor: palette.grey[100],
            color: palette.grey[900],
          },
          ":focus": {
            boxShadow: getShadow(palette.mode).xs.focus,
          },
          ":disabled": {
            color: palette.grey[700],
          },
        },

        colorSecondary: {
          boxShadow: getShadow(palette.mode).xs.base,
          color: palette.grey[600],
          backgroundColor: palette.surface[0],
          ":hover": {
            backgroundColor: palette.grey[100],
            color: palette.grey[900],
          },
          ":focus": {
            boxShadow: getShadow(palette.mode).xs.focus,
          },
          ":disabled": {
            boxShadow: getShadow(palette.mode).xs.base,
          },
        },

        colorPrimary: {
          color: palette.primary[500],
          ":hover": {
            backgroundColor: palette.primary[50],
          },
          ":focus": {
            boxShadow: `0 0 0 1px ${palette.primary?.[300]}, 0 0 0 4px ${palette.primary?.[200]}`,
          },
          ":disabled": {
            color: palette.primary[500],
          },
        },

        colorError: {
          color: palette.error[600],
          ":hover": {
            backgroundColor: isLightMode
              ? palette.error[50]
              : palette.error[950],
          },
          ":focus": {
            boxShadow: isLightMode
              ? `0 0 0 1px ${palette.error?.[300]}, 0 0 0 4px ${palette.error?.[200]}`
              : `0 0 0 1px ${palette.error?.[800]}, 0 0 0 4px ${palette.error?.[900]}`,
          },
          ":disabled": {
            color: palette.error[500],
          },
        },

        colorInfo: {
          ":hover": {
            backgroundColor: palette.info[50],
          },
          ":focus": {
            boxShadow: isLightMode
              ? `0 0 0 1px ${palette.info?.[300]}, 0 0 0 4px ${palette.info?.[200]}`
              : `0 0 0 1px ${palette.info?.[200]}, 0 0 0 4px ${palette.info?.[50]}`,
          },
          ":disabled": {
            color: palette.info[500],
          },
        },

        colorSuccess: {
          ":hover": {
            backgroundColor: palette.success[50],
          },
          ":focus": {
            boxShadow: isLightMode
              ? `0 0 0 1px ${palette.success?.[300]}, 0 0 0 4px ${palette.success?.[200]}`
              : `0 0 0 1px ${palette.success?.[200]}, 0 0 0 4px ${palette.success?.[50]}`,
          },
          ":disabled": {
            color: palette.success[500],
          },
        },

        colorWarning: {
          ":hover": {
            backgroundColor: palette.warning[50],
          },
          ":focus": {
            boxShadow: isLightMode
              ? `0 0 0 1px ${palette.warning?.[300]}, 0 0 0 4px ${palette.warning?.[200]}`
              : `0 0 0 1px ${palette.warning?.[200]}, 0 0 0 4px ${palette.warning?.[50]}`,
          },
          ":disabled": {
            color: palette.warning[500],
          },
        },

        sizeSmall: () => ({
          width: theme.spacing(8),
          height: theme.spacing(8),
          borderRadius: radius.sm,
          svg: {
            fontSize: "1rem",
          },
        }),
        sizeMedium: () => ({
          width: theme.spacing(10),
          height: theme.spacing(10),
          borderRadius: radius.md,
          svg: {
            fontSize: "1.25rem",
          },
        }),
        sizeLarge: () => ({
          width: theme.spacing(12),
          height: theme.spacing(12),
          borderRadius: radius.lg,
        }),
      },
    },
  };
};
