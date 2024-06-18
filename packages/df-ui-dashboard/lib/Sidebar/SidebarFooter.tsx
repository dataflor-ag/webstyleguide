import React from "react"
import { styled } from "@mui/material"

interface SidebarFooterProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode
}

const SidebarFooterRoot = styled("div", {
  name: "MuiSidebarFooter",
  slot: "root",
})<SidebarFooterProps>(( { theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "auto",
  padding: theme.spacing(10, 6, 5, 6),

  ":before": {
    content: "''",
    display: "block",
    position: "absolute",
    backgroundColor: theme.palette.grey[200],
    height: "1px",
    top: theme.spacing(5),
    left: theme.spacing(6),
    right: theme.spacing(6),
  }
}))

export const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>((props, ref) => {
  const { children } = props
  return (
    <SidebarFooterRoot ref={ref}>
      { children }
    </SidebarFooterRoot>
  )
})