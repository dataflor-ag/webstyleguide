import React from "react"
import { Meta } from "@storybook/react"
import { Typography, Link, Breadcrumbs, Stack } from "@mui/material"
import Icon from "../../packages/df-ui-icons/lib"

const meta: Meta = {
  title: "MUI/Breadcrumb",
}

export default meta

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export function Breadcrumb() {
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Breadcrumbs
      </Typography>

      <div role="presentation" onClick={handleClick}>
        <Stack direction="column" spacing={6}>
          <Breadcrumbs separator={<Icon.chevronRight/>} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              <Icon.home/>
            </Link>
            <Typography color="text.primary">Settings</Typography>
          </Breadcrumbs>

          <Breadcrumbs separator={<Icon.chevronRight/>} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              <Icon.home/>
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="#"
            >
              Settings
            </Link>
            <Typography color="text.primary">Company</Typography>
          </Breadcrumbs>

          <Breadcrumbs separator={<Icon.chevronRight/>} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              <Icon.home/>
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="#"
            >
              Settings
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="#"
            >
              Company
            </Link>
            <Typography color="text.primary">Team</Typography>
          </Breadcrumbs>
        </Stack>
      </div>
    </>
  )
}
