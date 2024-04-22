import React from "react"
import styled from "@emotion/styled"
import { palette } from "@dataflor-ag/df-ui-theme"

interface IconWrapperProps {
  children?: React.ReactNode
  variant?: "default" | "primary" | "success" | "warning" | "error" | "info"
}

const IconWrapperRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${palette.grey?.[200]};
  background-color: white;

  border-radius: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;

  svg {
    font-size: 1.25rem;
  }
`

const IconWrapperPrimary = styled(IconWrapperRoot)`
  background-color: ${palette.primary?.[50]};
  color: ${palette.primary?.[600]};
  border-color: transparent;
`

const IconWrapperSuccess = styled(IconWrapperRoot)`
  background-color: ${palette.success?.[50]};
  color: ${palette.success?.[600]};
  border-color: transparent;
`

const IconWrapperWarning = styled(IconWrapperRoot)`
  background-color: ${palette.warning?.[50]};
  color: ${palette.warning?.[600]};
  border-color: transparent;
`

const IconWrapperError = styled(IconWrapperRoot)`
  background-color: ${palette.error?.[50]};
  color: ${palette.error?.[600]};
  border-color: transparent;
`

const IconWrapperInfo = styled(IconWrapperRoot)`
  background-color: ${palette.info?.[50]};
  color: ${palette.info?.[600]};
  border-color: transparent;
`

export const IconWrapper = React.forwardRef<HTMLDivElement, IconWrapperProps>(
  (props, ref) => {
    const { variant, children } = props
    let IconWrapperComponent

    switch (variant) {
      case "primary":
        IconWrapperComponent = IconWrapperPrimary
        break
      case "success":
        IconWrapperComponent = IconWrapperSuccess
        break
      case "warning":
        IconWrapperComponent = IconWrapperWarning
        break
      case "error":
        IconWrapperComponent = IconWrapperError
        break
      case "info":
        IconWrapperComponent = IconWrapperInfo
        break
      default:
        IconWrapperComponent = IconWrapperRoot
        break
    }

    return <IconWrapperComponent ref={ref}>{children}</IconWrapperComponent>
  }
)

IconWrapper.defaultProps = {
  variant: "default",
}

export default IconWrapper
