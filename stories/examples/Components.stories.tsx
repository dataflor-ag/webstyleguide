import React from "react"
import { Meta } from "@storybook/react"

import {
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerSidebar,
} from "../../packages/df-ui-drawer/lib"
import { Drawer, Button, Box, Stack, Typography } from "@mui/material"

const meta: Meta = {
  title: "Examples/Components",
  tags: ["autodocs"],
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
          <Stack gap={3} direction={"row"} justifyContent={"flex-end"}>
            <Button variant="outlined">Edit</Button>
          </Stack>
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
