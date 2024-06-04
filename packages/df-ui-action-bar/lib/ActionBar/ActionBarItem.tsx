import React from "react"
import { styled } from "@mui/material/styles"

interface ActionBarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  shortcut?: string,
  // children?: React.ReactNode;
}

const ActionBarItemRoot = styled("div", {
  name: "MuiActionBarItem",
  slot: "root",
})(({ theme }) => ({
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  backgroundColor: "pink",
  borderRadius: theme.spacing(5),
  overflow: "hidden",
  padding: theme.spacing(0, 2),
  height: theme.spacing(8),
  minWidth: "5rem",
  textAlign: "center"
}))

const ActionBarItemShortcut = styled("div", {
  name: "MuiActionBarItem",
  slot: "shortcut",
})(({ theme }) => ({
  backgroundColor: "purple",
  borderRadius: theme.spacing(5),
  padding: theme.spacing(0, 4)
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