import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { DrawerBody } from "../../../packages/df-ui-drawer/lib"
import { Typography } from "@mui/material"

const meta: Meta = {
  title: "Components/Drawer/DrawerBody",
  tags: ["autodocs"],
  component: DrawerBody,
}

export default meta

type Story = StoryObj<typeof DrawerBody>

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
        <Typography variant="body1" mb={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          eligendi odio assumenda fugit nisi. Repudiandae doloribus fuga saepe
          hic adipisci nulla minus magnam necessitatibus.
        </Typography>
        <Typography variant="body1" mb={1}>
          Unde, sit ullam deserunt odio. Hic ducimus vitae nostrum nulla omnis!
          Repellat fuga architecto aspernatur quis esse similique.
        </Typography>
      </div>
    ),
  },
}
