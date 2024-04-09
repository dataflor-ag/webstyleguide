import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { DrawerFooter } from "../../../packages/df-ui-drawer/lib"
import { Button, Stack } from "@mui/material"

const meta: Meta = {
  title: "Components/Drawer/DrawerFooter",
  tags: ["autodocs"],
  component: DrawerFooter,
}

export default meta

type Story = StoryObj<typeof DrawerFooter>

export const Default: Story = {
  args: {
    children: <span>Hello World</span>,
  },
}

export const WithButtons: Story = {
  args: {
    children: (
      <Stack
        gap={3}
        direction={"row"}
        justifyContent={"flex-end"}
        width={"100%"}
      >
        <Button variant="outlined">Cancel</Button>
        <Button color="primary">Done</Button>
      </Stack>
    ),
  },
}
