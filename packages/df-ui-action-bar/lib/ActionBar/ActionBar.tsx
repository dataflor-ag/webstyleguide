import React from "react"
import { styled } from "@mui/material/styles"

interface ActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
}

const ActionBarRoot = styled("div", {
  name: "MuiActionBar",
  slot: "root",
})(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.getContrastText(theme.palette.grey[900]),
  boxShadow: theme.shadows[20],
  padding: theme.spacing(0, 4),
  height: theme.spacing(10),
  borderRadius: theme.spacing(5),
  gap: theme.spacing(2),
  fontSize: ".875rem",
  backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.00) 100%)",
  // "> div": {
  //   display: "flex",
  //   alignItems: "center",
  // },

  // "> *:not(:last-child)": {
  //   position: "relative",
  //   "&::after": {
  //     content: "''",
  //     height: theme.spacing(5),
  //     width: "1px",
  //     // backgroundColor: theme.palette.background.default,
  //     backgroundColor: "pink",
  //     // opacity: 0.1,
  //     display: "block",
  //     top: 0,
  //     right: 0,
  //     // marginLeft: theme.spacing(2),
  //     position: "absolute"
  //   }
  // }
}))

const ActionBarLabel = styled("div", {
  name: "MuiActionBar",
  slot: "label",
})(() => ({
  opacity: 0.6
}))

export const ActionBar = React.forwardRef<HTMLDivElement, ActionBarProps>(
  (props, ref) => {
    const { children, label } = props
    return (
      <ActionBarRoot ref={ref}>
        {label && <ActionBarLabel>{label}</ActionBarLabel>}
        {children}
      </ActionBarRoot>
    )
  })