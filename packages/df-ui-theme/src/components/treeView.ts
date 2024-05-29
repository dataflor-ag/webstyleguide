import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import Icon from "@dataflor-ag/df-ui-icons"
import { radius } from "../tokens/shape"
import { getShadow } from "../utils/getShadows"
// import chevronDown from "../../../df-ui-icons/lib/icons/chevronDown"
// import chevronRight from "../../../df-ui-icons/lib/icons/chevronRight"

export const getTreeView = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    MuiSimpleTreeView: {
      defaultProps: {
        slots: {
          expandIcon: Icon.chevronRight,
          collapseIcon: Icon.chevronDown,
        },
      },
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          ".MuiTreeItem-root": {
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            ".MuiCollapse-root": {
              position: "relative",
              borderLeft: `1px solid ${palette.grey[200]}`,
              marginLeft: "1.25rem",
              ".MuiCollapse-wrapperInner": {
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              },
            },
            ".MuiTreeItem-content": {
              height: theme.spacing(10),
              borderRadius: radius.md,
              padding: theme.spacing(0, 3),
              gap: "0.5rem",
              transition: "all 0.2s ease-in-out",
              ".MuiTreeItem-label": {
                fontWeight: "500",
                color: palette.grey[700],
              },
              ".MuiTreeItem-iconContainer":{
                color: palette.grey[400],
                svg: {
                  fontSize: "1rem",
                }
              },
              "&.Mui-focused": {
                backgroundColor: "rgba(255,255,255,0)",
                boxShadow: getShadow(palette.mode).xs.focus,
              },
              "&.Mui-disabled": {
                opacity: 0.4,
                pointerEvents: "none",
              },
              "&.Mui-selected": {
                color: palette.grey[900],
                backgroundColor: isLightMode ? palette.surface[0] : "rgba(255,255,255,0.04)",
                boxShadow: getShadow(palette.mode).xs.base,
                "&:hover": {
                  backgroundColor: isLightMode
                    ? palette.surface[0]
                    : "rgba(255,255,255,0.06)",
                },
                "&.Mui-focused": {
                  boxShadow: getShadow(palette.mode).xs.focus,
                },
              },
              "&:hover": {
                backgroundColor: isLightMode
                  ? "rgba(0,0,0,0.03)"
                  : "rgba(255,255,255,0.06)",
              },
            },
          },
        }
      }
    }
  }
}