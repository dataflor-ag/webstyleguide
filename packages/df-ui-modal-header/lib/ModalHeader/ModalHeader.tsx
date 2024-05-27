import React from "react"
import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"
import { IconWrapper } from "@dataflor-ag/df-ui-icon-wrapper"
import Icon from "@dataflor-ag/df-ui-icons"

type IconVariant = "default" | "primary" | "success" | "warning" | "error" | "info"

interface ModalHeaderProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode;
  iconVariant?: IconVariant
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ModalHeaderRoot = styled("div", {
  name: "MuiModalHeader",
  slot: "root",
})(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: theme.spacing(3),
  alignItems: "center",

}))

const ModalHeaderClose = styled("button", {
  name: "MuiModalHeader",
  slot: "close"
})(({ theme }) => ({
  backgroundColor: "transparent",
  width: theme.spacing(8),
  height: theme.spacing(8),
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  border: "0 none",
  marginBottom: "auto",
  marginLeft: "auto",
  cursor: "pointer",
  opacity: .6,
  color: "inherit",
  transition: theme.transitions.create(["opacity"]),
  "&:hover": {
    opacity: 1,
  }
}))


export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  (props, ref) => {

    const { icon, title, subtitle, onClose, iconVariant = "default" } = props
    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      if(onClose) onClose(e)
    }

    return (
      <ModalHeaderRoot ref={ref}>
        {icon && <IconWrapper variant={iconVariant}>{icon}</IconWrapper>}
        <div>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle2">{subtitle}</Typography>
        </div>
        {onClose && <ModalHeaderClose onClick={handleClose}><Icon.close /></ModalHeaderClose>}
      </ModalHeaderRoot>
    )
  }
)