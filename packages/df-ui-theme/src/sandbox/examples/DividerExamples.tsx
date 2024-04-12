import { Typography, Divider, Button } from "@mui/material"
import palette from "../../theme/palette"

function Examples() {
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Content dividers
      </Typography>
      <Typography variant="body2" my={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider />
      <Typography variant="body2" my={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider>
        <Typography
          color={palette.grey?.[400]}
          fontWeight={"600"}
          variant="overline"
          my={4}
        >
          Or
        </Typography>
      </Divider>
      <Typography variant="body2" my={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider>
        <Button variant="outlined">Add</Button>
      </Divider>
      <Typography variant="body2" my={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
    </>
  )
}

export default Examples
