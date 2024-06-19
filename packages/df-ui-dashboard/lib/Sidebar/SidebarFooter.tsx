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
  marginTop: "auto",
  padding: theme.spacing(8, 0, 4, 0),
  flexShrink: 0,
}))

export const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>((props, ref) => {
  const { children } = props
  return (
    <SidebarFooterRoot ref={ref}>
      { children }
    </SidebarFooterRoot>
  )
})