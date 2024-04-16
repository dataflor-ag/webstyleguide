import React from "react"
import { Meta } from "@storybook/react"
import {
  Typography,
  Button,
  Drawer,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material"
const meta: Meta = {
  title: "MUI/Drawer",
}

export default meta

export function _Drawer() {
  const [openDrawer, setDrawerOpen] = React.useState(false)
  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen)
  }

  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Drawer
      </Typography>
      <Button variant="outlined" onClick={toggleDrawer(true)}>
        Open drawer
      </Button>
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <CardMedia
                component="img"
                height="140"
                image={"/assets/img/contemplative-reptile.jpg"}
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
      </Drawer>
    </>
  )
}
