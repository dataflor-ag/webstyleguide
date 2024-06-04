import React from "react"
import { styled } from "@mui/material/styles"

interface ActionBarItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  shortcut?: string,
  // children?: React.ReactNode;
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
  // backgroundColor: "pink",
  borderRadius: theme.spacing(5),
  overflow: "hidden",
  padding: theme.spacing(0, 2),
  height: theme.spacing(8),
  minWidth: "5rem",
  textAlign: "center",
  cursor: "pointer",
  appearance: "none",
  textDecoration: "none",
  // background
}))

const ActionBarItemShortcut = styled("div", {
  name: "MuiActionBarItem",
  slot: "shortcut",
})(({ theme }) => ({
  backgroundColor: theme.palette.grey[700],
  border: `1px solid ${theme.palette.grey[600]}`,
  borderRadius: theme.spacing(5),
  padding: theme.spacing(0, 3)
}))

export const ActionBarItem = React.forwardRef<HTMLDivElement, ActionBarItemProps>(
  (props, ref) => {
    const { children, shortcut } = props
    return (
      <ActionBarItemRoot ref={ref}>
        {children}

        {shortcut && <ActionBarItemShortcut>{shortcut}</ActionBarItemShortcut>}
      </ActionBarItemRoot>
    )
  })