import React from "react"
import { styled } from "@mui/material"

interface DashboardProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode
}

const DashboardRoot = styled("div", {
  name: "MuiDashboard",
  slot: "root",
})<DashboardProps>(( ) => ({
  display: "flex",
  flexDirection: "row",
  height: "100vh",
}))

export const Dashboard = React.forwardRef<HTMLDivElement, DashboardProps>((props, ref) => {
  const { children } = props
  return (
    <DashboardRoot ref={ref}>
        { children }
    </DashboardRoot>
  )
})