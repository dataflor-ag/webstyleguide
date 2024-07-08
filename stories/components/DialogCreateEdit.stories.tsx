import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { DialogCreateEdit } from "../../packages/df-ui-dialog-create-edit/lib"
import { Box, Button , Typography } from "@mui/material"
import Icon from "@dataflor-ag/df-ui-icons"

const meta: Meta<typeof DialogCreateEdit> = {
  title: "Components/DialogCreateEdit",
  component: DialogCreateEdit,
  tags: ["autodocs"],
  argTypes: {
    title: {
      type: "string",
    },
  },
}

export default meta

type Story = StoryObj<typeof DialogCreateEdit>

export function DialogExample() {
  const [open, setOpen] = React.useState(false)
  const toggleDialog =  (newOpen: boolean) => () => {
    setOpen(newOpen)
  }
  function onSave() {
    console.log("save")
  }
  function onClose() {
    console.log("close")
    setOpen(false)
  }
  return (
  <Box sx={{ width: "100%", height: "400px" }} role="presentation" p={4}>
    <Button onClick={toggleDialog(true)}>Open Dialog</Button>
    <DialogCreateEdit
      onSave={onSave}
      onClose={onClose}
      open={open}
      title="title"
      buttonTextClose={"buttonTextClose"}
      buttonTextSave={"buttonTextSave"}
      icon={<Icon.documentEdit/>
      }>
      <Box height="20rem" sx={{backgroundColor: "#E6E2D6", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Typography variant="h4" >Child Content</Typography>
      </Box>
    </DialogCreateEdit>
  </Box>
)
}

