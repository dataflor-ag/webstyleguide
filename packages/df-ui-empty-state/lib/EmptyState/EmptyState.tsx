import React from "react"

import { styled } from "@mui/material/styles"
import wrapperLight from "./wrapper.light.svg"
import wrapperDark from "./wrapper.dark.svg"

interface EmptyStateProps {
  image?: string
  children?: React.ReactNode
}

const EmptyStateRoot = styled("div", {
  name: "MuiEmptyState",
  slot: "root",
})(() => ({
  textAlign: "center",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem 0",
}))

const EmptyStateWrapper = styled("div", {
  name: "MuiEmptyState",
  slot: "wrapper",
})(({ theme }) => ({
  padding: "1rem",
  minHeight: "420px",
  maxWidth: "420px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",

  ":before": {
    content: '""',
    backgroundImage: `url(${
      theme.palette.mode === "light" ? wrapperLight : wrapperDark
    })`,
    backgroundRepeat: "repeat",
    position: "absolute",
    width: "100%",
    height: "100%",
    maskImage:
      "radial-gradient(circle, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 75%)",
  },
}))

const EmptyStateContent = styled("div", {
  name: "MuiEmptyState",
  slot: "content",
})(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  zIndex: "1",
  textAlign: "center",
  alignItems: "center",
}))

const EmptyStateImage = styled("img", {
  name: "MuiEmptyState",
  slot: "image",
})(() => ({
  maxWidth: "240px",
  width: "auto",
  height: "auto",
  display: "block",
}))

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (props, ref) => (
    <EmptyStateRoot ref={ref}>
      <EmptyStateWrapper>
        <EmptyStateContent>
          {props.image && <EmptyStateImage src={props.image} />}
          {props.children}
        </EmptyStateContent>
      </EmptyStateWrapper>
    </EmptyStateRoot>
  )
)

export default EmptyState
