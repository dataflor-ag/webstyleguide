import { Button, ButtonGroup, Typography } from "@mui/material"

function Examples() {
  return (
    <>
        <Typography variant="h2" mb={4} mt={8}>
          ButtonGroup
        </Typography>
        <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    </>
  )
}

export default Examples