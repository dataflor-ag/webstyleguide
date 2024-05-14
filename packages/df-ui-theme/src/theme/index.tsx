import { createTheme } from "@mui/material/styles"
import paletteLight from "./palette"
import paletteDark from "./paletteDark"
import typography from "./typography"
import components from "./components"
import spacing from "./spacing"
import shape from "./shape"
import shadows from "./shadows"
// import breakpoints from "./breakpoints"

// import paletteTest from "./paletteTest"

const themeLight = createTheme({
  palette: paletteLight,
  typography,
  components,
  spacing,
  shape,
  shadows,
  // breakpoints
})

const themeDark = createTheme({
  palette: paletteDark,
  typography,
  components,
  spacing,
  shape,
  shadows,
  // breakpoints
})

export {
  paletteLight as palette,
  typography,
  components,
  spacing,
  shape,
  shadows,
  // breakpoints

  // Themes
  themeLight,
  themeDark,
}

export default themeLight
