import { Components, Theme } from "@mui/material"
import { palette } from "../index"

const Styles: Components<Omit<Theme, "components">> = {
  MuiTimelineSeparator: {
    styleOverrides: {
      root: () => ({
        ".MuiAvatar-root": {
          marginBottom: ".25rem",
          marginTop: ".25rem",
        },
      }),
    },
  },
  MuiTimelineConnector: {
    styleOverrides: {
      root: () => ({
        backgroundColor: `${palette.grey?.[200]}`,
      }),
    },
  },
}

export default Styles
