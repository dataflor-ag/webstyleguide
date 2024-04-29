import React from "react"
import { Meta } from "@storybook/react"
import {
  Typography,
  Stack,
  LinearProgress,
  CircularProgress,
} from "@mui/material"

const meta: Meta = {
  title: "MUI/Progress",
}

export default meta

export function _Progress() {
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Progress / Loader
      </Typography>

      <Typography variant="h3" mb={4} mt={8}>
        Progress bar
      </Typography>

      <Stack direction={"column"} gap={6}>
        <LinearProgress />

        <LinearProgress variant="determinate" value={25} />
        <LinearProgress variant="determinate" value={50} />
        <LinearProgress variant="determinate" value={75} />
        <LinearProgress variant="determinate" value={100} />
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Circular progress bar
      </Typography>
      <Stack direction={"row"} gap={6}>
        <CircularProgress variant="determinate" value={25} />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} />
        <CircularProgress variant="determinate" value={100} />
      </Stack>

      <Stack direction={"row"} gap={6}>
        <CircularProgress variant="determinate" value={25} size={64} />
        <CircularProgress variant="determinate" value={50} size={64} />
        <CircularProgress variant="determinate" value={75} size={64} />
        <CircularProgress variant="determinate" value={100} size={64} />
      </Stack>

      <Stack direction={"row"} gap={6}>
        <CircularProgress variant="determinate" value={25} size={80} />
        <CircularProgress variant="determinate" value={50} size={80} />
        <CircularProgress variant="determinate" value={75} size={80} />
        <CircularProgress variant="determinate" value={100} size={80} />
      </Stack>

      {/* <Typography variant="h3" mb={4} mt={8}>
        Circular progress bar with label
      </Typography> */}
      {/* <Stack direction={"row"} gap={6}>
        <CircularProgressWithLabel variant="determinate" value={25} />
        <CircularProgressWithLabel variant="determinate" value={50} />
        <CircularProgressWithLabel variant="determinate" value={75} />
        <CircularProgressWithLabel variant="determinate" value={100} />
      </Stack> */}
    </>
  )
}
