import React from "react"
import styled from "@emotion/styled"
import { palette } from "@dataflor-ag/df-ui-theme"

interface DrawerSidebarProps {
  children?: React.ReactNode
}

const DrawerSidebarRoot = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${palette.grey?.[100]};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem 1rem;
  padding-right: 3rem;
  width: 6.5rem;
  transform: translateX(-4.5rem) translateZ(-10px);
  border-radius: inherit;
  z-index: -1;
  box-shadow: 0 0 0 1px ${palette.grey?.[200]};
`

export const DrawerSidebar = React.forwardRef<HTMLDivElement, DrawerSidebarProps>(
  (props, ref) => (
    <DrawerSidebarRoot ref={ref}>
      {props.children && <div>{props.children}</div>}
    </DrawerSidebarRoot>
  )
)

export default DrawerSidebar
