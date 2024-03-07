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
  },
}

export default components
