import { Components, Theme } from "@mui/material"
import { radius } from "../shape"
import theme from "../index"

const styles: Components<Omit<Theme, "components">> = {
  MuiPaper: {
    styleOverrides: {
      root: () => ({
        borderRadius: radius.xl,
      }),
    },
  },
  MuiCardMedia: {
    styleOverrides: {
      root: () => ({
        marginBottom: theme.spacing(5),
        borderRadius: radius.md,
      }),
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: () => ({
        padding: theme.spacing(6),
      }),
    },
  },
  MuiCardActionArea: {
    styleOverrides: {
      root: () => ({
        padding: theme.spacing(0),
      }),
    },
  },
}

export default styles
