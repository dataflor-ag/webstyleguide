import React from "react"
import { Meta } from "@storybook/react"
import { ActionBar, ActionBarItem } from "../../packages/df-ui-action-bar/lib/"
import Icon from "../../packages/df-ui-icons/lib"
import { Button, Stack, Box} from "@mui/material"

const meta: Meta<typeof ActionBar> = {
  title: "Components/ActionBar",
  tags: ["autodocs"],
}

export default meta

export function Default() {
  const scEdit = ["ALT", "E"]
  const scDelete = ["ALT", "D"]
  const scNew = ["ALT", "N"]

  return (
    <div>
      <ActionBar label="2 selected" show={true}>
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
      <Box height={200}>
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
      </Box>
    </div>
  )
}

export function Disabled() {
  const scSettings = ["STRG", ";"]
  const scDelete = [<Icon.cloudDownload />, "D"]
  const scNew = <Icon.alertTriangle />

  return (
    <div>
      <ActionBar label="2 selected" show={true}>
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
      <Box height={200}>
        <ActionBar label="2 selected">
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
      </Box>
    </div>
  )
}

export function Toggle() {
  const scSettings = ["STRG", ";"]
  const scDelete = [<Icon.cloudDownload />, "D"]
  const scNew = <Icon.alertTriangle />

  const [show, setShow] = React.useState(false)
  const toggleActionBar = (value: boolean) => () => {
    setShow(value)
  }

  return (
    <div>
      <Stack gap={2}>
        <div>
          <Button onClick={toggleActionBar(!show)}>Toggle action</Button>
        </div>
        <Box height={200}>
          <ActionBar label="2 selected" show={show}>
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
        </Box>
      </Stack>
    </div>
  )
}