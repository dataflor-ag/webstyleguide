import { Typography, Stack, Pagination } from "@mui/material"

function Examples() {
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Pagination
      </Typography>
      <Stack spacing={2}>
        <Pagination count={10} />
      </Stack>
    </>
  )
}

export default Examples
