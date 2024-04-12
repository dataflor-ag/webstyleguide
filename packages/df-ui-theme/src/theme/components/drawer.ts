import { Components, Theme } from "@mui/material"
import { radius } from "../shape"

const Styles: Components<Omit<Theme, "components">> = {
  MuiDrawer: {
    defaultProps: {
      PaperProps: {
        elevation: 6,
      },
    },
    styleOverrides: {
      root: () => ({
        ".MuiPaper-root": {
          height: "auto",
          borderRadius: radius["2xl"],
          minWidth: "25rem",
          maxWidth: "33rem",
          overflow: "visible",
          transformStyle: "preserve-3d",
        },
        ".MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
      }),
      paperAnchorRight: () => ({
        top: "0.5rem",
        right: "0.5rem",
        bottom: "0.5rem",
      }),
      paperAnchorLeft: () => ({
        top: "0.5rem",
        left: "0.5rem",
        bottom: "0.5rem",
      }),
    },
  },
}

export default Styles
