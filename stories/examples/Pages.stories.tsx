import React from "react"
import { Meta } from "@storybook/react"

import { palette } from "@dataflor-ag/df-ui-theme"
import { PageHeader } from "../../packages/df-ui-page-header/lib"
import { EmptyState } from "../../packages/df-ui-empty-state/lib"
import {
  AppBar,
  Toolbar,
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Button,
  Stack,
  Avatar,
  FormGroup,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material"

const meta: Meta = {
  title: "Examples/Pages",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

export function Login() {
  return (
    <Stack
      bgcolor={palette.grey?.[100]}
      sx={{ height: "100vh" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography variant="h3" mb={12}>
        Logo
      </Typography>

      <Card sx={{ width: "100%", maxWidth: 456, padding: 12 }} elevation={4}>
        <Stack direction="column" gap={8}>
          <div>
            <Typography variant="h4" align="center" mb={1}>
              Log in to your account
            </Typography>
            <Typography variant="body2" align="center">
              Welcome back! Please enter your details.
            </Typography>
          </div>
          <Stack direction="column">
            <TextField
              required
              id="filled-required"
              label="Email"
              defaultValue="Hello World"
            />

            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />

            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={6}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Remember for 30 days"
                />
              </FormGroup>
              <Link href="#0" color="inherit" variant="body2">
                Forgot Password?
              </Link>
            </Stack>

            <Button color="primary">Login</Button>
          </Stack>

          <Typography variant="body2" align="center">
            Don’t have an account?{" "}
            <Link fontWeight={"600"} href="#" underline="none">
              Sign up
            </Link>
          </Typography>
        </Stack>
      </Card>
    </Stack>
  )
}

export function ProjectsEmpty() {
  return (
    <Stack bgcolor={palette.grey?.[100]} sx={{ height: "100vh" }}>
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
              <Avatar alt="Remy Sharp" src="https://via.placeholder.com/40" />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box px={2} pb={2} sx={{ height: "100%" }}>
        <Card sx={{ height: "100%" }}>
          <Container sx={{ paddingTop: "1.5rem", height: "100%" }}>
            <Stack sx={{ height: "100%" }}>
              <PageHeader
                title="Projects"
                description="Dolor enim eu tortor urna sed duis nulla."
              />

              <EmptyState>
                <Stack gap={4}>
                  <Typography variant="h3">
                    Start by creating a project
                  </Typography>
                  <Typography variant="body1">
                    Any projects created will live here. Start working by
                    creating your projects.
                  </Typography>
                  <Stack gap={4} direction={"row"} justifyContent={"center"}>
                    <Button variant="outlined">Import</Button>
                    <Button color="primary">Create project</Button>
                  </Stack>
                </Stack>
              </EmptyState>
            </Stack>
          </Container>
        </Card>
      </Box>
    </Stack>
  )
}
