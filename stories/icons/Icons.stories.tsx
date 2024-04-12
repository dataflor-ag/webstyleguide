import React from "react"
import { Meta } from "@storybook/react"

import Icon from "../../packages/df-ui-icons/lib"

const meta: Meta = {
  title: "Icons/Example",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

export function Login() {
  return (
    <div>
      <h2>Lorem, ipsum dolor.</h2>
      <Icon.home />
    </div>
  )
}
