import React from "react"
import { Meta } from "@storybook/react"
import {
  Typography,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  SelectChangeEvent,
  Radio,
} from "@mui/material"

const meta: Meta = {
  title: "MUI/Forms",
}

export default meta

export function Forms() {
  // Select
  const [age, setAge] = React.useState("")
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  // Radio button
  const [selectedValue, setSelectedValue] = React.useState("b")
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Select / Input dropdown
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span>Select age</span>;
            }

            return selected;
          }}
        >
          <MenuItem disabled value="">Select age</MenuItem>
          <MenuItem value="Ten">Ten</MenuItem>
          <MenuItem value="Twenty">Twenty</MenuItem>
          <MenuItem value="Thirty">Thirty</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h2" mb={4} mt={8}>
        Checkbox
      </Typography>

      <Typography variant="h3" mb={4} mt={8}>
        Small
      </Typography>
      <Stack direction={"row"}>
        <Checkbox color="primary"/>
        <Checkbox color="primary" defaultChecked />
        <Checkbox color="primary" indeterminate defaultChecked />
      </Stack>
      <Stack direction={"row"}>
        <Checkbox />
        <Checkbox defaultChecked />
        <Checkbox indeterminate defaultChecked />
      </Stack>
      <Stack direction={"row"}>
        <Checkbox disabled />
        <Checkbox disabled checked />
        <Checkbox indeterminate checked disabled />
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Medium
      </Typography>
      <Stack direction={"row"}>
        <Checkbox size="medium" color="primary"/>
        <Checkbox size="medium" color="primary" defaultChecked />
        <Checkbox size="medium" color="primary" indeterminate defaultChecked />
      </Stack>
      <Stack direction={"row"}>
        <Checkbox size="medium" />
        <Checkbox size="medium" defaultChecked />
        <Checkbox size="medium" indeterminate defaultChecked />
      </Stack>
      <Stack direction={"row"}>
        <Checkbox size="medium" disabled />
        <Checkbox size="medium" disabled checked />
        <Checkbox size="medium" indeterminate checked disabled />
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Labeled
      </Typography>
      <FormGroup>
      <FormControlLabel
          control={<Checkbox color="primary" defaultChecked />}
          label="Checked"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Checked"
        />
        <FormControlLabel control={<Checkbox />} label="Unchecked" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>

      <Typography variant="h2" mb={4} mt={8}>
        Radio buttons
      </Typography>
      <Typography variant="h3" mb={4} mt={8}>
        Small
      </Typography>
      <Stack direction={"row"}>
      <Radio
          checked={selectedValue === "a"}
          onChange={handleRadioChange}
          value="a"
          color="primary"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <Radio
          checked={selectedValue === "b"}
          onChange={handleRadioChange}
          value="b"
          color="secondary"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <Radio
          checked={selectedValue === "c"}
          onChange={handleRadioChange}
          value="c"
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        />
      </Stack>
      <Stack direction={"row"}>
        <Radio
          value="d"
          disabled
          name="radio-buttons"
          inputProps={{ "aria-label": "C" }}
        />
        <Radio
          value="e"
          disabled
          defaultChecked
          name="radio-buttons"
          inputProps={{ "aria-label": "D" }}
        />
        <Radio
          color="primary"
          value="f"
          disabled
          defaultChecked
          name="radio-buttons"
          inputProps={{ "aria-label": "D" }}
        />
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Medium
      </Typography>
      <Stack direction={"row"}>
        <Radio
          checked={selectedValue === "a"}
          onChange={handleRadioChange}
          value="a"
          color="primary"
          name="radio-buttons"
          size="medium"
          inputProps={{ "aria-label": "A" }}
        />
        <Radio
          checked={selectedValue === "b"}
          onChange={handleRadioChange}
          value="b"
          name="radio-buttons"
          size="medium"
          inputProps={{ "aria-label": "B" }}
        />
             <Radio
          checked={selectedValue === "c"}
          onChange={handleRadioChange}
          value="c"
          name="radio-buttons"
          size="medium"
          inputProps={{ "aria-label": "C" }}
        />
      </Stack>
      <Stack direction={"row"}>
        <Radio
          value="d"
          disabled
          name="radio-buttons"
          size="medium"
          inputProps={{ "aria-label": "D" }}
        />
        <Radio
          value="e"
          disabled
          defaultChecked
          name="radio-buttons"
          size="medium"
          inputProps={{ "aria-label": "E" }}
        />
      </Stack>
      <Typography variant="h3" mb={4} mt={8}>
        Labeled
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Radio
              color="primary"
              defaultChecked
              name="radio-buttons"
              checked={selectedValue === "a"}
              onChange={handleRadioChange}
              value="a"
            />
          }
          label="Checked"
        />
        <FormControlLabel
          control={
            <Radio
              defaultChecked
              name="radio-buttons"
              checked={selectedValue === "b"}
              onChange={handleRadioChange}
              value="b"
            />
          }
          label="Checked"
        />
        <FormControlLabel
          control={
            <Radio
              name="radio-buttons"
              checked={selectedValue === "c"}
              onChange={handleRadioChange}
              value="c"
            />
          }
          label="Unchecked"
        />
        <FormControlLabel
          disabled
          control={<Radio name="radio-buttons" />}
          label="Disabled"
        />
      </FormGroup>
    </>
  )
}
