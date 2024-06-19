import React from "react"
import { Typography, styled } from "@mui/material"

interface SubmenuProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode
  title?: string
  subtitle?: string
}

const SubmenuRoot = styled("div", {
  name: "MuiSubmenu",
  slot: "root",
})<SubmenuProps>(({ theme }) => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: isLightMode ? theme.palette.grey[50] : theme.palette.background.default,
    width: "16.5rem",
    flexShrink: 0,
    transition: "all 0.25s cubic-bezier(0.22, 0.61, 0.36, 1)",
    position: "relative",
    "&:before":{
      content: "''",
      width: "1px",
      height: "100%",
      top: 0,
      left: 0,
      bottom: 0,
      position: "absolute",
      backgroundColor: theme.palette.grey[200],
    },
  }
})

const SubmenuHeader = styled("div", {
  name: "MuiSubmenu",
  slot: "header",
})<SubmenuProps>(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(0, 6),
  height: "5rem",
  flexShrink: 0,

  "> .MuiTypography-root": {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    "+ *": {
      color: theme.palette.grey[600]
    },
  },

  ":after": {
    content: "''",
    display: "block",
    position: "absolute",
    backgroundColor: theme.palette.grey[200],
    height: "1px",
    bottom: 0,
    left: 0,
    right: 0,
  }
}))

const SubmenuBody = styled("div", {
  name: "MuiSubmenu",
  slot: "body",
})<SubmenuProps>(( { theme }) => {
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
      left: "1px",
      right: "0",
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
      left: "1px",
      right: "0",
      pointerEvents: "none",
      zIndex: "10",
    },
  }
})

const SubmenuBodyInner = styled("div", {
  name: "MuiSubmenu",
  slot: "body",
})<SubmenuProps>(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(3, 0),
  height: "100%",
  overflowY: "auto",
}))

export const Submenu = React.forwardRef<HTMLDivElement, SubmenuProps>((props, ref) => {
  const { children, title, subtitle } = props
  return (
    <SubmenuRoot ref={ref}>
      <SubmenuHeader>
        <Typography variant="h5">
          { title }
        </Typography>
        <Typography variant="subtitle2">
          { subtitle }
        </Typography>
      </SubmenuHeader>
      <SubmenuBody>
        <SubmenuBodyInner>
          { children }
        </SubmenuBodyInner>
      </SubmenuBody>
    </SubmenuRoot>
  )
})