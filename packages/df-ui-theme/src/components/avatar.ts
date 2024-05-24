import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"

export const getAvatars = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    MuiAvatar: {
      styleOverrides: {
        root: () => ({
          backgroundImage: isLightMode
            ? `linear-gradient(180deg, ${palette.grey?.[100]} 0%, ${palette.grey?.[200]} 100%)`
            : `linear-gradient(180deg, ${palette.grey?.[100]} 0%, ${palette.grey?.[50]} 100%)`,
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
}
