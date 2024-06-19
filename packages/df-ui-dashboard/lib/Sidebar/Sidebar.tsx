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
})<SidebarRootsProps>(({ theme, minimize }) => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

    return{
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: minimize ? "5rem" : "17rem",
    backgroundColor: isLightMode ? theme.palette.grey[50] : theme.palette.background.default,
    flexShrink: 0,
    transition: "all 0.25s cubic-bezier(0.22, 0.61, 0.36, 1)",
    willChange: "width",

    // "&:after":{
    //   content: "''",
    //   width: "1px",
    //   height: "100%",
    //   top: 0,
    //   right: 0,
    //   bottom: 0,
    //   position: "absolute",
    //   backgroundColor: theme.palette.grey[200],
    // },

    ".MuiListItemText-root": {
      display: minimize && "none"
    },

    ".MuiListItem-root": {
      padding: minimize && theme.spacing(0, 5),
    }
  }
})

const SidebarHeader = styled("div", {
  name: "MuiSidebar",
  slot: "header",
})(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: theme.spacing(5),
  height: "5rem",
  maxHeight: "5rem",
  flexShrink: 0,

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
    backgroundColor: isLightMode ? theme.palette.common.white: theme.palette.grey[100],
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateX(50%) translateY(-50%)",
    borderRadius: "50%",
    border: "0 none",
    height: theme.spacing(6),
    width: theme.spacing(6),
    cursor: "pointer",
    zIndex: "1",
    boxShadow: isLightMode 
      ? `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), 0 0 0 1px ${palette.grey?.[200]}`
      : `0 1px 3px 0 rgba(0,0,0,0.40), 0 1px 2px -1px rgba(0,0,0,0.50), 0 0 0 1px ${palette.grey?.[200]}`,
    
    "> svg": {
      fontSize: "1rem",
      transition: "transform 0.25s cubic-bezier(0.22, 0.61, 0.36, 1)",
      willChange: "transform",
      transform: minimize ? "rotateY(180deg)" : "rotateY(0)" 
    },

    "&:focus": {
      outline: "none",
      boxShadow: isLightMode 
        ? `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), 0 0 0 1px ${palette.grey?.[300]}, 0 0 0 4px ${palette.grey?.[200]}`
        : `0 1px 3px 0 rgba(0,0,0,0.40), 0 1px 2px -1px rgba(0,0,0,0.50), 0 0 0 1px ${palette.grey?.[300]}, 0 0 0 4px rgba(255,255,255, 0.1), 0 0 0 1px ${palette.grey?.[200]}`,
    },
  }
})

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
        <SidebarToggle onClick={toggleMinimize} minimize={_minimize}>
          <Icon.chevronRight />
        </SidebarToggle>
      </SidebarHeader>
      { children }
    </SidebarRoot>
  )
})