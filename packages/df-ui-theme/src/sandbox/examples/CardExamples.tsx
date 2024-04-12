import {
  Typography,
  Stack,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material"
import Image from "../../assets/contemplative-reptile.jpg"

function Examples() {
  return (
    <>
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
    </>
  )
}

export default Examples
