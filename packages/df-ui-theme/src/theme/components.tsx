import { Components, Theme } from "@mui/material"
import palette from "./palette"
import theme from "./index"
import shadows, { customShadows } from "./shadows"
import { radius } from "./shape"
import { checkboxIcon, checkboxIconIndeterminate } from "./utils/checkbox"

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
        borderRadius: radius.xl,
      }),
    },
  },
  MuiCardMedia: {
    styleOverrides: {
      root: () => ({
        marginBottom: theme.spacing(5),
        borderRadius: radius.md,
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

  // Avatar
  MuiAvatar: {
    styleOverrides: {
      root: () => ({
        backgroundImage: `linear-gradient(180deg, ${palette.grey?.[100]} 0%, ${palette.grey?.[200]} 100%)`,
        backgroundColor: `${palette.grey?.[100]}`,
        color: `${palette.grey?.[600]}`,
        fontWeight: "600",
        fontSize: "1rem",
        width: "2.5rem",
        height: "2.5rem",
      }),
    },
  },
  MuiAvatarGroup: {
    defaultProps: {
      spacing: 12,
    },
  },

  // Dialog
  MuiDialog: {
    defaultProps: {
      PaperProps: {
        elevation: 6,
      },
    },
    styleOverrides: {
      root: () => ({
        ".MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        ".MuiDialog-paper": {
          borderRadius: radius["2xl"],
        },
      }),
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: () => ({
        padding: "1.25rem",
        fontSize: "1rem",
      }),
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: () => ({
        padding: "1.25rem",
      }),
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: () => ({
        padding: "1rem 1.25rem",
        gap: "0.75rem",
        ">*": {
          margin: "0 !important",
        },
      }),
    },
  },

  // Container
  MuiContainer: {
    defaultProps: {
      maxWidth: "lg",
    },
    styleOverrides: {
      root: () => ({
        paddingLeft: "1.5rem !important",
        paddingRight: "1.5rem !important",
      }),
    },
  },

  // AppBar (HeaderNavigation)
  MuiAppBar: {
    styleOverrides: {
      root: () => ({
        borderRadius: radius.none,
        boxShadow: "none",
        backgroundColor: `${palette.grey?.[100]}`,
        color: `${palette.grey?.[700]}`,
      }),
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: () => ({
        minHeight: "4.5rem !important",
        justifyContent: "space-between",
      }),
    },
  },

  // Pagination
  MuiPagination: {
    defaultProps: {
      shape: "rounded",
      size: "large",
    },
    styleOverrides: {
      root: () => ({
        ".MuiPagination-ul": {
          gap: "0.125rem",
          "li:first-child": {
            marginRight: "auto",
          },
          "li:last-child": {
            marginLeft: "auto",
          },
        },
      }),
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: () => ({
        borderRadius: radius.md,
        margin: 0,
        fontWeight: "600",
        fontSize: "0.875rem",
        "&.Mui-selected": {
          backgroundColor: `${palette.grey?.[100]}`,
          "&:hover": {
            backgroundColor: `${palette.grey?.[100]}`,
          },
        },
        "&:hover": {
          backgroundColor: `${palette.grey?.[50]}`,
        },
      }),
    },
  },

  // Select / Input dropdown
  MuiMenu: {
    defaultProps: {
      autoFocus: false,
      elevation: 4,
    },
    styleOverrides: {
      root: () => ({
        ".MuiPaper-root": {
          borderRadius: radius.md,
          marginTop: theme.spacing(1),
        },
        ".MuiList-root": {
          padding: theme.spacing(1),
          display: "flex",
          flexDirection: "column",
          gap: "1px",
        },
      }),
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: () => ({
        borderRadius: radius.sm,
        fontSize: "1rem",
        fontWeight: "500",
        color: `${palette.grey?.[900]}`,
        transition: "all 0.2s ease-in-out",
        padding: theme.spacing(0, 2),
        height: "2.5rem",
        "&:hover": {
          backgroundColor: `${palette.grey?.[50]}`,
        },
        "&.Mui-selected": {
          backgroundColor: `${palette.grey?.[100]}`,
          "&:hover": {
            backgroundColor: `${palette.grey?.[100]}`,
          },
        },
      }),
    },
  },
  MuiSelect: {
    defaultProps: {
      variant: "standard",
    },
    styleOverrides: {
      root: () => ({
        padding: "0",
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

  // Checkbox
  MuiCheckbox: {
    defaultProps: {
      size: "small",
      disableRipple: true,
      icon: checkboxIcon,
      checkedIcon: checkboxIcon,
      indeterminateIcon: checkboxIconIndeterminate,
    },
    styleOverrides: {
      root: () => ({
        padding: "0.5rem",
        ".checkbox-icon": {
          color: "white",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "1.25rem",
          height: "1.25rem",
          borderRadius: radius.sm,
          boxShadow: customShadows.xs.base,
          transition: "all 0.2s ease-in-out",
          svg: {
            transition: "all 0.2s ease-in-out",
            transform: "scale(0.5)",
            opacity: "0",
          },
          "svg path": {
            fill: "currentColor",
          },
        },
        "&.Mui-checked": {
          ".checkbox-icon": {
            backgroundColor: `${palette.secondary?.[900]}`,
            boxShadow: customShadows.xs.secondary,
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
            svg: {
              transform: "scale(1)",
              opacity: "1",
            },
          },
          "&.Mui-focusVisible": {
            ".checkbox-icon": {
              boxShadow: customShadows.xs.secondaryFocus,
            },
          },
        },
        "&.Mui-focusVisible": {
          ".checkbox-icon": {
            boxShadow: customShadows.xs.focus,
          },
        },
        ":hover": {
          ".checkbox-icon": {
            "::after": {
              opacity: "0",
            },
          },
        },
        "&.Mui-disabled": {
          ".checkbox-icon": {
            backgroundColor: `${palette.secondary?.[50]}`,
            color: `${palette.secondary?.[300]}`,
            boxShadow: customShadows.xs.base,
          },
        },
        "+ .MuiTypography-root": {
          fontSize: "1rem",
        },
        "&.Mui-checked + .MuiTypography-root": {
          color: `${palette.secondary?.[900]}`,
        },
      }),
      sizeSmall: () => ({
        "+ .MuiTypography-root": {
          fontSize: "0.875rem",
        },
        ".checkbox-icon": {
          width: "1rem",
          height: "1rem",
          borderRadius: radius.xs,
        },
      }),
    },
  },

  // FormControlLabel
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

  // Tabs
  MuiTabs: {
    styleOverrides: {
      root: () => ({
        position: "relative",
        ".MuiTabs-scroller": {
          display: "inline-flex",
          alignItems: "center",
        },
        ".MuiTabs-indicator": {
          borderTopLeftRadius: "50rem",
          borderTopRightRadius: "50rem",
          backgroundColor: `${palette.grey?.[900]}`,
        },
        ":after": {
          content: '""',
          position: "absolute",
          display: "block",
          width: "100%",
          height: "1px",
          bottom: "0",
          left: "0",
          backgroundColor: `${palette.grey?.[200]}`,
          zIndex: "-1",
        }
      })
    },
  },
  MuiTab: {
    styleOverrides: {
      root: () => ({
        padding: "0",
        margin: "0 0.75rem",
        height: "2.5rem",
        borderRadius: radius.md,
        minWidth: "auto",
        minHeight: "auto",
        color: `${palette.grey?.[500]}`,
        transition: "all 0.2s ease-in-out",
        fontWeight: "500",
        letterSpacing: "0",
        "&:first-child": {
          marginLeft: "0",
        },
        "&.Mui-selected": {
          color: `${palette.grey?.[900]}`,
        },
        "&.Mui-disabled": {
          color: `${palette.grey?.[500]}`,
          opacity: "0.4",
        },
      }),
    }
  },
}

export default components
