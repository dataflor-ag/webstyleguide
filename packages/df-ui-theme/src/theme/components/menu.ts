import { Components, Theme } from "@mui/material"
import { radius } from "../shape"
import theme, { palette } from "../index"

const Styles: Components<Omit<Theme, "components">> = {
  MuiMenu: {
    defaultProps: {
      autoFocus: false,
      elevation: 4,
    },
    styleOverrides: {
      root: () => ({
        ".MuiPaper-root": {
          borderRadius: radius.md,
          marginTop: theme.spacing(1),
          minWidth: "10rem",
          "&.select-dropdown": {
            ".MuiMenuItem-root": {
              fontSize: "1rem",
            },
          },
        },
        ".MuiList-root": {
          padding: theme.spacing(1),
          display: "flex",
          flexDirection: "column",
          gap: "1px",
        },
      }),
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: () => ({
        borderRadius: radius.sm,
        fontSize: "0.875rem",
        fontWeight: "500",
        color: `${palette.grey?.[900]}`,
        transition: "all 0.2s ease-in-out",
        padding: theme.spacing(0, 2),
        height: "2.5rem",
        "&:hover": {
          backgroundColor: `${palette.grey?.[50]}`,
        },
        "&.Mui-selected": {
          backgroundColor: `${palette.grey?.[100]}`,
          "&:hover": {
            backgroundColor: `${palette.grey?.[100]}`,
          },
        },
        "&.MuiMenuItem-divider": {
          border: "0 none",
          marginBottom: "0.5rem",
          "&:after": {
            content: '""',
            display: "block",
            width: "calc(100% + 0.5rem)",
            height: "1px",
            backgroundColor: palette.grey?.[200],
            position: "absolute",
            bottom: "-0.25rem",
            left: "-0.25rem",
          },
        },
      }),
    },
  },
}

export default Styles
