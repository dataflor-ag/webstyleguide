import { Components, Theme } from "@mui/material"

const styles: Components<Omit<Theme, "components">> = {
  MuiGrid: {
    defaultProps: {
      spacing: 6,
    },
  },
}

export default styles
