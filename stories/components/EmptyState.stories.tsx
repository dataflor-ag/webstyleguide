import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { EmptyState } from "../../packages/df-ui-empty-state/lib/"
import { Button, Stack } from "@mui/material"

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  args: {},
}
