import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { DrawerHeader } from "../../../packages/df-ui-drawer/lib"
import { Typography, Button, Stack } from "@mui/material"

const meta: Meta = {
  title: "Components/Drawer/DrawerHeader",
  tags: ["autodocs"],
  component: DrawerHeader,
}

export default meta

type Story = StoryObj<typeof DrawerHeader>

export const Default: Story = {
  args: {
    content: <span>Hello World</span>,
  },
}

export const WithChildren: Story = {
  args: {
    content: <Typography variant="h4">Preview</Typography>,
    children: (
      <Stack gap={3} direction={"row"} justifyContent={"flex-end"}>
        <Button variant="outlined">Import</Button>
        <Button color="primary">Add</Button>
      </Stack>
    ),
  },
}
