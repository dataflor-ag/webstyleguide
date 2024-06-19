import React from "react"
import { styled } from "@mui/material"

interface ActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  label?: string;
}

const ActionBarRoot = styled("div", {
  name: "MuiActionBar",
  slot: "root",
})<ActionBarProps>(({ theme, count }) => ({
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: theme.palette.mode === "light" ? theme.palette.grey[900] : theme.palette.grey[300],
  color: "white",
  boxShadow:
    theme.palette.mode === "light"
      ? `0 24px 48px -12px rgba(0,0,0,0.15), inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${theme.palette.grey?.[900]}`
      : "0 24px 48px -12px rgba(0,0,0,0.40), 0 0 0 1px rgb(255,255,255, 0.1)",
  padding: theme.spacing(0, 1, 0, 4),
  height: theme.spacing(10),
  borderRadius: theme.spacing(5),
  gap: "0.5rem",
  fontSize: ".875rem",
  backgroundImage:
    theme.palette.mode === "light"
      ? "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.00) 100%)"
      : "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.06) 100%)",
  transition: theme.transitions.create(["all"]),
  willChange: "transform",
  position: "fixed",
  bottom: "1.5rem",
  left: "50%",
  ...(count && count > 0
    ? {
        visibility: "visible",
        opacity: 1,
        transform: "translateX(-50%) translateY(0) scale(1)",
        pointerEvents: "all",
      }
    : {
        opacity: 0,
        visibility: "hidden",
        transform: "translateX(-50%) translateY(12px) scale(0.95)",
        pointerEvents: "none",
      }),
}))

const ActionBarLabel = styled("div", {
  name: "MuiActionBar",
  slot: "label",
})(() => ({
  whiteSpace: "nowrap",
  opacity: 0.6,
}))

const ActionBarCountGroup = styled("div", {
  name: "MuiActionBar",
  slot: "label",
})(() => ({
  marginRight: "0.5rem",
  display: "flex",
  gap: "0.25rem"
}))

const ActionBarCount = styled("div", {
  name: "MuiActionBar",
  slot: "count",
})(() => ({
  position: "relative",
  height: "24px",
  "> div": {
    display: "grid",
    gridTemplateColumns: "1fr",
  }
}))

const ActionBarNumber = styled("div", {
  name: "MuiActionBar",
  slot: "number",
})(() => ({
  gridRowStart: 1,
  gridColumnStart: 1,
  transition: "transform 300ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 300ms cubic-bezier(0.22, 0.61, 0.36, 1)",
  minWidth: "1rem",
  textAlign: "center",
}))

export const ActionBar = React.forwardRef<HTMLDivElement, ActionBarProps>(
  (props, ref) => {
    const { label, children, count = 0 } = props

    return (
      <ActionBarRoot ref={ref} count={count}>
        <ActionBarCountGroup>
          <ActionBarCount>
            <ActionBarNumber>{count}</ActionBarNumber>
          </ActionBarCount>
          <ActionBarLabel>{label}</ActionBarLabel>
        </ActionBarCountGroup>
        {children}
      </ActionBarRoot>
    )
  }
)