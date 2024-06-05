import React from "react"
import { styled } from "@mui/material/styles"

interface ActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
}

const ActionBarRoot = styled("div", {
  name: "MuiActionBar",
  slot: "root",
})(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.getContrastText(theme.palette.grey[900]),
  boxShadow: theme.palette.mode === "light"
   ?  `0 24px 48px -12px rgba(0,0,0,0.15), inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${theme.palette.grey?.[900]}`
   : "0 24px 48px -12px rgba(0,0,0,0.40), 0 0 0 1px rgb(255,255,255)",
  padding: theme.spacing(0, 1, 0, 4),
  height: theme.spacing(10),
  borderRadius: theme.spacing(5),
  gap: "0.5rem",
  fontSize: ".875rem",
  backgroundImage: theme.palette.mode === "light"
   ? "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.00) 100%)"
   : "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)",
  position: "fixed",
  bottom: "0",
  left: "50%",
  transform: "translateX(-50%) translateY(-24px)",
}))

const ActionBarLabel = styled("div", {
  name: "MuiActionBar",
  slot: "label",
})(() => ({
  opacity: 0.6,
  marginRight: "0.5rem",
  whiteSpace: "nowrap"
}))

export const ActionBar = React.forwardRef<HTMLDivElement, ActionBarProps>(
  (props, ref) => {
    const { children, label } = props
    return (
      <ActionBarRoot ref={ref}>
        {label && <ActionBarLabel>{label}</ActionBarLabel>}
        {children}
      </ActionBarRoot>
    )
  })