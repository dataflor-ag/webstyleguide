import React from "react"
import { Meta } from "@storybook/react"
import { Stack } from "@mui/material"
import Icon from "../../packages/df-ui-icons/lib"

const meta: Meta = {
  title: "Icons/Example",
  tags: ["autodocs"],
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

export function Default() {
  return (
    <div>
      <Stack direction={"row"} gap={4} justifyContent={"center"}>
        <Icon.home />
        <Icon.mail />
        <Icon.close />
      </Stack>
    </div>
  )
}
