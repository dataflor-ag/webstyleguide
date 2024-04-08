import * as React from "react"
import {
  Button,
  Avatar,
  AvatarGroup,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  AppBar,
  Container,
  Toolbar,
  Link,
  Pagination,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Tabs,
  Tab,
  ToggleButton,
  ToggleButtonGroup,
  Radio,
  Menu,
  Switch,
  Chip,
  Divider,
} from "@mui/material"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Image from "../assets/contemplative-reptile.jpg"
import AvatarImage from "../assets/avatar.jpg"
import palette from "../theme/palette"

function App() {
  // Modal
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  // Select
  const [age, setAge] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  const [value, setValue] = React.useState(0)

  const handleChangeTabs = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  // Toggle button
  const [status, setStatus] = React.useState<string | null>("all")

  const handleStatus = (
    _event: React.MouseEvent<HTMLElement>,
    newStatus: string | null
  ) => {
    setStatus(newStatus)
  }

  // Radio button
  const [selectedValue, setSelectedValue] = React.useState("b")

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const openDropdown = Boolean(anchorEl)
  const handleDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleDropdownClose = () => {
    setAnchorEl(null)
  }

  // Switch
  const label = { inputProps: { "aria-label": "Switch demo" } }

  // Chip
  const handleChipDelete = () => {
    console.info("Clicked Chip delete")
  }

  return (
    <Box padding={12} mb={40}>
      <Typography variant="h2" mb={4} mt={8}>
        Buttons
      </Typography>
      <Typography variant="h3" mb={4} mt={8}>
        Primary
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Button color="primary">Primary</Button>
        <Button color="primary" disabled>
          Primary
        </Button>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Secondary
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Button>Secondary</Button>
        <Button disabled>Secondary</Button>
        <Button variant="outlined">Secondary</Button>
        <Button variant="outlined" disabled>
          Secondary
        </Button>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Danger
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Button color="error">Danger</Button>
        <Button color="error" disabled>
          Danger
        </Button>
        <Button color="error" variant="outlined">
          Danger
        </Button>
        <Button color="error" variant="outlined" disabled>
          Danger
        </Button>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Ghost
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Button variant="text">Ghost</Button>
        <Button variant="text" disabled>
          Ghost
        </Button>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Button Sizes
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </Stack>

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
          placeholder="• • • • • • • • • •"
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
      <Typography variant="h2" mb={4} mt={8}>
        Cards
      </Typography>
      <Stack direction="row" spacing={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <CardMedia
              component="img"
              height="140"
              image={Image}
              alt="green iguana"
            />
            <Typography gutterBottom variant="h5">
              Lizard · Card
            </Typography>
            <Typography variant="body2" color="secondary.600">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <CardMedia
                component="img"
                height="140"
                image={Image}
                alt="green iguana"
              />
              <Typography gutterBottom variant="h5">
                Lizard · Card with action area
              </Typography>
              <Typography variant="body2" color="secondary.600">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>

      <Typography variant="h2" mb={4} mt={8}>
        Avatar
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ width: 24, height: 24, fontSize: "0.625rem" }}>NA</Avatar>
        <Avatar sx={{ width: 32, height: 32, fontSize: "0.75rem" }}>NA</Avatar>
        <Avatar sx={{ width: 40, height: 40, fontSize: "1rem" }}>NA</Avatar>
        <Avatar sx={{ width: 48, height: 48, fontSize: "1.125rem" }}>NA</Avatar>
        <Avatar sx={{ width: 56, height: 56, fontSize: "1.25rem" }}>NA</Avatar>
        <Avatar sx={{ width: 64, height: 64, fontSize: "1.5rem" }}>NA</Avatar>
        <Avatar sx={{ width: 72, height: 72, fontSize: "1.5rem" }}>NA</Avatar>
        <Avatar sx={{ width: 80, height: 80, fontSize: "1.5rem" }}>NA</Avatar>
      </Stack>

      <Typography variant="h2" mb={4} mt={8}>
        Avatar group
      </Typography>
      <Stack direction="row">
        <AvatarGroup total={8}>
          <Avatar alt="Remy Sharp" src={AvatarImage} />
          <Avatar alt="Travis Howard" src={AvatarImage} />
          <Avatar alt="Agnes Walker" src={AvatarImage} />
          <Avatar alt="Trevor Henderson" src={AvatarImage} />
        </AvatarGroup>
      </Stack>

      <Typography variant="h2" mb={4} mt={8}>
        Dialog
      </Typography>
      <Stack direction="row">
        <Button variant="outlined" onClick={handleClickOpen}>
          Open dialog
        </Button>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title">Modal title</DialogTitle>
          {/* <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            CLOSE ICON
          </IconButton> */}
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button color="primary" autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>

      <Typography variant="h2" mb={4} mt={8}>
        App bar (Header navigation)
      </Typography>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontWeight: 600,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Dataflor
            </Typography>
            <Box>
              <Avatar alt="Remy Sharp" src={AvatarImage} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Typography variant="h2" mb={4} mt={8}>
        Links
      </Typography>
      <Typography variant="h3" mb={4} mt={8}>
        Basic
      </Typography>
      <Stack direction="row" spacing={4}>
        <Link href="#" underline="none">
          {'underline="none"'}
        </Link>
        <Link href="#" underline="hover">
          {'underline="hover"'}
        </Link>
        <Link href="#" underline="always">
          {'underline="always"'}
        </Link>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        Color inherited
      </Typography>
      <Stack direction="row" spacing={4}>
        <Link href="#" color="inherit" underline="none">
          {'underline="none"'}
        </Link>
        <Link href="#" color="inherit" underline="hover">
          {'underline="hover"'}
        </Link>
        <Link href="#" color="inherit" underline="always">
          {'underline="always"'}
        </Link>
      </Stack>

      <Typography variant="h3" mb={4} mt={8}>
        In text
      </Typography>
      <Typography variant="body2">
        Don’t have an account?{" "}
        <Link fontWeight={"600"} href="#" underline="none">
          Sign up
        </Link>
      </Typography>

      <Typography variant="h2" mb={4} mt={8}>
        Pagination
      </Typography>
      <Stack spacing={2}>
        <Pagination count={10} />
      </Stack>

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
          placeholder="Select age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h2" mb={4} mt={8}>
        Checkbox
      </Typography>

      <Typography variant="h3" mb={4} mt={8}>
        Small
      </Typography>
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
          control={<Checkbox defaultChecked />}
          label="Checked"
        />
        <FormControlLabel control={<Checkbox />} label="Unchecked" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>

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
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <Radio
          checked={selectedValue === "b"}
          onChange={handleRadioChange}
          value="b"
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        />
      </Stack>
      <Stack direction={"row"}>
        <Radio
          value="c"
          disabled
          name="radio-buttons"
          inputProps={{ "aria-label": "C" }}
        />
        <Radio
          value="d"
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
      </Stack>
      <Stack direction={"row"}>
        <Radio
          value="c"
          disabled
          name="radio-buttons"
          size="medium"
          inputProps={{ "aria-label": "C" }}
        />
        <Radio
          value="d"
          disabled
          defaultChecked
          name="radio-buttons"
          size="medium"
          inputProps={{ "aria-label": "D" }}
        />
      </Stack>
      <Typography variant="h3" mb={4} mt={8}>
        Labeled
      </Typography>
      <FormGroup>
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
              checked={selectedValue === "a"}
              onChange={handleRadioChange}
              value="a"
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

      <Typography variant="h2" mb={4} mt={8}>
        Dropdown
      </Typography>
      <div>
        <Button
          variant="outlined"
          id="basic-button"
          aria-controls={openDropdown ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openDropdown ? "true" : undefined}
          onClick={handleDropdownClick}
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openDropdown}
          onClose={handleDropdownClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleDropdownClose}>Profile</MenuItem>
          <MenuItem divider onClick={handleDropdownClose}>
            My account
          </MenuItem>
          <MenuItem onClick={handleDropdownClose}>Logout</MenuItem>
        </Menu>
      </div>

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

      <Typography variant="h2" mb={4} mt={8}>
        Chips
      </Typography>
      <Typography variant="h3" mb={4} mt={8}>
        Basic
      </Typography>
      <Stack direction={"row"} gap={2}>
        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
      </Stack>
      <Typography variant="h3" mb={4} mt={8}>
        Clickable
      </Typography>
      <Stack direction={"row"} gap={2}>
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          clickable
        />
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
      </Stack>
      <Typography variant="h3" mb={4} mt={8}>
        Deletable
      </Typography>
      <Stack direction={"row"} gap={2}>
        <Chip label="Deletable" onDelete={handleChipDelete} />
        <Chip
          label="Deletable"
          variant="outlined"
          onDelete={handleChipDelete}
        />
      </Stack>
      <Typography variant="h3" mb={4} mt={8}>
        Sizes
      </Typography>
      <Stack direction={"row"} gap={2}>
        <Chip label="Small" size="small" />
        <Chip label="Medium" size="medium" />
      </Stack>
      <Typography variant="h3" mb={4} mt={8}>
        Colors
      </Typography>

      <Stack direction={"row"} gap={2} mb={2}>
        <Chip label="Label" color="default" />
        <Chip label="Label" color="primary" />
        <Chip label="Label" color="secondary" />
        <Chip label="Label" color="success" />
        <Chip label="Label" color="warning" />
        <Chip label="Label" color="error" />
        <Chip label="Label" color="info" />
      </Stack>
      <Stack direction={"row"} gap={2} mb={2}>
        <Chip
          href="#basic-chip"
          component="a"
          clickable
          label="Label"
          color="default"
        />
        <Chip
          href="#basic-chip"
          component="a"
          clickable
          label="Label"
          color="primary"
        />
        <Chip
          href="#basic-chip"
          component="a"
          clickable
          label="Label"
          color="secondary"
        />
        <Chip
          href="#basic-chip"
          component="a"
          clickable
          label="Label"
          color="success"
        />
        <Chip
          href="#basic-chip"
          component="a"
          clickable
          label="Label"
          color="warning"
        />
        <Chip
          href="#basic-chip"
          component="a"
          clickable
          label="Label"
          color="error"
        />
        <Chip
          href="#basic-chip"
          component="a"
          clickable
          label="Label"
          color="info"
        />
      </Stack>
      <Stack direction={"row"} gap={2}>
        <Chip label="Label" color="default" onDelete={handleChipDelete} />
        <Chip label="Label" color="primary" onDelete={handleChipDelete} />
        <Chip label="Label" color="secondary" onDelete={handleChipDelete} />
        <Chip label="Label" color="success" onDelete={handleChipDelete} />
        <Chip label="Label" color="warning" onDelete={handleChipDelete} />
        <Chip label="Label" color="error" onDelete={handleChipDelete} />
        <Chip label="Label" color="info" onDelete={handleChipDelete} />
      </Stack>

      <Typography variant="h2" mb={4} mt={8}>
        Content dividers
      </Typography>
      <Typography variant="body2" my={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider />
      <Typography variant="body2" my={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider>
        <Typography
          color={palette.grey?.[400]}
          fontWeight={"600"}
          variant="overline"
          my={4}
        >
          Or
        </Typography>
      </Divider>
      <Typography variant="body2" my={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider>
        <Button variant="outlined">Add</Button>
      </Divider>
      <Typography variant="body2" my={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
    </Box>
  )
}

export default App
