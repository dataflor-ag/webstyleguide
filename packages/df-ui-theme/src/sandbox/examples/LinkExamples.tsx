import { Typography, Stack, Link } from "@mui/material"

function Examples() {
  return (
    <>
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
    </>
  )
}

export default Examples
