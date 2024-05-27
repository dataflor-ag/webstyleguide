import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { ModalHeader } from "../../packages/df-ui-modal-header/lib/"
import Icon from "../../packages/df-ui-icons/lib"

const meta: Meta<typeof ModalHeader> = {
  title: "Components/ModalHeader",
  component: ModalHeader,
  // decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  tags: ["autodocs"],
  argTypes: {
    title: {
      type: "string",
    },
    subtitle: {
      type: "string",
    },
    icon: {
      type: "function",
    },
  },
}

export default meta

type Story = StoryObj<typeof ModalHeader>

export const Default: Story = {
  args: {
    title: "Add payment method",
    subtitle: "Add a payment method to activate plan",
    icon: <Icon.home />,
    onClose: (e) => {
      console.log("Modal Header Close Event", e)
    }
  },
}

export const withClose: Story = {
  args: {
    title: "Add calendar date",
    icon: <Icon.calendar />,
    onClose: (e) => {
      console.log("Modal Header Close Event", e)
    }
  },
}

export const withoutIcon: Story = {
  args: {
    title: "Add calender",
    subtitle: "Add a payment method to activate plan",
  },
}

export const withIconVariant: Story = {
  args: {
    title: "Delete project",
    subtitle: "Are you sure you want to delete this project? This action cannot be undone.",
    icon: <Icon.trash />,
    iconVariant: "error"
  },
}