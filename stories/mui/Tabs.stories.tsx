import React from "react"
import { Meta } from "@storybook/react"
import { Typography, Tabs, Tab } from "@mui/material"

const meta: Meta = {
  title: "MUI/Tabs",
}

export default meta

export function _Tabs() {
  const [value, setValue] = React.useState(0)

  const handleChangeTabs = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Tabs
      </Typography>
      <Tabs value={value} onChange={handleChangeTabs}>
        <Tab label="General" />
        <Tab label="Password" />
        <Tab label="Appearance" />
        <Tab label="Billing" />
        <Tab label="Notifications" />
      </Tabs>
    </>
  )
}
