import React from "react"
import { Meta } from "@storybook/react"
import { ActionBar, ActionBarItem } from "../../packages/df-ui-action-bar/lib/"
import Icon from "../../packages/df-ui-icons/lib"

const meta: Meta<typeof ActionBar> = {
  title: "Components/ActionBar",
  // component: ActionBar,
  tags: ["autodocs"],
}

export default meta

// type Story = StoryObj<typeof ActionBar>

// export const Default: Story = {

// }


export function Default() {

  const scEdit = "E"
  // const scDelete = `${Icon.bell}`
  const scDelete = `D`

  return (
    <div>
      <ActionBar label="2 selected">
        <ActionBarItem shortcut={scEdit}>
          Edit
        </ActionBarItem>
        <ActionBarItem shortcut={scDelete}>
          Delete
        </ActionBarItem>
        <ActionBarItem>
          New
        </ActionBarItem>
      </ActionBar>
    </div>
  )
}