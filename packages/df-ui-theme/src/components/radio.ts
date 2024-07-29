import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { getShadow } from "../utils/getShadows"
import { radioButtonIcon } from "../icons/radioButton"

export const getRadios = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    MuiRadio: {
      defaultProps: {
        size: "small",
        color: "secondary",
        disableRipple: true,
        icon: radioButtonIcon,
        checkedIcon: radioButtonIcon,
      },
      styleOverrides: {
        root: () => ({
          padding: "0.5rem",
          ".radio-button-icon": {
            color: palette.surface[0],
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: "1.25rem",
            height: "1.25rem",
            borderRadius: "50rem",
            boxShadow: getShadow(palette.mode).xs.base,
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
              boxShadow: getShadow(palette.mode).xs.secondary,
              position: "relative",
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
              span: {
                transform: "scale(1)",
                opacity: "1",
              },
            },
            "&.Mui-focusVisible": {
              ".radio-button-icon": {
                boxShadow: getShadow(palette.mode).xs.secondaryFocus,
              },
            },
          },
          "&.Mui-focusVisible": {
            ".radio-button-icon": {
              boxShadow: getShadow(palette.mode).xs.focus,
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
              boxShadow: getShadow(palette.mode).xs.base,
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
        colorSecondary: () => ({
          "&.Mui-checked": {
            ".radio-button-icon": {
              backgroundColor: `${palette.secondary?.[900]}`,
              boxShadow: getShadow(palette.mode).xs.secondary,
            
            },
          }
        }),
        colorPrimary: () => ({
          "&.Mui-checked": {
            ".radio-button-icon": {
          backgroundColor: `${palette.primary?.[500]}`,
          boxShadow: getShadow(palette.mode).xs.primary,   
            },
          }
        }),
      },
    },
  }
}
