import type { ComponentStyles } from "../types/Components";

export const getIcon = (): ComponentStyles => {
  // const isLightMode = palette.mode === "light";

  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: () => ({
          path: {
            fill: "currentColor",
          },
        }),
      },
    },
  };
};
