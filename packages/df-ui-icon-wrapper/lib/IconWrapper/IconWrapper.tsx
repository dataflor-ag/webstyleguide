import React from "react"
import { styled } from "@mui/material/styles"

interface IconWrapperProps {
  children?: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "error" | "info";
}
const IconWrapperRoot = styled("div", {
  name: "MuiIconWrapper",
  slot: "root",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: `1px solid ${theme.palette.grey[200]}`,
  backgroundColor: "transparent",
  borderRadius: "0.5rem",
  width: "2.5rem",
  height: "2.5rem",
  flexShrink: 0,

  svg: {
    fontSize: "1.25rem",
  },
}))

const IconWrapperPrimary = styled(IconWrapperRoot)(({ theme }) => ({
  // @ts-expect-error: types advance in theme
  backgroundColor: theme.palette.primary[50],
  // @ts-expect-error: types advance in theme
  color: theme.palette.primary[600],
  borderColor: "transparent",
}))

const IconWrapperSuccess = styled(IconWrapperRoot)(({ theme }) => ({
  // @ts-expect-error: types advance in theme
  backgroundColor: theme.palette.success[50],
  // @ts-expect-error: types advance in theme
  color: theme.palette.success[600],
  borderColor: "transparent",
}))

const IconWrapperWarning = styled(IconWrapperRoot)(({ theme }) => ({
  // @ts-expect-error: types advance in theme
  backgroundColor: theme.palette.warning[50],
  // @ts-expect-error: types advance in theme
  color: theme.palette.warning[600],
  borderColor: "transparent",
}))

const IconWrapperError = styled(IconWrapperRoot)(({ theme }) => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"
  return {
  // @ts-expect-error: types advance in theme
  backgroundColor: isLightMode? theme.palette.error[50] : theme.palette.error[950],
  // @ts-expect-error: types advance in theme
  color: theme.palette.error[600],
  borderColor: "transparent",
  }
})

const IconWrapperInfo = styled(IconWrapperRoot)(({ theme }) => ({
  // @ts-expect-error: types advance in theme
  backgroundColor: theme.palette.info[50],
  // @ts-expect-error: types advance in theme
  color: theme.palette.info[600],
  borderColor: "transparent",
}))

export const IconWrapper = React.forwardRef<HTMLDivElement, IconWrapperProps>(
  (props, ref) => {
    let IconWrapperComponent

    switch (props.variant) {
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

    return (
      <IconWrapperComponent className="MuiIconWrapper-root" ref={ref}>{props.children}</IconWrapperComponent>
    )
  }
)
