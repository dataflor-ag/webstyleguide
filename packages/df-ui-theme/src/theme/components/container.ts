import { Components, Theme } from "@mui/material"

const Styles: Components<Omit<Theme, "components">> = {
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

export default Styles
