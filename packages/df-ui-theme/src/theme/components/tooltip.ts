import type { Theme } from "@mui/material";
import type { ComponentStyles } from "../types/Components";
import { radius } from "../shape";
// import { getShadow } from "../utils/getShadows";

export const getTooltips = (theme: Theme): ComponentStyles => {
  const { palette } = theme;
  // const isLightMode = palette.mode === "light";

  return {
    MuiTooltip: {
      defaultProps: {},
      styleOverrides: {
        tooltip: {
          backgroundColor: palette.grey?.[900],
          borderRadius: radius.md,
          fontWeight: 600,
          padding: "0.1875rem 0.75rem",
          color: palette.surface[0],
          "&.MuiTooltip-tooltipPlacement": {
            "&Bottom": {
              marginTop: "0.625rem !important",
            },
            "&Top": {
              marginBottom: "0.625rem !important",
            },
            "&Left": {
              marginRight: "0.625rem !important",
            },
            "&Right": {
              marginLeft: "0.625rem !important",
            },
          },
        },
      },
    },
  };
};
