import React from "react"
import { styled } from "@mui/material/styles"

interface DrawerHeaderProps {
  content: React.ReactNode
  children?: React.ReactNode
}

const DrawerHeaderRoot = styled("div", {
  name: "MuiDrawerHeader",
  slot: "root",
})(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  width: "100%",
  padding: "1rem 1.5rem",
  paddingRight: "0.75rem",
  height: "4rem",
}))

const DrawerHeaderContent = styled("div", {
  name: "MuiDrawerHeader",
  slot: "content",
})(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}))

export const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(
  (props, ref) => (
    <DrawerHeaderRoot ref={ref}>
      <DrawerHeaderContent>
        {props.content}
        {props.children && <div>{props.children}</div>}
      </DrawerHeaderContent>
    </DrawerHeaderRoot>
  )
)

export default DrawerHeader
