import {
  Button,
  Avatar,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Image from "../assets/contemplative-reptile.jpg"

function App() {
  return (
    <Box padding={6}>
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
        Avatar
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar />
        <Avatar>PP</Avatar>
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
    </Box>
  )
}

export default App
