import React from "react"
import { Meta } from "@storybook/react"
import { Typography, ToggleButtonGroup, ToggleButton } from "@mui/material"

const meta: Meta = {
  title: "MUI/ToggleButtons",
}

export default meta

export function ToggleButtons() {
  const [status, setStatus] = React.useState<string | null>("all")

  const handleStatus = (
    _event: React.MouseEvent<HTMLElement>,
    newStatus: string | null
  ) => {
    setStatus(newStatus)
  }
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Toggle button
      </Typography>
      <ToggleButtonGroup
        value={status}
        exclusive
        onChange={handleStatus}
        aria-label="text formatting"
      >
        <ToggleButton value="all" aria-label="all">
          View all
        </ToggleButton>
        <ToggleButton value="completed" aria-label="completed">
          Completed
        </ToggleButton>
        <ToggleButton value="ongoing" aria-label="ongoing">
          Ongoing
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}
