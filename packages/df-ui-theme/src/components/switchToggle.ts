import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { getShadow } from "../utils/getShadows"

export const getSwitchToggle = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
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
                boxShadow: getShadow(palette.mode).xs.focus,
              },
            },
          },
          ".MuiSwitch-thumb": {
            width: "1rem",
            height: "1rem",
            backgroundColor: palette.surface[0],
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
              "&:after":{
                backgroundColor: isLightMode ? theme.palette.grey?.[200] : "transparent",
              },
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
                  backgroundColor: isLightMode ? theme.palette.grey?.[200] : "transparent",
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
              boxShadow: getShadow(palette.mode).xs.secondary,
              "::after": {
                content: '""',
                position: "absolute",
                borderRadius: "inherit",
                inset: "0px",
                transition: "all 0.2s ease-in-out",
                background:
                  isLightMode
                    ? "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.00) 100%)"
                    : "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)" ,
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
  }
}
