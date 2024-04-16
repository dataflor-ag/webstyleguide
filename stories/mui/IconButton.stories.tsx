import React from "react"
import { Meta } from "@storybook/react"
import { IconButton, Typography, Stack } from "@mui/material"
import Icon from "../../packages/df-ui-icons/lib"

const meta: Meta = {
  title: "MUI/IconButtons",
}

export default meta

export function IconButtons() {
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Icon buttons
      </Typography>
      <Typography variant="h3" mb={4} mt={8}>
        Sizes
      </Typography>
      <IconButton aria-label="home" size="small">
        <Icon.home />
      </IconButton>
      <IconButton aria-label="home" size="medium">
        <Icon.home />
      </IconButton>
      <IconButton aria-label="home" size="large">
        <Icon.home />
      </IconButton>

      <Typography variant="h3" mb={4} mt={8}>
        Colors
      </Typography>
      <Stack direction={"row"} gap={2} mb={2}>
        <IconButton aria-label="home">
          <Icon.home />
        </IconButton>
        <IconButton color="secondary" aria-label="home">
          <Icon.home />
        </IconButton>
        <IconButton color="primary" aria-label="home">
          <Icon.home />
        </IconButton>
        <IconButton color="error" aria-label="home">
          <Icon.home />
        </IconButton>
        <IconButton color="info" aria-label="home">
          <Icon.home />
        </IconButton>
        <IconButton color="success" aria-label="home">
          <Icon.home />
        </IconButton>
        <IconButton color="warning" aria-label="home">
          <Icon.home />
        </IconButton>
      </Stack>
      <Stack direction={"row"} gap={2} mb={2}>
        <IconButton aria-label="home" disabled>
          <Icon.home />
        </IconButton>
        <IconButton color="secondary" aria-label="home" disabled>
          <Icon.home />
        </IconButton>
        <IconButton color="primary" aria-label="home" disabled>
          <Icon.home />
        </IconButton>
        <IconButton color="error" aria-label="home" disabled>
          <Icon.home />
        </IconButton>
        <IconButton color="info" aria-label="home" disabled>
          <Icon.home />
        </IconButton>
        <IconButton color="success" aria-label="home" disabled>
          <Icon.home />
        </IconButton>
        <IconButton color="warning" aria-label="home" disabled>
          <Icon.home />
        </IconButton>
      </Stack>
    </>
  )
}
