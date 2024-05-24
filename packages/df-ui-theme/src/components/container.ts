import type { ComponentStyles } from "../types/Components"

export const getContainer = (): ComponentStyles => {
  return {
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
  }
}
