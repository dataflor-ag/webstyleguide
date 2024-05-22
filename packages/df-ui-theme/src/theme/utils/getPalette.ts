import type { PaletteMode, PaletteOptions } from "@mui/material"
import { light } from "../palettes/light"
import { dark } from "../palettes/dark"

const palettes: Record<PaletteMode, PaletteOptions> = {
  light: light,
  dark: dark,
}

export const getPalette = (mode: PaletteMode): PaletteOptions => {
  return palettes[mode]
}
