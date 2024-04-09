import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { DrawerSidebar } from "../../../packages/df-ui-drawer/lib"
import { Typography, Stack } from "@mui/material"

const meta: Meta = {
  title: "Components/Drawer/DrawerSidebar",
  tags: ["autodocs"],
  component: DrawerSidebar,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "calc(100% - 4.5rem)",
          height: "200px",
          position: "relative",
          marginLeft: "4.5rem",
          backgroundColor: "#e5e5e5",
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof DrawerSidebar>

export const Default: Story = {
  args: {
    children: <span>Hello World</span>,
  },
}

export const WithChildren: Story = {
  args: {
    children: (
      <Stack gap={2}>
        <Typography variant="h3">A</Typography>
        <Typography variant="h3">B</Typography>
        <Typography variant="h3">C</Typography>
        <Typography variant="h3">D</Typography>
      </Stack>
    ),
  },
}
