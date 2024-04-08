import React from "react"
import styled from "@emotion/styled"

interface DrawerBodyProps {
  children?: React.ReactNode
}

const DrawerBodyRoot = styled.div`
  padding: 1.5rem;
  flex: 1 auto;
  overflow-y: auto;
`

export const DrawerBody = React.forwardRef<HTMLDivElement, DrawerBodyProps>(
  (props, ref) => (
    <DrawerBodyRoot ref={ref}>
      {props.children && <div>{props.children}</div>}
    </DrawerBodyRoot>
  )
)

export default DrawerBody
