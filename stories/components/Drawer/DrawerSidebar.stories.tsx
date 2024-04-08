import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { DrawerSidebar } from "../../../packages/df-ui-drawer/lib"
import { Typography } from "@mui/material"

const meta: Meta = {
  title: "Components/Drawer/DrawerSidebar",
  tags: ["autodocs"],
  component: DrawerSidebar,
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
      <div>
        <Typography variant="h2" mb={1}>
          Hello World
        </Typography>
      </div>
    ),
  },
}
