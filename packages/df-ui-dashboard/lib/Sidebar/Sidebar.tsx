import React, { useState } from "react"
import { styled } from "@mui/material"
import Icon from "@dataflor-ag/df-ui-icons"

interface SidebarRootsProps {
  minimize?: boolean
}

interface SidebarToggleProps extends SidebarRootsProps {}

interface SidebarProps extends React.HtmlHTMLAttributes<HTMLDivElement>, SidebarRootsProps{
  logo: string
  minimizeLogo: string

  children?: React.ReactNode
}

const SidebarRoot = styled("div", {
  name: "MuiSidebar",
  slot: "root",
})<SidebarRootsProps>(({ theme, minimize }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: minimize ? "100px" : "312px",
  backgroundColor: theme.palette.grey[50],
  borderRight: `1px solid ${theme.palette.grey[200]}`,
  flexShrink: 0,
  transition: "all 0.2s ease-in-out",
  willChange: "width",

  ".MuiMenuItem-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  ".MuiListItemIcon-root": {
    margin: 0,
    minWidth: "0 !important",
    
    ".MuiSvgIcon-root": {
      margin: 0,
    }
  },

  ".MuiListItemText-root": {
    display: minimize && "none"
  }
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
})<SidebarToggleProps>(({ theme, minimize }) => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isLightMode ? theme.palette.common.white: theme.palette.common.black,
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
      fontSize: "1rem",
      transition: "transform .4s ease-in-out",
      willChange: "transform",
      transform: minimize ? "rotate(180deg)" : "rotate(0)" 
    }
  }
})

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  const { children, logo, minimizeLogo,  minimize = true } = props

  const [_minimize, setMinimize] = useState(minimize)
  function toggleMinimize() {
    setMinimize(!_minimize)
  }

  return (
    <SidebarRoot ref={ref} minimize={_minimize}>
      <SidebarHeader>
        <img src={_minimize ? minimizeLogo: logo} />
        <SidebarToggle onClick={toggleMinimize} minimize={_minimize}>
          <Icon.chevronRight />
        </SidebarToggle>
      </SidebarHeader>

      { children }

      

    </SidebarRoot>
  )
})