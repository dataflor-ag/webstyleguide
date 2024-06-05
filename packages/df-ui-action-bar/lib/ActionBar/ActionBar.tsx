import React from "react"
import { styled } from "@mui/material/styles"

interface ActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number
}

const ActionBarRoot = styled("div", {
  name: "MuiActionBar",
  slot: "root",
})<ActionBarProps>(({ theme, count }) => ({
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

  transition: theme.transitions.create(["all"]),
  willChange: "transform",
  position: "fixed",
  bottom: "1.5rem",
  left: "50%",

  ...(count && count > 0 ? {
    visibility: "visible",
    opacity: 1,
    transform: "translateX(-50%) translateY(0) scale(1)",
    pointerEvents: "all",
  } : {
    opacity: 0,
    visibility: "hidden",
    transform: "translateX(-50%) translateY(12px) scale(0.98)",
    pointerEvents: "none",
  })
}))

const ActionBarLabel = styled("div", {
  name: "MuiActionBar",
  slot: "label",
})(() => ({
  opacity: 0.6,
  marginRight: "0.5rem",
  whiteSpace: "nowrap",
  transition: "transform 0.5s ease-in-out",
}))

export const ActionBar = React.forwardRef<HTMLDivElement, ActionBarProps>(
  (props, ref) => {
    const { children, count = 0 } = props

    return (
      <ActionBarRoot ref={ref} count={count}>
        <ActionBarLabel>{count} selected</ActionBarLabel>
        {children}
      </ActionBarRoot>
    )
  }
)