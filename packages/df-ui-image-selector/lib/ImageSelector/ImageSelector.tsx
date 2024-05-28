import React from "react"
import { Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import Icon from "@dataflor-ag/df-ui-icons"

interface ImageSelectorRootProps {
  checked?: boolean;
}

interface ImageSelectorProps extends ImageSelectorRootProps{
  label: string,
  image: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}



const ImageSelectorRoot = styled("div", {
  name: "MuiImageSelector",
  slot: "root",
})<ImageSelectorRootProps>(({ theme }) => ({
  display: "inline-flex",
  flexDirection: "column",
  cursor: "pointer",
  padding: "0",
  borderRadius: theme.shape.borderRadius,
  marginRight: "1.25rem",
  "& .MuiTypography-root": {
    padding: "0.25rem 0",
  }
}))

const ImageSelectorIcon = styled("div", {
  name: "MuiImageSelectorIcon",
})<ImageSelectorRootProps>(({ theme, checked }) => ({
    position: "absolute",
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50rem",
    transition: "all 0.2s ease-in-out",
    opacity: "0",
    transform: "scale(0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "1.25rem",
    height: "1.25rem",
    color: theme.palette.primary.contrastText,
    boxShadow: `0 4px 8px -2px rgba(0,0,0,0.1), 0 2px 4px 0 rgba(0,0,0,0.05)`,
    svg: {
      fontSize: "1rem",
    },
    ...(!!checked && {
      opacity: "1",
      transform: "scale(1)"
    }),
}))

const ImageSelectorImageWrapper = styled("div", {
  name: "MuiImageSelector",
  slot: "imageWrapper",
})<ImageSelectorRootProps>(({ theme, checked }) => ({
  position: "relative",
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: theme.spacing(4),
  transition: theme.transitions.create(["border-color"]),
  width: "15rem",
  "&:before":{
    content: "''",
    paddingTop: "calc(2 / 3 * 100%)",
    display: "block",
  },
  ...(!!checked && {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
  }),
}))

const ImageSelectorImage = styled("img", {
  name: "MuiImageSelector",
  slot: "image",
})(({ theme }) => ({
  display: "block",
  borderRadius: theme.spacing(4),
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  padding: theme.spacing(1),
  objectFit: "cover",
}))

export const ImageSelector = React.forwardRef<HTMLDivElement, ImageSelectorProps>(
  (props, ref) => {

    const {  image, label, onChange, value, checked = false } = props
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()
      const syntheticEvent = {
        target: {
          value: value,
          checked: !checked
        }
      } as React.ChangeEvent<HTMLInputElement>

      onChange(syntheticEvent)
    }

    return (
      <ImageSelectorRoot ref={ref} onClick={handleClick} checked={checked}>
        <ImageSelectorImageWrapper checked={checked}>
          <ImageSelectorImage src={image} alt={label} />
          <ImageSelectorIcon checked={checked}>
            <Icon.checkSmall/>
          </ImageSelectorIcon>
        </ImageSelectorImageWrapper>
        <Typography variant="button">{label}</Typography>
      </ImageSelectorRoot>
    )
  })