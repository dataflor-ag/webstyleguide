import React, { useState } from 'react';
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
      <Box height={200}>
        <ActionBar label="selected" count={2}>
          <ActionBarItem shortcut={scEdit}>
            Edit
          </ActionBarItem>
          <ActionBarItem shortcut={scNew}>
            New
          </ActionBarItem>
          <ActionBarItem shortcut={scDelete}>
            Delete
          </ActionBarItem>
        </ActionBar>
      </Box>
    </div>
  )
}

export function Disabled() {
  const scEdit = ["ALT", "E"]
  const scDelete = ["ALT", "D"]
  const scNew = ["ALT", "N"]

  return (
    <div>
      <Box height={200}>
        <ActionBar label="selected" count={2}>
          <ActionBarItem disabled shortcut={scEdit}>
            Edit
          </ActionBarItem>
          <ActionBarItem shortcut={scNew}>
            New
          </ActionBarItem>
          <ActionBarItem disabled shortcut={scDelete}>
            Delete
          </ActionBarItem>
        </ActionBar>
      </Box>
    </div>
  )
}

export function Toggle() {
  const scEdit = ["ALT", "E"]
  const scDelete = ["ALT", "D"]
  const scNew = ["ALT", "N"]

  const [count, setCount] = useState(2);
  const increaseCount = () => setCount(prevCount => prevCount + 1)
  const decreaseCount = () => setCount(prevCount => Math.max(0, prevCount - 1))

  return (
    <div>
      <Stack gap={2}>
        <Stack direction={'row'} gap={3}>
          <Button variant='outlined' onClick={increaseCount}>Add</Button>
          <Button variant='outlined' color='error' onClick={decreaseCount}>Remove</Button>
        </Stack>
        <Box height={200}>
          <ActionBar label="selected" count={count}>
            <ActionBarItem shortcut={scEdit}>
              Edit
            </ActionBarItem>
            <ActionBarItem shortcut={scNew}>
              New
            </ActionBarItem>
            <ActionBarItem shortcut={scDelete}>
              Delete
            </ActionBarItem>
          </ActionBar>
        </Box>
      </Stack>
    </div>
  )
}