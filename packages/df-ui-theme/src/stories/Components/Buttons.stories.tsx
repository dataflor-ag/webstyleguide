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
    label: "Default",
  },
}

export const Primary: Story = {
  args: {
    label: "Primary",
    color: "primary",
  },
}

export const Secondary: Story = {
  args: {
    label: "Secondary",
    color: "secondary",
  },
}

export const SecondaryOutline: Story = {
  args: {
    label: "Secondary (Outlined)",
    color: "secondary",
    variant: "outlined",
  },
}

export const Ghost: Story = {
  args: {
    label: "Secondary (Text)",
    color: "secondary",
    variant: "text",
  },
}

export const Error: Story = {
  args: {
    label: "Error",
    color: "error",
  },
}

export const ErrorOutline: Story = {
  args: {
    label: "Error (Outlined)",
    color: "error",
    variant: "outlined",
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
}

export const Small: Story = {
  args: {
    label: "Small",
    size: "small",
  },
}

export const Medium: Story = {
  args: {
    label: "Medium",
    size: "medium",
  },
}

export const Large: Story = {
  args: {
    label: "Large",
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
