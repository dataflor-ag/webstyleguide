import React from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  type Breakpoint,
} from "@mui/material";
import { type DialogProps } from "@mui/material";
import Icon from "@dataflor-ag/df-ui-icons";

interface DialogCreateEditProps extends DialogProps {
  title: string;
  icon: React.ReactNode;
  open: boolean;
  children?: React.ReactNode;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onSave: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonTextClose: string;
  buttonTextSave: string;
  saveIcon?: React.ReactNode;
  saveDisabled?: boolean;
  id?: string;
  DialogProps?: DialogProps;
}

export const DialogCreateEdit = React.forwardRef<
  HTMLDivElement,
  DialogCreateEditProps
>((props, ref) => {
  const {
    icon,
    title,
    onClose,
    onSave,
    open,
    saveIcon = <Icon.save />,
    saveDisabled,
    children,
    buttonTextClose,
    buttonTextSave,
    id,
    ...DialogProps
  } = props;

  return (
    <Dialog
      id={id}
      ref={ref}
      open={open}
      {...DialogProps}
      maxWidth={DialogProps.maxWidth ? DialogProps.maxWidth : "xs"}
    >
      <DialogTitle>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={3}
          sx={{
            "& .MuiSvgIcon-fontSizeMedium": {
              fontSize: "20px",
            },
          }}
        >
          {icon}
          <Typography variant="h6">{title}</Typography>
        </Box>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button
          color="secondary"
          variant="outlined"
          startIcon={<Icon.close />}
          onClick={onClose}
        >
          {buttonTextClose}
        </Button>
        <Button
          color="primary"
          startIcon={saveIcon}
          disabled={saveDisabled}
          onClick={onSave}
        >
          {buttonTextSave}
        </Button>
      </DialogActions>
    </Dialog>
  );
});
