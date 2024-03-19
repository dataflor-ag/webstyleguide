import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  Typography,
} from "@mui/material"

export default function Page() {
  return (
    <>
      <Box
        sx={() => ({
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255 255 255 / 1)",
          width: "40vw",
          minHeight: "100dvh",
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            px: 2,
            width: "100%",
          }}
        >
          <Stack gap={4} sx={{ mb: 2 }}>
            <Typography>Sign in</Typography>
          </Stack>
          <Divider />
          <Stack gap={4} sx={{ mt: 2 }}>
            <form>
              <FormControl required>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" />
              </FormControl>

              <FormControl required>
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" />
              </FormControl>

              <Stack gap={4} sx={{ mt: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Checkbox size="small" name="persistent" />
                  <Link href="#replace-with-a-link">Forgot your password?</Link>
                </Box>
                <Button type="submit" color="primary">
                  Sign in
                </Button>
              </Stack>
            </form>
            <Box component="footer" sx={{ py: 3 }}>
              {/* <Typography level="body-xs" textAlign="center"></Typography> */}
              <Typography>© Dataflor {new Date().getFullYear()}</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={() => ({
          height: "100%",
          position: "fixed",
          right: 0,
          top: 0,
          left: "40vw",
          bottom: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&auto=format&w=1000&dpr=2)",
        })}
      ></Box>
    </>
  )
}
