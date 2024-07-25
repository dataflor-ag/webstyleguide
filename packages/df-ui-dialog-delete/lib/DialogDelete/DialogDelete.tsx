import React from "react";
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import { type DialogProps } from "@mui/material";
import { IconWrapper } from "@dataflor-ag/df-ui-icon-wrapper";
import { styled } from "@mui/material";
import Icon from "@dataflor-ag/df-ui-icons";

interface DialogDeleteProps extends DialogProps {
  title: string;
  icon?: React.ReactNode;
  open: boolean;
  children?: React.ReactNode;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonTextClose: string;
  buttonTextDelete: string;
  deleteDisabled?: boolean;
  DialogProps?: DialogProps;
  text?: string;
  secondaryText?: string;
  warningBoxText?: string;
}

const DialogContentBox = styled("div", {
  name: "MuiDialogContentBox",
  slot: "content",
})(({ theme }) => ({
  color: theme.palette.grey[600],
  paddingLeft: "4rem",
  paddingRight: "2.67rem",
  paddingBottom: "1.6rem",
  marginBottom: "auto",
}));

const DialogWarningBox = styled("div", {
  name: "MuiDialogWarningBox",
  slot: "content",
})(({ theme }) => ({
  color: theme.palette.grey[600],
  padding: "0.75rem",
  boxShadow: `inset 0 0 2px 1px ${theme.palette.error.main}`,
  display: "flex",
  borderRadius: "10px",
  alignItems: "center",
  gap: "0.75rem",

  "& .MuiIconWrapper-root": {
    backgroundColor: theme.palette.error.main,
    borderRadius: "50%",
  },

  "& .MuiSvgIcon-root": { color: theme.palette.background.paper, scale: "1.2" },
}));

export const DialogDelete = React.forwardRef<HTMLDivElement, DialogDeleteProps>(
  (props, ref) => {
    const {
      icon,
      title,
      onClose,
      onDelete,
      open,
      deleteDisabled,
      children,
      buttonTextClose,
      buttonTextDelete,
      text,
      secondaryText,
      warningBoxText,
      ...DialogProps
    } = props;

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (onClose) onClose(e);
    };

    return (
      <Dialog
        ref={ref}
        open={open}
        {...DialogProps}
        maxWidth={DialogProps.maxWidth ? DialogProps.maxWidth : "xs"}
      >
        <DialogTitle sx={{ paddingRight: "1.25rem", paddingBottom: "0.65rem" }}>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={3}
            sx={{
              "& .MuiSvgIcon-fontSizeMedium": {
                fontSize: "16px",
              },
            }}
          >
            <IconWrapper
              variant="error"
              sx={{
                width: "2rem",
                height: "2rem",
              }}
            >
              {icon ? icon : <Icon.trash />}
            </IconWrapper>
            <Typography variant="h6">{title}</Typography>
            <IconButton
              sx={{
                marginLeft: "auto",
                marginBottom: "auto",
                transform: "translate(8px, -4px)",
              }}
              onClick={handleClose}
            >
              <Icon.close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContentBox>
          {children}
          {text && (
            <Typography marginBottom={secondaryText || warningBoxText ? "0.75rem" : 0} variant="subtitle2">
              {text}
            </Typography>
          )}
             {secondaryText && (
            <Typography marginBottom={warningBoxText ? "0.5rem" : 0} variant="subtitle2">
              {secondaryText}
            </Typography>
          )}
          {warningBoxText && (
            <DialogWarningBox>
              <Box>
                <IconWrapper variant="error">
                  <Icon.alertTriangle />
                </IconWrapper>
              </Box>
              <Typography variant="subtitle2">{warningBoxText}</Typography>
            </DialogWarningBox>
          )}
        </DialogContentBox>
        <Divider />
        <DialogActions sx={{ paddingRight: "1.78rem" }}>
          <Button color="secondary" variant="outlined" onClick={onClose}>
            {buttonTextClose}
          </Button>
          <Button color="error" disabled={deleteDisabled} onClick={onDelete}>
            {buttonTextDelete}
          </Button>
        </DialogActions>
      </Dialog>
    );
  },
);
