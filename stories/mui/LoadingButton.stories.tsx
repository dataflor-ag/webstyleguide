import React from "react"
import { Typography, Stack } from "@mui/material"
import {
  LoadingButton
} from "@mui/lab"

import { Meta } from "@storybook/react"

const meta: Meta = {
  title: "MUI/LoadingButton",
}

export default meta

export function _LoadingButton() {
  return (
    <>
      <Typography variant="overline" mt={8}>
        Lab Component
      </Typography>
      <Typography variant="h2" mb={4}>
        LoadingButton
      </Typography>

      <Typography variant="h3" mb={4} mt={8}>
        Primary
      </Typography>
      <LoadingButton color="primary" loading variant="outlined">
        Primary
      </LoadingButton>

      <Typography variant="h3" mb={4} mt={8}>
        Secondary
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <LoadingButton loading>
          Secondary
        </LoadingButton>
        <LoadingButton loading variant="outlined">
          Secondary
        </LoadingButton>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Danger
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <LoadingButton loading color="error">
          Danger
        </LoadingButton>
        <LoadingButton loading color="error" variant="outlined">
          Danger
        </LoadingButton>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Ghost
      </Typography>
      <LoadingButton loading variant="text">
        Ghost
      </LoadingButton>
    </>
  )
}
