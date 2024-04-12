import { Components, Theme } from "@mui/material"
import { customShadows } from "../shadows"
import { palette } from "../index"
import { radioButtonIcon } from "../utils/radioButton"

const Styles: Components<Omit<Theme, "components">> = {
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
}

export default Styles
