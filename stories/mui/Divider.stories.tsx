import React from "react"
import { Meta } from "@storybook/react"
import { Typography, Divider, Button } from "@mui/material"

const meta: Meta = {
  title: "MUI/Dividers",
}

export default meta

export function Dividers() {
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Content dividers
      </Typography>
      <Typography variant="body2" my={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider />
      <Typography variant="body2" my={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider>
        <Typography fontWeight={"600"} variant="overline" my={4}>
          Or
        </Typography>
      </Divider>
      <Typography variant="body2" my={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider>
        <Button variant="outlined">Add</Button>
      </Divider>
      <Typography variant="body2" my={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
    </>
  )
}
