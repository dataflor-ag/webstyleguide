// import { PaletteMode } from "@mui/material"
import paletteLight from "./palette"
import paletteDark from "./paletteDark"

const palette = () => {
  return {
    ...paletteLight,
    ...paletteDark,
  }
}

export default palette
