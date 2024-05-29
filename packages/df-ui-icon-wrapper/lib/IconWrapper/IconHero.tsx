import React from "react"
import { styled } from "@mui/material/styles"

interface IconHeroProps {
  children?: React.ReactNode;
}

const IconHeroRoot = styled("div", {
  name: "MuiIconHero",
  slot: "root",
})(() => ({
  marginBottom: "0.5rem",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}))

const IconHeroWrapper = styled("div", {
  name: "MuiIconHero",
  slot: "wrapper",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "5.5rem",
  height: "5.5rem",

  borderRadius: "9999px",
  boxShadow: `inset 0px 1px 0px 0px ${theme.palette.grey[200]}`,
  backgroundColor:
    theme.palette.mode === "light" ? theme.palette.grey[50] : "transparent",
  backgroundImage: 
    theme.palette.mode === "light" ? 
      `linear-gradient(0deg, rgba(255, 255, 255, 1) 25%, ${theme.palette.grey[100]} 100%)`
      : `linear-gradient(0deg, rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.25) 100%)`,
}))

const IconHeroItem = styled("div", {
  name: "MuiIconHero",
  slot: "wrapper",
})(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.grey[100],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "9999px",
  color: theme.palette.getContrastText(theme.palette.grey[50]),
  boxShadow:
    theme.palette.mode === "light"
      ? `0 4px 8px -2px rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px #e9e9ec`
      : `0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255,255,255, 0.04)`,
  height: "3.5rem",
  width: "3.5rem",
  svg: {
    fontSize: "1.5rem",
  },
}))

export const IconHero = React.forwardRef<HTMLDivElement, IconHeroProps>(
  (props, ref) => (
    <IconHeroRoot ref={ref}>
      <IconHeroWrapper>
        <IconHeroItem>{props.children}</IconHeroItem>
      </IconHeroWrapper>
    </IconHeroRoot>
  )
)

export default IconHero
