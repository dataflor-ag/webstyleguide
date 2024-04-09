import React from "react"
import styled from "@emotion/styled"
import { palette } from "@dataflor-ag/df-ui-theme"

interface DrawerFooterProps {
  children?: React.ReactNode
}

const DrawerFooterRoot = styled.div`
  border-top: 1px solid ${palette.grey?.[200]};
  width: 100%;
  padding: 1rem 1.25rem;
  height: 4.5rem;
`

const DrawerFooterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`

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
