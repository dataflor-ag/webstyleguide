import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { DialogDelete } from "../../packages/df-ui-dialog-delete"
import { Box, Button , Typography} from "@mui/material"
import Icon from "@dataflor-ag/df-ui-icons"
import { IconWrapper } from "@dataflor-ag/df-ui-icon-wrapper"



const meta: Meta<typeof DialogDelete> = {
  title: "Components/DialogDelete",
  component: DialogDelete,
  tags: ["autodocs"],
  argTypes: {
    title: {
      type: "string",
    },
  },
}

export default meta

type Story = StoryObj<typeof DialogDelete>

export function DeleteDialogExample() {
  const [open, setOpen] = React.useState(false)
  const toggleDialog =  (newOpen: boolean) => () => {
    setOpen(newOpen)
  }
  function onDelete() {
    console.log("save")
  }
  function onClose() {
    console.log("close")
    setOpen(false)
  }
  return (
  <Box sx={{ width: "100%", height: "400px" }} role="presentation" p={4}>
    <Button onClick={toggleDialog(true)}>Open Dialog</Button>
    <DialogDelete
      onDelete={onDelete}
      onClose={onClose}
      open={open}
      title="title"
      buttonTextClose={"buttonTextClose"}
      buttonTextDelete={"buttonTextDelete"}
      icon={<Icon.trash/>
      }>
      <Box height="20rem" sx={{backgroundColor: "#E6E2D6", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Typography variant="h4" >Child Content</Typography>
      </Box>
    </DialogDelete>
  </Box>
)
}

export function DeleteDialogExampleWithText() {
    const [open, setOpen] = React.useState(false)
    const toggleDialog =  (newOpen: boolean) => () => {
      setOpen(newOpen)
    }
    function onDelete() {
      console.log("save")
    }
    function onClose() {
      console.log("close")
      setOpen(false)
    }
    return (
    <Box sx={{ width: "100%", height: "400px" }} role="presentation" p={4}>
      <Button onClick={toggleDialog(true)}>Open Dialog</Button>
      <DialogDelete
        onDelete={onDelete}
        onClose={onClose}
        open={open}
        title="Remove user"
        buttonTextClose={"Cancel"}
        buttonTextDelete={"Delete"}
        icon={<Icon.alertTriangle/>
        }>
        <Box>
          <Typography variant="subtitle2" >Are you sure you want to remove the user?</Typography>
          <Typography variant="subtitle2" marginTop={"0.5rem"} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. </Typography>
        </Box>
      </DialogDelete>
    </Box>
  )
  }

  export function DeleteDialogExampleWithTextBox() {
    const [open, setOpen] = React.useState(false)
    const toggleDialog =  (newOpen: boolean) => () => {
      setOpen(newOpen)
    }
    function onDelete() {
      console.log("save")
    }
    function onClose() {
      console.log("close")
      setOpen(false)
    }
    return (
    <Box sx={{ width: "100%", height: "400px" }} role="presentation" p={4}>
      <Button onClick={toggleDialog(true)}>Open Dialog</Button>
      <DialogDelete
        onDelete={onDelete}
        onClose={onClose}
        open={open}
        title="Remove user"
        buttonTextClose={"Cancel"}
        buttonTextDelete={"Delete"}
        icon={<Icon.trash/>}>
        <Typography marginBottom={"0.75rem"} variant="subtitle2" >Are you sure you want to remove the user? Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Typography>
        <Box padding={"0.75rem"} sx={{boxShadow: "inset 0 0 2px 1px red", borderRadius: "10px", alignItems: "center", gap: "0.75rem"}} display={"flex"}>
            <Box><IconWrapper variant="error" ><Icon.alertTriangle/></IconWrapper></Box>
          <Typography variant="subtitle2" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Typography>
        </Box>
      </DialogDelete>
    </Box>
  )
  }

export function DeleteDialogFullscreen() {
  const [open, setOpen] = React.useState(false)
  const toggleDialog =  (newOpen: boolean) => () => {
    setOpen(newOpen)
  }
  function onDelete() {
    console.log("save")
  }
  function onClose() {
    console.log("close")
    setOpen(false)
  }
  return (
  <Box sx={{ width: "100%", height: "400px" }} role="presentation" p={4}>
    <Button onClick={toggleDialog(true)}>Open Dialog</Button>
    <DialogDelete
      onDelete={onDelete}
      onClose={onClose}
      open={open}
      title="title"
      buttonTextClose={"buttonTextClose"}
      buttonTextDelete={"buttonTextDelete"}
      fullScreen
      icon={<Icon.trash/>
      }>
      <Box height="20rem" sx={{backgroundColor: "#E6E2D6", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Typography variant="h4" >Child Content</Typography>
      </Box>
    </DialogDelete>
  </Box>
)
}