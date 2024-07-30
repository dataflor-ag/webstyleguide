import React from "react"
import { Stack, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

interface PageHeaderProps {
  title: string
  description?: string
  tabMenu?: JSX.Element
  children?: React.ReactNode
}

const PageHeaderRoot = styled("div", {
  name: "MuiPageHeader",
  slot: "root",
})(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",

  "& .MuiTypography-body1": {
    color: theme.palette.grey[600],
  },
}))

export const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  (props, ref) => (
    <PageHeaderRoot ref={ref}>
      <Stack gap={2} paddingBottom={props.tabMenu ? 0 : "2rem"} paddingTop={"1.5rem"}>
        <Typography variant="h2">{props.title}</Typography>
        {props.description && (
          <Typography variant="body1">{props.description}</Typography>
        )}{props.tabMenu &&
        <div style={{paddingTop: props.description ? 0 : "0.5rem"}}>
        {props.tabMenu}
        </div>}
      </Stack>
      {props.children && <Stack gap={2} paddingTop={"1.5rem"}>{props.children}</Stack>}
    </PageHeaderRoot>
  )
)

export default PageHeader
