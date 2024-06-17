import React from "react"
import { styled } from "@mui/material"

interface ContentProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode
  noPadding?: boolean
}

const ContentRoot = styled("div", {
  name: "MuiContent",
  slot: "root",
})<ContentProps>(( {theme, noPadding = false} ) => ({
  backgroundColor: theme.palette.background.default,
  flexGrow: "1",
  padding: noPadding ? "0" : theme.spacing(6)
}))


export const Content = React.forwardRef<HTMLDivElement, ContentProps>((props, ref) => {
  const { children } = props
  return (
    <ContentRoot ref={ref}>
      { children }
    </ContentRoot>
  )
})