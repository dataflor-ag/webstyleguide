import React from "react"
import { styled } from "@mui/material/styles"

interface IconHeroProps {
  children?: React.ReactNode
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
  backgroundColor: theme.palette.grey[50],
  backgroundImage: `linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 21%,
    ${theme.palette.grey[100]} 100%)`,
}))

const IconHeroItem = styled("div", {
  name: "MuiIconHero",
  slot: "wrapper",
})(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "9999px",
  color: theme.palette.getContrastText(theme.palette.grey[50]),
  boxShadow:
    theme.palette.mode === "light"
      ? `0 4px 8px -2px rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px #e9e9ec`
      : "none",
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
