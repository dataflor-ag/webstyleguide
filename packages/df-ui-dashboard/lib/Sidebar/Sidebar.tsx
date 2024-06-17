import React, { useState } from "react"
import { styled } from "@mui/material"
import Icon from "@dataflor-ag/df-ui-icons"

interface SidebarRootsProps {
  minimize?: boolean
}

interface SidebarProps extends React.HtmlHTMLAttributes<HTMLDivElement>, SidebarRootsProps{
  logo: string
  minimizeLogo: string

  children?: React.ReactNode
}

const SidebarRoot = styled("div", {
  name: "MuiSidebar",
  slot: "root",
})<SidebarRootsProps>(({ theme, minimize = false }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: minimize ? "100px" : "312px",
  backgroundColor: theme.palette.grey[50],
  borderRight: `1px solid ${theme.palette.grey[200]}`,
  flexShrink: 0,
  transition: "all 0.2s ease-in-out",
  willChange: "width"
}))

const SidebarHeader = styled("div", {
  name: "MuiSidebar",
  slot: "header",
})(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(6),
  height: theme.spacing(22),
  maxHeight: "150px",

  "> img": {
    width: "auto",
    maxWidth: "100%"
  },
}))

const SidebarToggle = styled("button", {
  name: "MuiSidebar",
  slot: "toggle",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateX(50%) translateY(-50%)",
  borderRadius: "9999px",
  border: `1px solid ${theme.palette.grey[200]}`,
  height: theme.spacing(6),
  width: theme.spacing(6),
  cursor: "pointer",
  zIndex: "1",
  
  "> svg": {
    fontSize: "1rem"
  }
  
}))

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  const { children, logo, minimizeLogo,  minimize = false } = props

  const [_minimize, setMinimize] = useState(minimize)
  function toggleMinimize() {
    setMinimize(!_minimize)
  }

  return (
    <SidebarRoot ref={ref} minimize={_minimize}>
      <SidebarHeader>
        <img src={_minimize ? minimizeLogo: logo} />
        <SidebarToggle onClick={toggleMinimize}>
          <Icon.chevronRight />
        </SidebarToggle>
      </SidebarHeader>

      { children }

      

    </SidebarRoot>
  )
})