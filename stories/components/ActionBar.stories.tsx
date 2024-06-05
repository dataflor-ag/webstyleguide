import React from "react"
import { Meta } from "@storybook/react"
import { ActionBar, ActionBarItem } from "../../packages/df-ui-action-bar/lib/"
import Icon from "../../packages/df-ui-icons/lib"

const meta: Meta<typeof ActionBar> = {
  title: "Components/ActionBar",
  tags: ["autodocs"],
}

export default meta

export function Default() {
  const scEdit = ["STRG", "SHIFT", "E"]
  const scDelete = [<Icon.bell />, "D"]
  const scNew = <Icon.calendar />

  return (
    <div>
      <ActionBar label="2 selected">
        <ActionBarItem shortcut={scEdit}>
          Edit
        </ActionBarItem>
        <ActionBarItem shortcut={scDelete}>
          Delete
        </ActionBarItem>
        <ActionBarItem shortcut={scNew}>
          New
        </ActionBarItem>
      </ActionBar>
    </div>
  )
}

export function Disabled() {
  const scSettings = ["STRG", ";"]
  const scDelete = [<Icon.cloudDownload />, "D"]
  const scNew = <Icon.alertTriangle />

  return (
    <div>
      <ActionBar>
        <ActionBarItem shortcut={scSettings} disabled>
          Settings
        </ActionBarItem>
        <ActionBarItem shortcut={scDelete} disabled>
          Delete
        </ActionBarItem>
        <ActionBarItem shortcut={scNew}>
          New
        </ActionBarItem>
      </ActionBar>
    </div>
  )
}