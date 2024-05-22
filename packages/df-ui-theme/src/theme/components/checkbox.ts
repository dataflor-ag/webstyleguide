import type { Theme } from "@mui/material";
import type { ComponentStyles } from "../types/Components";
import { radius } from "../shape";
import { getShadow } from "../utils/getShadows";
import { checkboxIcon, checkboxIconIndeterminate } from "../icons/checkbox";

export const getCheckboxes = (theme: Theme): ComponentStyles => {
  const { palette } = theme;
  const isLightMode = palette.mode === "light";

  return {
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
            color: palette.surface[0],
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: "1.25rem",
            height: "1.25rem",
            borderRadius: radius.sm,
            boxShadow: getShadow(palette.mode).xs.base,
            backgroundColor: palette.surface[0],
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
              boxShadow: getShadow(palette.mode).xs.secondary,
              position: "relative",
              "::after": {
                content: '""',
                position: "absolute",
                borderRadius: "inherit",
                opacity: isLightMode ? "1" : "0",
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
                boxShadow: getShadow(palette.mode).xs.secondaryFocus,
              },
            },
          },
          "&.Mui-focusVisible": {
            ".checkbox-icon": {
              boxShadow: getShadow(palette.mode).xs.focus,
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
          ".checkbox-icon": {
            width: "1rem",
            height: "1rem",
            borderRadius: radius.xs,
          },
        }),
      },
    },
  };
};
