import React from "react"
import { Meta } from "@storybook/react"
import { Button, ButtonGroup, Typography } from "@mui/material"

const meta: Meta = {
  title: "MUI/ButtonGroups",
}

export default meta

export function ButtonGroups() {
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        ButtonGroup
      </Typography>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  )
}
