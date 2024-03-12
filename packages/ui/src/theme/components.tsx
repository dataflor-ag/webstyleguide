import { Components, Theme } from "@mui/material"

const components: Components<Omit<Theme, "components">> = {
  // Button
  MuiButtonBase: {
    defaultProps: {
      color: "primary",
      disableRipple: true,
    },
  },
  MuiButton: {
    defaultProps: {
      variant: "contained",
      disableElevation: true,
    },
    styleOverrides: {
      root: () => ({
        fontWeight: "500",
        borderRadius: 8,
      }),
      containedPrimary: {
        color: "white",
      },
    },
  },
}

export default components
