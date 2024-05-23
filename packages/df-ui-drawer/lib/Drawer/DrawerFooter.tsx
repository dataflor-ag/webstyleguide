import React from "react"
import { styled } from "@mui/material/styles"

interface DrawerFooterProps {
  children?: React.ReactNode
}

const DrawerFooterRoot = styled("div", {
  name: "MuiDrawerFooter",
  slot: "root",
})(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  width: "100%",
  padding: "1rem 1.25rem",
  height: "4.5rem",
}))

const DrawerFooterContent = styled("div", {
  name: "MuiDrawerFooter",
  slot: "root",
})(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}))

export const DrawerFooter = React.forwardRef<HTMLDivElement, DrawerFooterProps>(
  (props, ref) => (
    <DrawerFooterRoot ref={ref}>
      {props.children && (
        <DrawerFooterContent>{props.children}</DrawerFooterContent>
      )}
    </DrawerFooterRoot>
  )
)

export default DrawerFooter
