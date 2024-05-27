import React from "react"
import { styled } from "@mui/material/styles"
import { Typography, IconButton } from "@mui/material"
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

  "& .MuiTypography-body2": {
    color: theme.palette.grey[600]
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
          <Typography variant="body2">{subtitle}</Typography>
        </div>
        {onClose && <IconButton sx={{marginLeft: "auto", marginBottom: "auto"}} onClick={handleClose}><Icon.close /></IconButton>}
      </ModalHeaderRoot>
    )
  }
)