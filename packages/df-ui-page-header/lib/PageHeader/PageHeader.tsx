import React from "react"
import { Stack, Typography } from "@mui/material"
import styled from "@emotion/styled"
import { palette } from "@dataflor-ag/df-ui-theme"

interface PageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
}

const PageHeaderRoot = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid ${palette.grey?.[200]};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

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
