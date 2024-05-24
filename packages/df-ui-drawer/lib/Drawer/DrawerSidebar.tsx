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
  justifyContent: "flex-start",
  backgroundColor: theme.palette.grey[50],
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  padding: "1.25rem 1rem",
  paddingRight: "3rem",
  transform: "translateX(0) translateZ(-10px)",
  marginLeft: "-4.5rem",
  borderRadius: "inherit",
  zIndex: "-1",
  boxShadow: `0 0 0 1px ${theme.palette.grey[200]}`,
  "> div": {
    justifyContent: "center",
    display: "flex",
    width: "2.5rem",
  },
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
