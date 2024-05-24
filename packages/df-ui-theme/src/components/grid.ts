import type { ComponentStyles } from "../types/Components"

export const getGrid = (): ComponentStyles => {
  return {
    MuiGrid: {
      defaultProps: {
        spacing: 6,
      },
    },
  }
}
