import type { ComponentStyles } from "../types/Components";

export const getContainer = (): ComponentStyles => {
  return {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          paddingLeft: "1.5rem !important",
          paddingRight: "1.5rem !important",
          [theme.breakpoints.down("xxl")]: {
            paddingLeft: "2rem !important",
            paddingRight: "2rem !important",
          },
        }),
      },
    },
  };
};
