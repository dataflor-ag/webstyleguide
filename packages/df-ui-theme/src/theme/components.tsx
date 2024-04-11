import { Components, Theme } from "@mui/material"
import palette from "./palette"
import theme from "./index"
import shadows, { customShadows } from "./shadows"
import { radius } from "./shape"
import { checkboxIcon, checkboxIconIndeterminate } from "./utils/checkbox"
import { radioButtonIcon } from "./utils/radioButton"
import { chipIconRemove } from "./utils/chips"

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
          backgroundColor: "rgba(0, 0, 0, 0.6)",
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
          minWidth: "10rem",
          "&.select-dropdown": {
            ".MuiMenuItem-root": {
              fontSize: "1rem",
            },
          },
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
        fontSize: "0.875rem",
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
        "&.MuiMenuItem-divider": {
          border: "0 none",
          marginBottom: "0.5rem",
          "&:after": {
            content: '""',
            display: "block",
            width: "calc(100% + 0.5rem)",
            height: "1px",
            backgroundColor: palette.grey?.[200],
            position: "absolute",
            bottom: "-0.25rem",
            left: "-0.25rem",
          },
        },
      }),
    },
  },
  MuiSelect: {
    defaultProps: {
      variant: "standard",
      displayEmpty: true,
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
        },
      }),
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
    },
  },

  // Toggle button
  MuiToggleButtonGroup: {
    defaultProps: {
      size: "medium",
    },
    styleOverrides: {
      root: () => ({
        height: "2.5rem",
        borderRadius: radius.md,
        backgroundColor: theme.palette.grey?.[100],
        overflow: "hidden",
        alignItems: "center",
        gap: "0.25rem",
        padding: "0 0.125rem",
      }),
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: () => ({
        height: "2.25rem",
        borderRadius: radius.sm + "!important",
        border: "0 none",
        padding: "0 0.875rem",
        color: theme.palette.grey?.[500],
        fontWeight: "500",
        minWidth: "2.25rem",
        transition: "all 0.2s ease-in-out",
        fontSize: "0.875rem",
        "&:hover": {
          backgroundColor: theme.palette.grey?.[200],
          color: theme.palette.grey?.[600],
        },
        "&.Mui-selected": {
          backgroundColor: "white",
          boxShadow: customShadows.xs.base,
          color: theme.palette.grey?.[900],
          "&:hover": {
            backgroundColor: "white",
          },
        },
      }),
    },
  },

  // Radio button
  MuiRadio: {
    defaultProps: {
      size: "small",
      disableRipple: true,
      icon: radioButtonIcon,
      checkedIcon: radioButtonIcon,
    },
    styleOverrides: {
      root: () => ({
        padding: "0.5rem",
        ".radio-button-icon": {
          color: "white",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "1.25rem",
          height: "1.25rem",
          borderRadius: "50rem",
          boxShadow: customShadows.xs.base,
          transition: "all 0.2s ease-in-out",
          span: {
            transition: "all 0.2s ease-in-out",
            transform: "scale(0)",
            opacity: "0",
            backgroundColor: "currentColor",
            width: "0.5rem",
            height: "0.5rem",
            borderRadius: "50rem",
          },
        },
        "&.Mui-checked": {
          ".radio-button-icon": {
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
            span: {
              transform: "scale(1)",
              opacity: "1",
            },
          },
          "&.Mui-focusVisible": {
            ".radio-button-icon": {
              boxShadow: customShadows.xs.secondaryFocus,
            },
          },
        },
        "&.Mui-focusVisible": {
          ".radio-button-icon": {
            boxShadow: customShadows.xs.focus,
          },
        },
        ":hover": {
          ".radio-button-icon": {
            "::after": {
              opacity: "0",
            },
          },
        },
        "&.Mui-disabled": {
          ".radio-button-icon": {
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
        ".radio-button-icon": {
          width: "1rem",
          height: "1rem",
          span: {
            width: "0.375rem",
            height: "0.375rem",
          },
        },
      }),
    },
  },

  // Switch/Toggle
  MuiSwitch: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: () => ({
        width: "auto",
        height: "auto",
        padding: "0.5rem",
        ".MuiButtonBase-root": {
          top: "50%",
          transform: "translateY(-50%) translateX(0)",
          padding: "0.625rem",
          "&:hover": {
            backgroundColor: "transparent !important",
          },
          "&.Mui-focusVisible": {
            "+ .MuiSwitch-track": {
              boxShadow: customShadows.xs.focus,
            },
          },
        },
        ".MuiSwitch-thumb": {
          width: "1rem",
          height: "1rem",
          backgroundColor: "white",
          boxShadow: "0 1px 2px 0 rgba(0,0,0,0.03)",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:after": {
            content: '""',
            display: "block",
            width: "0.375rem",
            height: "0.375rem",
            borderRadius: "50rem",
            backgroundColor: theme.palette.grey?.[200],
            transition: "all 0.2s ease-in-out",
          },
        },
        ".MuiSwitch-track": {
          width: "2.25rem",
          height: "1.25rem",
          backgroundColor: theme.palette.grey?.[200],
          position: "relative",
          borderRadius: "50rem",
          opacity: "1",
          boxShadow: `0 0 0 1px ${palette.grey?.[200]}`,
          transition: "all 0.2s ease-in-out",
        },
        ".Mui-disabled": {
          ".MuiSwitch-thumb": {
            backgroundColor: theme.palette.grey?.[200],
          },
          "+ .MuiSwitch-track": {
            backgroundColor: "transparent",
            boxShadow: `0 0 0 1px ${palette.grey?.[200]}`,
            opacity: "1 !important",
          },
        },
        ".Mui-checked": {
          transform: "translateY(-50%) translateX(1rem) !important",
          "&.Mui-disabled": {
            ".MuiSwitch-thumb": {
              backgroundColor: theme.palette.grey?.[200],
              "&:after": {
                backgroundColor: theme.palette.grey?.[200],
              },
            },
            "+ .MuiSwitch-track": {
              backgroundColor: "transparent !important",
              boxShadow: `0 0 0 1px ${palette.grey?.[200]}`,
              opacity: "1 !important",
            },
          },
          ".MuiSwitch-thumb": {
            "&:after": {
              backgroundColor: theme.palette.grey?.[900],
            },
          },
          "+ .MuiSwitch-track": {
            backgroundColor: `${palette.secondary?.[900]}` + "!important",
            opacity: "1 !important",
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
          },
        },
      }),
      sizeSmall: () => ({
        ".MuiSwitch-thumb": {
          width: "0.75rem",
          height: "0.75rem",
          "&:after": {
            width: "0.25rem",
            height: "0.25rem",
          },
        },
        ".MuiSwitch-track": {
          width: "1.75rem",
          height: "1rem",
        },
        ".Mui-checked": {
          transform: "translateY(-50%) translateX(0.75rem) !important",
        },
        "+ .MuiTypography-root": {
          fontSize: "0.875rem",
        },
      }),
    },
  },
  // Chips
  MuiChip: {
    defaultProps: {
      variant: "outlined",
      deleteIcon: chipIconRemove,
    },
    styleOverrides: {
      root: () => ({
        fontWeight: "600",
        backgroundColor: "white",
        borderColor: `${palette.grey?.[200]}`,
        color: `${palette.grey?.[600]}`,
        ".chip-icon-remove": {
          width: "1rem",
          height: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 0.2s ease-in-out",
        },
        "&.MuiChip-clickable:active": {
          boxShadow: customShadows.xs.focus,
        },
      }),
      sizeMedium: () => ({
        height: "28px",
        fontSize: "0.875rem",
      }),
      sizeSmall: () => ({
        height: "20px",
        fontSize: "0.75rem",
      }),
      labelMedium: {
        padding: "0.375rem 0.75rem",
      },
      labelSmall: {
        padding: "0.375rem 0.75rem",
      },

      colorPrimary: {
        backgroundColor: `${palette.primary?.[50]}`,
        borderColor: `${palette.primary?.[200]}`,
        color: `${palette.primary?.[600]}`,
        "&.MuiChip-clickable:active": {
          boxShadow: customShadows.xs.primaryFocus,
        },
      },
      colorSecondary: {
        backgroundColor: `${palette.secondary?.[50]}`,
        borderColor: `${palette.secondary?.[200]}`,
        color: `${palette.secondary?.[600]}`,
        "&.MuiChip-clickable:active": {
          boxShadow: customShadows.xs.secondaryFocus,
        },
      },
      colorSuccess: {
        backgroundColor: `${palette.success?.[50]}`,
        borderColor: `${palette.success?.[200]}`,
        color: `${palette.success?.[600]}`,
        "&.MuiChip-clickable:active": {
          boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.success?.[300]}, 0 0 0 4px ${palette.success?.[200]}`,
        },
      },
      colorWarning: {
        backgroundColor: `${palette.warning?.[50]}`,
        borderColor: `${palette.warning?.[200]}`,
        color: `${palette.warning?.[600]}`,
        "&.MuiChip-clickable:active": {
          boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.warning?.[300]}, 0 0 0 4px ${palette.warning?.[200]}`,
        },
      },
      colorError: {
        backgroundColor: `${palette.error?.[50]}`,
        borderColor: `${palette.error?.[200]}`,
        color: `${palette.error?.[600]}`,
        "&.MuiChip-clickable:active": {
          boxShadow: customShadows.xs.errorFocus,
        },
      },
      colorInfo: {
        backgroundColor: `${palette.info?.[50]}`,
        borderColor: `${palette.info?.[200]}`,
        color: `${palette.info?.[600]}`,
        "&.MuiChip-clickable:active": {
          boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.info?.[300]}, 0 0 0 4px ${palette.info?.[200]}`,
        },
      },
    },
  },

  // Divider
  MuiDivider: {
    styleOverrides: {
      root: () => ({
        borderColor: palette.grey?.[200],
        borderBottomWidth: "1px",
        "&:before, &:after": {
          borderTop: `1px solid ${palette.grey?.[200]}`,
        },
        ".MuiDivider-wrapper": {
          paddingLeft: "0.625rem",
          paddingRight: "0.625rem",
        },
      }),
    },
  },

  // Drawer
  MuiDrawer: {
    defaultProps: {
      PaperProps: {
        elevation: 6,
      },
    },
    styleOverrides: {
      root: () => ({
        ".MuiPaper-root": {
          height: "auto",
          borderRadius: radius["2xl"],
          minWidth: "25rem",
          maxWidth: "33rem",
          overflow: "visible",
          transformStyle: "preserve-3d",
        },
        ".MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
      }),
      paperAnchorRight: () => ({
        top: "0.5rem",
        right: "0.5rem",
        bottom: "0.5rem",
      }),
      paperAnchorLeft: () => ({
        top: "0.5rem",
        left: "0.5rem",
        bottom: "0.5rem",
      }),
    },
  },

  // SvgIcon
  MuiSvgIcon: {
    styleOverrides: {
      root: () => ({
        "path" : {
          fill: "currentColor",
        },
      }),
    },
  },

  // Icon button
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
        color: `${palette.grey?.[600]}`,
        ":hover": {
          backgroundColor: `${palette.grey?.[100]}`,
          color: `${palette.grey?.[900]}`,
        },
        ":focus": {
          boxShadow: customShadows.xs.focus,
        },
        ":disabled": {
          color: `${palette.grey?.[700]}`,
        },
      },

      colorSecondary: {
        boxShadow: customShadows.xs.base,
        color: `${palette.grey?.[600]}`,
        backgroundColor: "white",
        ":hover": {
          backgroundColor: `${palette.grey?.[100]}`,
          color: `${palette.grey?.[900]}`,
        },
        ":focus": {
          boxShadow: customShadows.xs.focus,
        },
        ":disabled": {
          boxShadow: customShadows.xs.base,
        },
      },

      colorPrimary: {
        color: `${palette.primary?.[500]}`,
        ":hover": {
          backgroundColor: `${palette.primary?.[50]}`,
        },
        ":focus": {
          boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.primary?.[300]}, 0 0 0 4px ${palette.primary?.[200]}`,
        },
        ":disabled": {
          color: `${palette.primary?.[500]}`,
        },
      },

      colorError: {
        ":hover": {
          backgroundColor: `${palette.error?.[50]}`,
        },
        ":focus": {
          boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.error?.[300]}, 0 0 0 4px ${palette.error?.[200]}`,
        },
        ":disabled": {
          color: `${palette.error?.[500]}`,
        },
      },

      colorInfo: {
        ":hover": {
          backgroundColor: `${palette.info?.[50]}`,
        },
        ":focus": {
          boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.info?.[300]}, 0 0 0 4px ${palette.info?.[200]}`,
        },
        ":disabled": {
          color: `${palette.info?.[500]}`,
        },
      },

      colorSuccess: {
        ":hover": {
          backgroundColor: `${palette.success?.[50]}`,
        },
        ":focus": {
          boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.success?.[300]}, 0 0 0 4px ${palette.success?.[200]}`,
        },
        ":disabled": {
          color: `${palette.success?.[500]}`,
        },
      },

      colorWarning: {
        ":hover": {
          backgroundColor: `${palette.warning?.[50]}`,
        },
        ":focus": {
          boxShadow: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.warning?.[300]}, 0 0 0 4px ${palette.warning?.[200]}`,
        },
        ":disabled": {
          color: `${palette.warning?.[500]}`,
        },
      },

      sizeSmall: () => ({
        width: theme.spacing(8),
        height: theme.spacing(8),
        borderRadius: radius.sm,
        "svg": {
          fontSize: "1rem",
        }
      }),
      sizeMedium: () => ({
        width: theme.spacing(10),
        height: theme.spacing(10),
        borderRadius: radius.md,
        "svg": {
        fontSize: "1.25rem",
        }
      }),
      sizeLarge: () => ({
        width: theme.spacing(12),
        height: theme.spacing(12),
        borderRadius: radius.lg,
      }),
    }
  }
}

export default components
