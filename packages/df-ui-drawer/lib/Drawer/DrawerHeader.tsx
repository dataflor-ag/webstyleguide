import React from "react"
import styled from "@emotion/styled"
import { palette } from "@dataflor-ag/df-ui-theme"

interface DrawerHeaderProps {
  content: React.ReactNode
  children?: React.ReactNode
}

const DrawerHeaderRoot = styled.div`
  border-bottom: 1px solid ${palette.grey?.[200]};
  width: 100%;
  padding: 1rem 1.5rem;
  height: 4rem;
`

const DrawerHeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`

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
