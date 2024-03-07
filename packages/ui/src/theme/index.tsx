import { createTheme } from "@mui/material/styles"
import palette from "./palette"
import typography from "./typography"
import components from "./components"
import spacing from "./spacing"
import shape from "./shape"

const theme = createTheme({
  palette,
  typography,
  components,
  spacing,
  shape,
})

export default theme
