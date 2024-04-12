import { Components, Theme } from "@mui/material"
import palette from "../palette"

const Styles: Components<Omit<Theme, "components">> = {
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

export default Styles
