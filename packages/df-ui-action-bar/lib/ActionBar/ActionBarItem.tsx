import React from "react"
import { styled } from "@mui/material/styles"


type Shortcut = string | React.ReactNode | (string | React.ReactNode)[]

interface ActionBarItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  shortcut?: Shortcut,
  disabled?: boolean
}

const ActionBarItemRoot = styled("button", {
  name: "MuiActionBarItem",
  slot: "root",
})(({ theme }) => ({
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",
  backgroundColor: "transparent",
  border: "0 none",
  borderRadius: "50rem",
  padding: "0 0.375rem 0 0.875rem",
  height: theme.spacing(8),
  minWidth: "5rem",
  textAlign: "center",
  cursor: "pointer",
  appearance: "none",
  textDecoration: "none",
  position: "relative",
  fontWeight: "500",
  transition: "all 0.2s ease-in-out",
  "&:before": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "1px",
    height: "1rem",
    backgroundColor: theme.palette.mode === "light" ? `rgba(255,255,255,0.1)` : `rgba(0,0,0,0.1)`,
    left: 0,
    transition: "all 0.2s ease-in-out",
  },

  "&:disabled": {
    opacity: 0.4,
    pointerEvents: "none",
    cursor: "default",
  },
  "&:hover": {
    backgroundColor: theme.palette.mode === "light" ? `rgba(255,255,255,0.06)` : `rgba(0,0,0,0.06)`,
    "&:before":{
      opacity: 0,
    }
  },
}))

const ActionBarItemShortcut = styled("div", {
  name: "MuiActionBarItem",
  slot: "shortcut",
})(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? `rgba(255,255,255,0.06)` : `rgba(0,0,0,0.06)`,
  color: theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[300],
  border: `1px solid transparent`,
  borderColor: theme.palette.mode === "light" ? `rgba(255,255,255,0.1)` : `rgba(0,0,0,0.1)`,
  borderRadius: theme.spacing(5),
  padding: "0 0.375rem",
  fontSize: "0.625rem",
  fontWeight: "500",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  height: theme.spacing(6),
  minWidth: theme.spacing(6),
  "svg" : {
    fontSize: "inherit"
  }
}))

export const ActionBarItem = React.forwardRef<HTMLDivElement, ActionBarItemProps>(
  (props) => {
    const { children, shortcut, disabled = false } = props

    const shortcuts = Array.isArray(shortcut) ? [...shortcut] : [shortcut]

    return (
      <ActionBarItemRoot disabled={disabled}>
        {children}
        {shortcuts && shortcuts.map(item => (
          <ActionBarItemShortcut>{item}</ActionBarItemShortcut>
        ))}
      </ActionBarItemRoot>
    )
  })