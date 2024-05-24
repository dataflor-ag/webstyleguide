import type { Theme } from "@mui/material";
import type { ComponentStyles } from "../types/Components";

export const getProgress = (theme: Theme): ComponentStyles => {
  const { palette } = theme;
  // const isLightMode = palette.mode === "light";

  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: () => ({
          borderRadius: "2px",
          backgroundColor: `${palette.grey?.[200]}`,
        }),
        bar: {
          borderRadius: "2px",
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        thickness: 4,
        size: 48,
      },
      styleOverrides: {
        root: () => ({
          // backgroundColor: "pink",
          position: "relative",
          ":before": {
            content: '""',
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "block",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            border: `4px solid ${palette.grey?.[200]}`,
            borderRadius: "50%",
          },
        }),
        svg: {
          strokeLinecap: "round",
          position: "relative",
        },
        circle: {
          // vectorEffect: "non-scaling-stroke",
        },
      },
    },
  };
};
