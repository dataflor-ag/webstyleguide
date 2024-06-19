import React from "react"
import { styled } from "@mui/material"

interface ContentProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode
  noPadding?: boolean
}

const ContentRoot = styled("div", {
  name: "MuiContent",
  slot: "root",
})<ContentProps>(( {theme} ) => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"
  return {
    position: "relative",
    backgroundColor: isLightMode ? theme.palette.grey[50] : theme.palette.background.default,
    flexGrow: "1",
    transition: "all 0.25s cubic-bezier(0.22, 0.61, 0.36, 1)",
    padding: "0.5rem",
    paddingLeft: 0,
    display: "flex",
    zIndex: 10,
  }
})

const ContentCard = styled("div", {
  name: "MuiContentCard",
  slot: "root",
})<ContentProps>(( {theme, noPadding = true} ) => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"
  return {
    display: "flex",
    flexDirection: "column",
    backgroundColor: isLightMode ? theme.palette.common.white : theme.palette.grey[50],
    flexGrow: "1",
    padding: noPadding ? "0" : theme.spacing(8),
    borderRadius: "1rem",
    boxShadow: isLightMode 
      ? `0 4px 8px -2px rgba(0,0,0,0.10), 0 2px 4px 0 rgba(0,0,0,0.05), 0 0 0 1px ${palette.grey?.[200]}`
      : `0 4px 8px -2px rgba(0,0,0,0.25), 0 2px 4px 0 rgba(0,0,0,0.50), 0 0 0 1px ${palette.grey?.[200]}`,
  }
})


export const Content = React.forwardRef<HTMLDivElement, ContentProps>((props, ref) => {
  const { children } = props
  return (
    <ContentRoot ref={ref}>
      <ContentCard>
        { children }
      </ContentCard>
    </ContentRoot>
  )
})