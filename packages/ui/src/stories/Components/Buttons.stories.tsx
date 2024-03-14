import { Meta, StoryObj } from "@storybook/react"
// import { Button, ButtonProps } from "@mui/material"
import { Button } from "../../components/Button/Button.component"

// import {
//   Button as MuiButton,
//   ButtonProps as MuiButtonProps,
// } from "@mui/material"

// export interface ButtonProps extends MuiButtonProps {}

// export const Button = ({ ...rest }: ButtonProps) => (
//   <MuiButton {...rest}>test</MuiButton>
// )

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    label: "Hey",
  },
  render: (args) => <Button {...args} />,
}

export const Primary: Story = {
  ...Default,
  args: {
    color: "primary",
  },
}

export const Secondary: Story = {
  ...Default,
  args: {
    color: "secondary",
  },
}

export const SecondaryOutline: Story = {
  ...Default,
  args: {
    color: "secondary",
    variant: "outlined",
  },
}

export const Ghost: Story = {
  ...Default,
  args: {
    color: "secondary",
    variant: "text",
  },
}

export const Error: Story = {
  ...Default,
  args: {
    color: "error",
  },
}

export const ErrorOutline: Story = {
  ...Default,
  args: {
    color: "error",
    variant: "outlined",
  },
}

export const Disabled: Story = {
  ...Primary,
  args: {
    disabled: true,
  },
}

export const Small: Story = {
  ...Primary,
  args: {
    size: "small",
  },
}

export const Medium: Story = {
  ...Primary,
  args: {
    size: "medium",
  },
}

export const Large: Story = {
  ...Primary,
  args: {
    size: "large",
  },
}
// import type { Meta, StoryObj } from "@storybook/react"
// // import { Button } from "@mui/material"
// import {
//   Button as MuiButton,
//   ButtonProps as MuiButtonProps,
// } from "@mui/material"

// type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">

// export interface ButtonProps extends ButtonBaseProps {
//   label: string
// }

// const meta: Meta<typeof MuiButton> = {
//   component: MuiButton,
//   parameters: {
//     layout: "centered",
//   },
//   tags: ["autodocs"],
// }

// export default meta

// type Story = StoryObj<typeof MuiButton>

// export const Primary: Story = {
//   args: {
//     color: "primary",
//     // primary: true,
//     // label: "Button",
//   },
// }
