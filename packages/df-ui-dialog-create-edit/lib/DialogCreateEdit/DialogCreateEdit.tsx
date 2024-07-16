import React from "react"
import { styled } from "@mui/material/styles"
import { Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, Box, type Breakpoint} from "@mui/material"
import { type DialogProps } from "@mui/material"

interface DialogCreateEditProps extends DialogProps {
  title: string
  icon: React.ReactNode;
  open: boolean;
  children?: React.ReactNode;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void
  onSave: (event: React.MouseEvent<HTMLButtonElement>) => void
  buttonTextClose: string,
  buttonTextSave: string,
  saveDisabled?: boolean,
  DialogProps?: DialogProps
}

export const DialogCreateEdit = React.forwardRef<HTMLDivElement, DialogCreateEditProps>(
  (props, ref) => {
    const { icon, title, onClose, onSave, open, saveDisabled, children, buttonTextClose, buttonTextSave, ...DialogProps} = props
    return (
        <Dialog ref={ref} open={open} {...DialogProps} maxWidth={DialogProps.maxWidth ? DialogProps.maxWidth : "xs"} >
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
    )
  }
)