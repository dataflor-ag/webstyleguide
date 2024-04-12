import { Components, Theme } from "@mui/material"
import { palette } from ".."
import { radius } from "../shape"
import { customShadows } from "../shadows"
import { checkboxIcon, checkboxIconIndeterminate } from "../utils/checkbox"

const Styles: Components<Omit<Theme, "components">> = {
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
}

export default Styles
