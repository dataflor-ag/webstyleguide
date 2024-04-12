import {
  Typography,
  Stack,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material"

function Examples() {
  const label = { inputProps: { "aria-label": "Switch demo" } }
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Switches / Toggles
      </Typography>
      <Typography variant="h3" mb={4} mt={8}>
        Small
      </Typography>
      <Stack direction={"row"}>
        <Switch {...label} />
        <Switch {...label} defaultChecked />
      </Stack>
      <Stack direction={"row"}>
        <Switch {...label} disabled />
        <Switch {...label} disabled defaultChecked />
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Medium
      </Typography>
      <Stack direction={"row"}>
        <Switch size="medium" {...label} />
        <Switch size="medium" {...label} defaultChecked />
      </Stack>
      <Stack direction={"row"}>
        <Switch size="medium" {...label} disabled />
        <Switch size="medium" {...label} disabled defaultChecked />
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Labeled
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Checked" />
        <FormControlLabel control={<Switch />} label="Unchecked" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>
    </>
  )
}

export default Examples
