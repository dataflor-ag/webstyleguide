import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { IconWrapper } from "../../../packages/df-ui-icon-wrapper/lib"
import Icon from "../../../packages/df-ui-icons/lib"

const meta: Meta<typeof IconWrapper> = {
  title: "Components/IconWrapper/IconWrapper",
  component: IconWrapper,
  tags: ["autodocs"],
  decorators: [
    (story) => (
      <div
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  argTypes: {
    variant: {
      type: "string",
      options: ["default", "primary", "success", "warning", "error", "info"],
      control: { type: "radio" },
    },
    children: {
      type: "function",
    },
  },
}

export default meta

type Story = StoryObj<typeof IconWrapper>

export const Default: Story = {
  args: {
    children: <Icon.home />,
  },
}

export const Primary = {
  args: {
    children: <Icon.bell />,
    variant: "primary",
  },
}

export const Success = {
  args: {
    children: <Icon.calendar />,
    variant: "success",
  },
}

export const Warning = {
  args: {
    children: <Icon.cloudUpload />,
    variant: "warning",
  },
}

export const Error = {
  args: {
    children: <Icon.settings />,
    variant: "error",
  },
}

export const Info = {
  args: {
    children: <Icon.eye />,
    variant: "info",
  },
}
