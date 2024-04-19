import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { IconHero } from "../../../packages/df-ui-icon-wrapper/lib"
import Icon from "../../../packages/df-ui-icons/lib"

const meta: Meta<typeof IconHero> = {
  title: "Components/IconWrapper/IconHero",
  component: IconHero,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "function",
    },
  },
}

export default meta

type Story = StoryObj<typeof IconHero>

export const Default: Story = {
  args: {
    children: <Icon.home />,
  },
}

export const OtherExample: Story = {
  args: {
    children: <Icon.bell />,
  },
}
