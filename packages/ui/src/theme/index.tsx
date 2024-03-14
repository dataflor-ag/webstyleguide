import { createTheme } from "@mui/material/styles"
import palette from "./palette"
import typography from "./typography"
import components from "./components"
import spacing from "./spacing"
import shape from "./shape"
// import breakpoints from "./breakpoints"

const theme = createTheme({
  palette,
  typography,
  components,
  spacing,
  shape,
  // breakpoints
})

export default theme
