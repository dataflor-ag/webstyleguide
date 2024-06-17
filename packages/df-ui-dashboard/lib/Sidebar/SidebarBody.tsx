import React from "react"
import { styled } from "@mui/material"

interface SidebarBodyProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode
}

const SidebarBodyRoot = styled("div", {
  name: "MuiSidebarBody",
  slot: "root",
})<SidebarBodyProps>(( ) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "purple",
}))

export const SidebarBody = React.forwardRef<HTMLDivElement, SidebarBodyProps>((props, ref) => {
  const { children } = props
  return (
    <SidebarBodyRoot ref={ref}>
      <div>
        { children }
      </div>
    </SidebarBodyRoot>
  )
})