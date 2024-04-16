import React from "react"
import { Meta } from "@storybook/react"
import { Typography, Stack, TextField } from "@mui/material"

const meta: Meta = {
  title: "MUI/Inputs",
}

export default meta

export function Inputs() {
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Input Fields
      </Typography>
      <Stack direction="column">
        <TextField
          required
          id="filled-required"
          label="Email"
          placeholder="olivia@dataflor.de"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••••"
        />
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={5}
          placeholder="Enter a description..."
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          helperText="Some important text"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          placeholder="0000 0000 0000 0000"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          placeholder="0000 0000 0000 0000"
        />
        <TextField id="filled-search" label="Search field" type="search" />
        <TextField
          error
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </Stack>
    </>
  )
}
