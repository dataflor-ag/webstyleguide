import React from "react"

import { Meta, StoryObj } from "@storybook/react"
import { Submenu } from "../../../packages/df-ui-dashboard/lib"

const meta: Meta<typeof Submenu> = {
  title: "Components/Dashboard/Submenu",
  component: Submenu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      type: "string",
    },
    subtitle: {
      type: "string",
    },
    children: {
      type: "function",
    },
  },
}

export default meta

type Story = StoryObj<typeof Submenu>

export const Default: Story = {
  args: {
    title: "Settings",
  },
}

export const Subtitle: Story = {
  args: {
    title: "Settings",
    subtitle: "Choose between categories"
  },
}

export const Children: Story = {
  args: {
    title: "Settings",
    subtitle: "Choose between categories",
    children: <ul>
      <li>Lorem ipsum dolor </li>
      <li>Laboriosam id tene</li>
      <li>Beatae quo labore</li>
      <li>Quos eum libero</li>
      <li>Voluptatum ipsum</li>
    </ul>
  },
}