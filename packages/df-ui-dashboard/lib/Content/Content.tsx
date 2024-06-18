import React from "react"
import { styled } from "@mui/material"

interface ContentProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode
  noPadding?: boolean
}

const ContentRoot = styled("div", {
  name: "MuiContent",
  slot: "root",
})<ContentProps>(( {theme, noPadding = false} ) => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"
  return {
    backgroundColor: isLightMode ? theme.palette.common.white : theme.palette.common.black,
    flexGrow: "1",
    padding: noPadding ? "0" : theme.spacing(6)
  }
})


export const Content = React.forwardRef<HTMLDivElement, ContentProps>((props, ref) => {
  const { children } = props
  return (
    <ContentRoot ref={ref}>
      { children }
    </ContentRoot>
  )
})