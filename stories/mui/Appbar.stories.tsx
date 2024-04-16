import React from "react"
import {
  Typography,
  Box,
  Toolbar,
  Container,
  AppBar,
  Avatar,
} from "@mui/material"
import { Meta } from "@storybook/react"

const meta: Meta = {
  title: "MUI/Appbar",
}

export default meta

export function _Appbar() {
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
              <Avatar alt="Remy Sharp" src={"/assets/img/avatar.jpg"} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
