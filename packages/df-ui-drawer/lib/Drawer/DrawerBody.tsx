import React from "react"
import { styled } from "@mui/material/styles"

interface DrawerBodyProps {
  children?: React.ReactNode
}

const DrawerBodyRoot = styled("div", {
  name: "MuiDrawerBody",
  slot: "root",
})(() => ({
  padding: "1.5rem",
  flex: "1 auto",
  overflowY: "auto",
}))

export const DrawerBody = React.forwardRef<HTMLDivElement, DrawerBodyProps>(
  (props, ref) => (
    <DrawerBodyRoot ref={ref}>
      {props.children && <div>{props.children}</div>}
    </DrawerBodyRoot>
  )
)

export default DrawerBody
