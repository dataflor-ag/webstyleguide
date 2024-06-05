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
  gap: theme.spacing(2),
  backgroundColor: "transparent",
  border: "0 none",
  borderRadius: theme.spacing(5),
  overflow: "hidden",
  padding: theme.spacing(0, 2),
  height: theme.spacing(8),
  minWidth: "5rem",
  textAlign: "center",
  cursor: "pointer",
  appearance: "none",
  textDecoration: "none",

  "&:disabled": {
    opacity: 0.5,
    pointerEvents: "none",
    cursor: "default",
  }
}))

const ActionBarItemShortcut = styled("div", {
  name: "MuiActionBarItem",
  slot: "shortcut",
})(({ theme }) => ({
  backgroundColor: theme.palette.grey[700],
  color: theme.palette.grey[300],
  border: `1px solid ${theme.palette.grey[600]}`,
  borderRadius: theme.spacing(5),
  padding: theme.spacing(0, 2),
  fontSize: "0.75rem",
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