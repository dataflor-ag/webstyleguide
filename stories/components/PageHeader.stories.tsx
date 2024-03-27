import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { PageHeader } from "../../packages/df-ui-page-header/lib/"
import { Button, Stack } from "@mui/material"

const meta: Meta<typeof PageHeader> = {
  title: "Components/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  argTypes: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    children: {
      type: "function",
    },
  },
}

export default meta

type Story = StoryObj<typeof PageHeader>

export const Default: Story = {
  args: {
    title: "Hey, Ahoi & Welcome!",
  },
}

export const Content: Story = {
  args: {
    title: "Welcome back, Olivia",
    description:
      "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  },
}

export function WithChildren() {
  return (
    <PageHeader
      title="Welcome back, Peter"
      description="Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
    >
      <Stack gap={4} direction={"row"}>
        <Button variant="outlined">Import</Button>
        <Button color="primary">Add</Button>
      </Stack>
    </PageHeader>
  )
}
