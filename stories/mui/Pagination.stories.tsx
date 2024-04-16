import React from "react"
import { Meta } from "@storybook/react"
import { Typography, Stack, Pagination } from "@mui/material"

const meta: Meta = {
  title: "MUI/Pagination",
}

export default meta

export function _Pagination() {
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Pagination
      </Typography>
      <Stack spacing={2}>
        <Pagination count={10} />
      </Stack>
    </>
  )
}
