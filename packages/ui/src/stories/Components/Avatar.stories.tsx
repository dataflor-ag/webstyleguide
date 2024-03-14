import { Meta, StoryObj } from "@storybook/react"
// import { Avatar, AvatarProps } from "@mui/material"
import { Avatar } from "../../components/Avatar/Avatar.component"

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {}

export const Image: Story = {
  args: {
    alt: "Peter Parker",
    src: "/assets/avatar.jpg",
  },
}

export const Initials: Story = {
  args: {
    label: "PP",
  },
}
