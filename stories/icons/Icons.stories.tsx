import React from "react"
import { Meta } from "@storybook/react"
import { Stack } from "@mui/material"
import Icon from "../../packages/df-ui-icons/lib"
import { Typography, Grid, Box } from "@mui/material"

const meta: Meta = {
  title: "Icons/Example",
  tags: ["autodocs"],
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

export function Gallery() {
  
  return (
    <div>
      <Grid container spacing={12}>
        {Object.keys(Icon).map((iconName, index) => (
          <Grid key={index} item xs={4} md={2}>
            <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} gap={2}>
              {React.createElement(Icon[iconName])}
              <Typography variant="body2">{iconName}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export function Default() {
  return (
    <div>
      <Stack direction={"row"} gap={4} justifyContent={"center"}>
        <Icon.home />
        <Icon.mail />
        <Icon.close />
      </Stack>
    </div>
  )
}