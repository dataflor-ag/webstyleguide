import {
  Typography,
  Box,
  Toolbar,
  Container,
  AppBar,
  Avatar,
} from "@mui/material"
import AvatarImage from "../../assets/avatar.jpg"

function Examples() {
  return (
    <>
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
    </>
  )
}

export default Examples
