import React from "react"
import { Meta } from "@storybook/react"

import {
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerSidebar,
} from "../../packages/df-ui-drawer/lib"
import {
  ModalHeader,
} from "../../packages/df-ui-modal-header"
import {
  Drawer,
  Button,
  Box,
  Stack,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material"
import Icon from "../../packages/df-ui-icons/lib"
import { withIconVariant } from "../components/ModalHeader.stories"

const meta: Meta = {
  title: "Examples/Components",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

export function DrawerExample() {
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <Box sx={{ width: "100%", height: "400px" }} role="presentation" p={4}>
      <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <DrawerSidebar>
          <Stack gap={4} direction={"column"}>
            <span>A</span>
            <span>B</span>
            <span>C</span>
          </Stack>
        </DrawerSidebar>
        <DrawerHeader content={<Typography variant="h4">Preview</Typography>}>
          <IconButton aria-label="close" onClick={toggleDrawer(false)}>
            <Icon.close />
          </IconButton>
        </DrawerHeader>
        <DrawerBody>
          <Typography variant="body1" mb={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eligendi odio assumenda fugit nisi. Repudiandae doloribus fuga saepe
            hic adipisci nulla minus magnam necessitatibus.
          </Typography>
          <Typography variant="body1" mb={1}>
            Unde, sit ullam deserunt odio. Hic ducimus vitae nostrum nulla
            omnis! Repellat fuga architecto aspernatur quis esse similique.
          </Typography>
        </DrawerBody>
        <DrawerFooter>
          <Stack
            gap={3}
            direction={"row"}
            justifyContent={"flex-end"}
            width={"100%"}
          >
            <Button variant="outlined">Cancel</Button>
            <Button color="primary">Save changes</Button>
          </Stack>
        </DrawerFooter>
      </Drawer>
    </Box>
  )
}

export function DialogExample() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Box sx={{ width: "100%", height: "400px" }} role="presentation" p={4}>
      <Stack direction="row">
        <Button onClick={handleClickOpen}>
          Open dialog
        </Button>
        <Dialog
          maxWidth="xs"
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <ModalHeader 
            icon={<Icon.trash/>}
            iconVariant="error"
            title="Delete project" 
            subtitle="Are you sure you want to delete this project? This action cannot be undone."
            onClose={handleClose}
            >
          </ModalHeader>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button color="error" autoFocus onClick={handleClose}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Box>
  )
}