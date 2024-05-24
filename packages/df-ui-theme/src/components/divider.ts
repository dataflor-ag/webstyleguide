import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"

export const getDividers = (theme: Theme): ComponentStyles => {
  const { palette } = theme

  return {
    MuiDivider: {
      styleOverrides: {
        root: () => ({
          borderColor: palette.grey?.[200],
          borderBottomWidth: "1px",
          "&:before, &:after": {
            borderTop: `1px solid ${palette.grey?.[200]}`,
          },
          ".MuiDivider-wrapper": {
            paddingLeft: "0.625rem",
            paddingRight: "0.625rem",
          },
        }),
      },
    },
  }
}
