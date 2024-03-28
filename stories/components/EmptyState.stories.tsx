import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { EmptyState } from "../../packages/df-ui-empty-state/lib/"
import { Button, Stack, Typography } from "@mui/material"

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  tags: ["autodocs"],
  argTypes: {
    image: {
      type: "string",
    },
    children: {
      type: "function",
    },
  },
}

export default meta

type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  args: {
    children: (
      <Stack gap={4}>
        <Typography variant="h3">Create your first project</Typography>
        <Typography variant="body1">
          Projects are workspaces to organize your work.
        </Typography>
        <Stack gap={4} direction={"row"} justifyContent={"center"}>
          <Button color="primary">Create project</Button>
        </Stack>
      </Stack>
    ),
  },
}

export const Example: Story = {
  args: {
    image: "https://via.placeholder.com/130",
    children: (
      <Stack gap={4}>
        <Typography variant="h3">No projects found</Typography>
        <Typography variant="body1">
          Your search „Layers“ did not match any projects.
        </Typography>
        <Stack gap={4} direction={"row"} justifyContent={"center"}>
          <Button variant="outlined">Import</Button>
          <Button color="primary">Add</Button>
        </Stack>
      </Stack>
    ),
  },
}
