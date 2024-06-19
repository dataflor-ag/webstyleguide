import React from "react"
import { styled } from "@mui/material"

interface ContentBodyProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode
  noPadding?: boolean
}

const ContentBodyRoot = styled("div", {
  name: "MuiContentBody",
  slot: "root",
})<ContentBodyProps>(( { theme, noPadding = false  }) => ({
  position: "relative",
  padding: noPadding ? "0" : theme.spacing(8),
  height: "100%",
  overflowY: "auto",
}))

export const ContentBody = React.forwardRef<HTMLDivElement, ContentBodyProps>((props, ref) => {
  const { children } = props
  return (
    <ContentBodyRoot ref={ref}>
      { children }
    </ContentBodyRoot>
  )
})