import React from "react"
import { styled } from "@mui/material/styles"
import { Typography, IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle, Box, type Breakpoint} from "@mui/material"
import Icon from "@dataflor-ag/df-ui-icons"

type IconVariant = "default" | "primary" | "success" | "warning" | "error" | "info"

interface DialogProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode;
  open: boolean;
  children?: React.ReactNode;
  content?: React.ReactNode
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onSave?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onEdit?: (event: React.MouseEvent<HTMLButtonElement>) => void
  buttonTextClose?: string,
  buttonTextSave?: string,
  maxWidth?: Breakpoint,
  saveDisabled?: boolean
}

const DialogCreateEditRoot = styled("div", {
  name: "MuiDialog",
  slot: "root",
})(({ theme, }) => ({
  width: "100%",
  display: "flex",
  gap: theme.spacing(4),
  alignItems: "center",
  padding: theme.spacing(5),
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
}))



export const DialogCreateEdit = React.forwardRef<HTMLDivElement, DialogProps>(
  (props, ref) => {

    const { icon, title, onClose, onSave, open, saveDisabled, children, buttonTextClose, buttonTextSave, maxWidth} = props

    return (
      <DialogCreateEditRoot ref={ref}>
        <Dialog open={open} maxWidth={maxWidth ? maxWidth : "xs"}>
          <DialogTitle>
            <Box
            display={"flex"}
            alignItems={"center"}
            gap={3}
            sx={{
              "& .MuiSvgIcon-fontSizeMedium": {
                fontSize: "20px",    
            }}}>
            {icon}
            <Typography variant="h6">{title}</Typography>
            </Box> 
          </DialogTitle>
          <DialogContent dividers>{children}
          </DialogContent> 
          <DialogActions>
          <Button color="secondary" variant="outlined" onClick={onClose}>{buttonTextClose}
          </Button>
            <Button color="primary" disabled={saveDisabled} onClick={onSave}>{buttonTextSave}
            </Button>
          </DialogActions>  
        </Dialog>
      </DialogCreateEditRoot>
    )
  }
)