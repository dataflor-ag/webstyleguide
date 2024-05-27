import React from "react"
import { Typography, Radio } from "@mui/material"
import { styled } from "@mui/material/styles"

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
})<ImageSelectorRootProps>(({ theme, checked }) => ({
  display: "inline-flex",
  flexDirection: "column",
  cursor: "pointer",
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  "& .MuiRadio-root": {
    visibility: "visible",
    opacity: 1,
    transition: theme.transitions.create(["visibility, opacity"]),
      ...(!checked && {
      visibility: "hidden",
      opacity: 0,
    }),
  },

  "& .MuiTypography-root": {
    padding: theme.spacing(1)
  }
}))

const ImageSelectorImageWrapper = styled("div", {
  name: "MuiImageSelector",
  slot: "imageWrapper",
})<ImageSelectorRootProps>(({ theme, checked }) => ({
  position: "relative",
  padding: theme.spacing(1),
  border: `2px solid transparent`,
  borderRadius: theme.spacing(4),
  transition: theme.transitions.create(["border-color"]),
  ...(!!checked && {
    borderColor: theme.palette.secondary.main
  }),

  "& .MuiRadio-root": {
    position: "absolute",
    bottom: theme.spacing(1),
    left: theme.spacing(1),
  }
}))

const ImageSelectorImage = styled("img", {
  name: "MuiImageSelector",
  slot: "image",
})(({ theme }) => ({
  display: "block",
  width: "auto",
  height: "auto",
  border: `1px solid ${theme.palette.grey[50]}`,
  borderRadius: theme.spacing(3),
}))

export const ImageSelector = React.forwardRef<HTMLDivElement, ImageSelectorProps>(
  (props, ref) => {

    const {  image, label, onChange, value, checked = false } = props
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      // Stop propagation to avoid double firing
      e.stopPropagation()

      // Create a synthetic event to simulate the onChange event of the input
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
          <Radio
            checked={checked}
            onChange={onChange}
            inputProps={{ "aria-label": label }}
          />
        </ImageSelectorImageWrapper>
        <Typography variant="button">{label}</Typography>
      </ImageSelectorRoot>
    )
  })