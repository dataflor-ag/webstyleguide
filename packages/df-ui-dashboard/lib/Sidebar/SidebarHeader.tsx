import React from "react"
import { styled } from "@mui/material"

interface SidebarHeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode
  logo?: string
}

const SidebarHeaderRoot = styled("div", {
  name: "MuiSidebarHeader",
  slot: "root",
})<SidebarHeaderProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "pink",
  padding: theme.spacing(4),
  maxHeight: "150px"
}))

export const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>((props, ref) => {
  const { children, logo } = props
  return (
    <SidebarHeaderRoot ref={ref}>
      {logo && <div>
        <img src={logo}></img>
      </div>}
      <div>
        { children }
      </div>
    </SidebarHeaderRoot>
  )
})