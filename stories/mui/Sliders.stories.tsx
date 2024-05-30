import React from "react"
import { Meta } from "@storybook/react"
import { Slider, Typography, Stack, Box } from "@mui/material"

const meta: Meta = {
  title: "MUI/Sliders",
}

function valuetext(value: number) {
  return `${value}`;
}

export default meta

export function Sliders() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box width={400}>
      <Typography variant="h2" mb={4} mt={8}>
        Buttons
      </Typography>

      <Typography variant="h3" mb={4} mt={8}>
        Base
      </Typography>
      <Stack direction={"column"} spacing={4}>
        <Slider defaultValue={30} aria-label="Slider" />
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Steps
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={10}
        max={110}
      />
      <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />

      <Typography variant="h3" mb={4} mt={8}>
        Label always visible
      </Typography>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks
        min={10}
        max={110}
        valueLabelDisplay="on"
      />

      <Typography variant="h3" mb={4} mt={8}>
        Range
      </Typography>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  )
}
