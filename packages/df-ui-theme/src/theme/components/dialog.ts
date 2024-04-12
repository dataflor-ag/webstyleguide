import { Components, Theme } from "@mui/material"
import { radius } from "../shape"

const Styles: Components<Omit<Theme, "components">> = {
  MuiDialog: {
    defaultProps: {
      PaperProps: {
        elevation: 6,
      },
    },
    styleOverrides: {
      root: () => ({
        ".MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
        ".MuiDialog-paper": {
          borderRadius: radius["2xl"],
        },
      }),
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: () => ({
        padding: "1.25rem",
        fontSize: "1rem",
      }),
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: () => ({
        padding: "1.25rem",
      }),
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: () => ({
        padding: "1rem 1.25rem",
        gap: "0.75rem",
        ">*": {
          margin: "0 !important",
        },
      }),
    },
  },
}

export default Styles
