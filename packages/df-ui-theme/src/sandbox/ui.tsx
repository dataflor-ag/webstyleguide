import * as React from 'react';
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
  FormControlLabel
} from "@mui/material"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Image from "../assets/contemplative-reptile.jpg"
import AvatarImage from "../assets/avatar.jpg"


function App() {

  // Modal
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  // Select
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

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
          helperText="Some important text"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField id="filled-number" label="Number" type="number" />
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
        <Avatar sx={{ width: 24, height: 24, fontSize: "0.625rem" }}>
          NA
        </Avatar>
        <Avatar sx={{ width: 32, height: 32, fontSize: "0.75rem" }}>
          NA
        </Avatar>
        <Avatar sx={{ width: 40, height: 40, fontSize: "1rem" }}>
          NA
        </Avatar>
        <Avatar sx={{ width: 48, height: 48, fontSize: "1.125rem" }}>
          NA
        </Avatar>
        <Avatar sx={{ width: 56, height: 56, fontSize: "1.25rem" }}>
          NA
        </Avatar>
        <Avatar sx={{ width: 64, height: 64, fontSize: "1.5rem" }}>
          NA
        </Avatar>
        <Avatar sx={{ width: 72, height: 72, fontSize: "1.5rem" }}>
          NA
        </Avatar>
        <Avatar sx={{ width: 80, height: 80, fontSize: "1.5rem" }}>
          NA
        </Avatar>
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
        <Button onClick={handleClickOpen}>Open dialog</Button>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title">
            Modal title
          </DialogTitle>
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
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant='outlined' onClick={handleClose}>
              Cancel
            </Button>
            <Button color='primary' autoFocus onClick={handleClose}>
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
                color: 'inherit',
                textDecoration: 'none',
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
        Don’t have an account? <Link fontWeight={"600"} href="#" underline="none">Sign up</Link>
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
        <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
        <FormControlLabel control={<Checkbox />} label="Unchecked" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
    </Box>
  )
}

export default App
