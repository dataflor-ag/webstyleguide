import React from "react"
import { styled } from "@mui/material/styles"

interface DrawerSidebarProps {
  children?: React.ReactNode
}

const DrawerSidebarRoot = styled("div", {
  name: "MuiDrawerSidebar",
  slot: "root",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.grey[100],
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  padding: "1.25rem 1rem",
  paddingRight: "3rem",
  width: "6.5rem",
  transform: "translateX(-4.5rem) translateZ(-10px)",
  borderRadius: "inherit",
  zIndex: "-1",
  boxShadow: `0 0 0 1px ${theme.palette.grey[200]}`,
}))

export const DrawerSidebar = React.forwardRef<
  HTMLDivElement,
  DrawerSidebarProps
>((props, ref) => (
  <DrawerSidebarRoot ref={ref}>
    {props.children && <div>{props.children}</div>}
  </DrawerSidebarRoot>
))

export default DrawerSidebar
