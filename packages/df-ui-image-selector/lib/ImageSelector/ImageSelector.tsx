import React from "react";
import { IconButton, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Icon from "@dataflor-ag/df-ui-icons";

interface ImageSelectorRootProps {
  checked?: boolean;
}

interface ImageSelectorProps extends ImageSelectorRootProps {
  label?: string;
  image: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick?: (event: React.MouseEvent<HTMLElement>) => void;
  renderButton?: boolean;
  buttonIcon?: JSX.Element;
}

const ImageSelectorRoot = styled("div", {
  name: "MuiImageSelector",
  slot: "root",
})<ImageSelectorRootProps>(({ theme, checked }) => ({
  display: "inline-flex",
  flexDirection: "column",
  cursor: "pointer",
  padding: "0",
  borderRadius: theme.shape.borderRadius,
  marginRight: "1.25rem",
  "& .MuiTypography-root": {
    padding: "0.25rem 0",
    color: theme.palette.grey[700],
    ...(!!checked && {
      color: theme.palette.grey[900],
    }),
  },
}));

const ImageSelectorIcon = styled("div", {
  name: "MuiImageSelectorIcon",
})<ImageSelectorRootProps>(({ theme, checked }) => ({
  position: "absolute",
  bottom: "0.625rem",
  left: "0.625rem",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "50rem",
  transition: "all 0.2s ease-in-out",
  opacity: "0",
  transform: "scale(0.75)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "1.25rem",
  height: "1.25rem",
  color: theme.palette.primary.contrastText,
  zIndex: 10,
  svg: {
    fontSize: "1rem",
  },
  ...(!!checked && {
    opacity: "1",
    transform: "scale(1)",
  }),
}));

const ImageSelectorImageWrapper = styled("div", {
  name: "MuiImageSelector",
  slot: "imageWrapper",
})<ImageSelectorRootProps>(({ theme, checked }) => ({
  position: "relative",
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: theme.spacing(4),
  transition: theme.transitions.create(["border-color"]),
  width: "15rem",
  "&:before": {
    content: "''",
    paddingTop: "calc(2 / 3 * 100%)",
    display: "block",
  },
  "&:after": {
    content: "''",
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.grey[100],
    borderRadius: "0.75rem",
    margin: theme.spacing(1),
    border: `1px solid ${theme.palette.grey[200]}`,
  },
  ...(!!checked && {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
  }),
}));

const ImageSelectorImage = styled("img", {
  name: "MuiImageSelector",
  slot: "image",
})(({ theme }) => ({
  display: "block",
  borderRadius: "1rem",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  padding: theme.spacing(1),
  objectFit: "cover",
  zIndex: 5,
}));

export const ImageSelector = React.forwardRef<
  HTMLDivElement,
  ImageSelectorProps
>((props, ref) => {
  const { image, label, onChange, value, checked = false } = props;
  const theme = useTheme();
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const syntheticEvent = {
      target: {
        value: value,
        checked: !checked,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(syntheticEvent);
  };

  return (
    <ImageSelectorRoot
      ref={ref}
      onClick={handleClick}
      checked={checked}
      id={props.image + "-image-selector"}
    >
      <ImageSelectorImageWrapper
        checked={checked}
        sx={{ position: "relative" }}
      >
        {props.renderButton === true && (
          <IconButton
            onClick={(e) => {
              if (props.onButtonClick !== undefined) {
                props.onButtonClick(e);
              }
            }}
            id={props.image + "-image-selector-button"}
            size="small"
            color="secondary"
            sx={{
              position: "absolute",
              right: "0.5rem",
              bottom: "0.5rem",
              zIndex: 99,
              height: "1.75rem",
              width: "1.75rem",
              opacity: 0.75,
              transition: "all 200ms ease-in-out",
              backgroundColor: theme.palette.grey[100],
              boxShadow: `0 0 2px 0 ${theme.palette.grey[600]} !important`,
              "&:hover": {
                opacity: 0.9,
                backgroundColor: theme.palette.grey[300],
                boxShadow: `0 0 2px 0px ${theme.palette.grey[400]} !important`,
              },
            }}
          >
            {props.buttonIcon ? props.buttonIcon : <Icon.dots />}
          </IconButton>
        )}
        <ImageSelectorImage src={image} alt={label ?? ""} />
        <ImageSelectorIcon
          checked={checked}
          id={props.image + "-image-selector-checked-info"}
        >
          <Icon.check />
        </ImageSelectorIcon>
      </ImageSelectorImageWrapper>
      {props.label && (
        <Typography variant="button" id={props.image + "-image-label"}>
          {label}
        </Typography>
      )}
    </ImageSelectorRoot>
  );
});
