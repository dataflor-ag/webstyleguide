import { Button, Avatar, TextField } from "@mui/material"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"

function App() {
  return (
    <Box padding={6}>
      <h2>Buttons</h2>
      <Stack direction="row" spacing={2}>
        <Button>Button text</Button>
        <Button disabled>Button text</Button>
        <Button size="small">Button text</Button>
        <Button size="medium">Button text</Button>
        <Button size="large">Button text</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon="A">
          Delete
        </Button>
        <Button variant="contained" endIcon="B">
          Send
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button color="secondary" startIcon="A">
          Delete
        </Button>
        <Button color="secondary" endIcon="B">
          Send
        </Button>
      </Stack>
      <h2>Avatar</h2>
      <Stack direction="row" spacing={2}>
        <Avatar />
        <Avatar>PP</Avatar>
      </Stack>
      <h2>Input Fields</h2>
      <Stack direction="row" spacing={2}>
        <TextField label="Vorname" />
        <TextField id="outlined-basic" label="Search" autoFocus />
      </Stack>
      <Stack direction="column" spacing={2}>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
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
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField id="filled-number" label="Number" type="number" />
        <TextField id="filled-search" label="Search field" type="search" />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </Stack>
    </Box>
  )
}

export default App
