import React from "react"
import { Meta } from "@storybook/react"
import { Button, Typography, Stack, Divider } from "@mui/material"
import Icon from "../../packages/df-ui-icons/lib"

const meta: Meta = {
  title: "MUI/Buttons",
}

export default meta

export function Buttons() {
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Buttons
      </Typography>

      <Typography variant="h3" mb={4} mt={8}>
        Button Sizes
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Primary
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Button color="primary">Primary</Button>
        <Button color="primary" disabled>
          Primary
        </Button>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Secondary
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Button>Secondary</Button>
        <Button disabled>Secondary</Button>
        <Button variant="outlined">Secondary</Button>
        <Button variant="outlined" disabled>
          Secondary
        </Button>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Danger
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Button color="error">Danger</Button>
        <Button color="error" disabled>
          Danger
        </Button>
        <Button color="error" variant="outlined">
          Danger
        </Button>
        <Button color="error" variant="outlined" disabled>
          Danger
        </Button>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Ghost
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Button variant="text">Ghost</Button>
        <Button variant="text" disabled>
          Ghost
        </Button>
      </Stack>

      <Divider />

      <Typography variant="h2" mb={4} mt={8}>
        Buttons with Icon
      </Typography>

      <Typography variant="h3" mb={4} mt={8}>
        Button Sizes
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button startIcon={<Icon.plus />} size="small">Small</Button>
        <Button startIcon={<Icon.plus />} size="medium">Medium</Button>
        <Button startIcon={<Icon.plus />} size="large">Large</Button>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Primary
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Button startIcon={<Icon.plus />} color="primary">Primary</Button>
        <Button startIcon={<Icon.plus />} color="primary" disabled>
          Primary
        </Button>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Secondary
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Button startIcon={<Icon.plus />}>Secondary</Button>
        <Button startIcon={<Icon.plus />} disabled>Secondary</Button>
        <Button startIcon={<Icon.plus />} variant="outlined">Secondary</Button>
        <Button startIcon={<Icon.plus />} variant="outlined" disabled>
          Secondary
        </Button>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Danger
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Button startIcon={<Icon.plus />} color="error">Danger</Button>
        <Button startIcon={<Icon.plus />} color="error" disabled>
          Danger
        </Button>
        <Button startIcon={<Icon.plus />} color="error" variant="outlined">
          Danger
        </Button>
        <Button startIcon={<Icon.plus />} color="error" variant="outlined" disabled>
          Danger
        </Button>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Ghost
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Button startIcon={<Icon.plus />} variant="text">Ghost</Button>
        <Button startIcon={<Icon.plus />} variant="text" disabled>
          Ghost
        </Button>
      </Stack>
    </>
  )
}
