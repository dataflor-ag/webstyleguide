import React from "react"
import { styled } from "@mui/material"

interface SidebarBodyProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode
}

const SidebarBodyRoot = styled("div", {
  name: "MuiSidebarBody",
  slot: "root",
})<SidebarBodyProps>(( { theme }) => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    position: "relative",
    height: "100%",
    overflow: "hidden",
    "&:before": {
      content: '""',
      position: "absolute",
      top: "0",
      background: isLightMode 
        ? `linear-gradient(to top, transparent, ${theme.palette.grey[50]})`
        : `linear-gradient(to top, transparent, ${theme.palette.background.default})`,
      height: "0.75rem",
      width: "100%",
      pointerEvents: "none",
      zIndex: "10",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      background: isLightMode 
        ? `linear-gradient(to bottom, transparent, ${theme.palette.grey[50]})`
        : `linear-gradient(to bottom, transparent, ${theme.palette.background.default})`,
      height: "0.75rem",
      width: "100%",
      pointerEvents: "none",
      zIndex: "10",
    },
  }
})

const SidebarBodyInner = styled("div", {
  name: "MuiSidebar",
  slot: "body",
})(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(3, 0),
  height: "100%",
  overflowY: "auto",
}))

export const SidebarBody = React.forwardRef<HTMLDivElement, SidebarBodyProps>((props, ref) => {
  const { children } = props
  return (
    <SidebarBodyRoot ref={ref}>
      <SidebarBodyInner>
        { children }
      </SidebarBodyInner>
    </SidebarBodyRoot>
  )
})