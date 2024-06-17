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
})<SubmenuProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  backgroundColor: theme.palette.grey[50],
  borderRight: `1px solid ${theme.palette.grey[200]}`,
  width: "264px",
  flexShrink: 0,
}))

const SubmenuHeader = styled("div", {
  name: "MuiSubmenu",
  slot: "header",
})<SubmenuProps>(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(0, 6),
  height: theme.spacing(22),

  "> .MuiTypography-root": {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },

  ":after": {
    content: "''",
    display: "block",
    position: "absolute",
    backgroundColor: theme.palette.grey[200],
    height: "1px",
    bottom: 0,
    left: theme.spacing(6),
    right: theme.spacing(6),
  }
}))

const SubmenuBody = styled("div", {
  name: "MuiSubmenu",
  slot: "body",
})<SubmenuProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(6),
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
        { children }
      </SubmenuBody>
    </SubmenuRoot>
  )
})