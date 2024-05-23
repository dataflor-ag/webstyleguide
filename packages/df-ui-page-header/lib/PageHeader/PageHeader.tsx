import React from "react"
import { Stack, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

interface PageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
}

const PageHeaderRoot = styled("div", {
  name: "MuiPageHeader",
  slot: "root",
})(({ theme }) => ({
  padding: "2rem 0",
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
      <Stack gap={2}>
        <Typography variant="h2">{props.title}</Typography>
        {props.description && (
          <Typography variant="body1">{props.description}</Typography>
        )}
      </Stack>
      {props.children && <Stack gap={2}>{props.children}</Stack>}
    </PageHeaderRoot>
  )
)

export default PageHeader
