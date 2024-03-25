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
  Checkbox
} from "@mui/material"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Image from "../assets/contemplative-reptile.jpg"
import AvatarImage from "../assets/avatar.jpg"

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
        Checkbox
      </Typography>
      <Stack direction="row" spacing={2}>
        <Checkbox defaultChecked />
        <Checkbox />
        <Checkbox disabled />
        <Checkbox disabled checked />
      </Stack>
    </Box>
  )
}

export default App
