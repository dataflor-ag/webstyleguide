import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, IconButton } from "@mui/material";
import { IconWrapper } from "@dataflor-ag/df-ui-icon-wrapper";
import Icon from "@dataflor-ag/df-ui-icons";

type IconVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info";

interface DialogHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  iconVariant?: IconVariant;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DialogHeaderRoot = styled("div", {
  name: "MuiDialogHeader",
  slot: "root",
})(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: theme.spacing(4),
  alignItems: "center",
  padding: theme.spacing(5),
  borderBottom: `1px solid ${theme.palette.grey[200]}`,

  "& .MuiTypography-body2": {
    color: theme.palette.grey[600],
  },

  "& .MuiIconWrapper-root": {
    marginBottom: "auto",
  },
}));

export const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  (props, ref) => {
    const { icon, title, subtitle, onClose, iconVariant = "default" } = props;
    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (onClose) onClose(e);
    };

    return (
      <DialogHeaderRoot ref={ref}>
        {icon && <IconWrapper variant={iconVariant}>{icon}</IconWrapper>}
        <div>
          <Typography variant="h6">{title}</Typography>
          {subtitle && <Typography variant="body2">{subtitle}</Typography>}
        </div>
        {onClose && (
          <IconButton
            color="inherit"
            sx={{
              marginLeft: "auto",
              marginBottom: "auto",
              transform: "translate(8px, -8px)",
            }}
            onClick={handleClose}
          >
            <Icon.close />
          </IconButton>
        )}
      </DialogHeaderRoot>
    );
  },
);
