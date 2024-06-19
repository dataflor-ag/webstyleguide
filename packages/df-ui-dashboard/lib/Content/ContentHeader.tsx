import React from "react"
import { styled } from "@mui/material"

interface ContentHeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode
}

const ContentHeaderRoot = styled("div", {
  name: "MuiContentHeader",
  slot: "root",
})<ContentHeaderProps>(( { theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(0, 5, 0, 8),
  height: "4.5rem",
  flexShrink: 0,

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

export const ContentHeader = React.forwardRef<HTMLDivElement, ContentHeaderProps>((props, ref) => {
  const { children } = props
  return (
    <ContentHeaderRoot ref={ref}>
      { children }
    </ContentHeaderRoot>
  )
})