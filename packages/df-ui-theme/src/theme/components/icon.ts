import { Components, Theme } from "@mui/material"

const Styles: Components<Omit<Theme, "components">> = {
  MuiSvgIcon: {
    styleOverrides: {
      root: () => ({
        path: {
          fill: "currentColor",
        },
      }),
    },
  },
}

export default Styles
