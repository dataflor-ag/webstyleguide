import { Components, Theme } from "@mui/material"
import { palette } from "../index"

const Styles: Components<Omit<Theme, "components">> = {
  MuiAvatar: {
    styleOverrides: {
      root: () => ({
        backgroundImage: `linear-gradient(180deg, ${palette.grey?.[100]} 0%, ${palette.grey?.[200]} 100%)`,
        backgroundColor: `${palette.grey?.[100]}`,
        color: `${palette.grey?.[600]}`,
        fontWeight: "600",
        fontSize: "1rem",
        width: "2.5rem",
        height: "2.5rem",
      }),
    },
  },
  MuiAvatarGroup: {
    defaultProps: {
      spacing: 12,
    },
  },
}

export default Styles
