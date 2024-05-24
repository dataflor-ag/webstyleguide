import type { Theme, Shadows, PaletteMode } from "@mui/material"
import type { CustomShadows } from "../types/Shadow"

import { light } from "../shadows/light"
import { dark } from "../shadows/dark"

const shadows: Record<PaletteMode, CustomShadows> = {
  light: light,
  dark: dark,
}

export const getShadow = (mode: PaletteMode): CustomShadows => {
  return shadows[mode]
}

export const getShadows = (theme: Theme) => {
  const { mode } = theme.palette

  const shadows: Shadows = [
    "none",
    getShadow(mode).xs.base,
    getShadow(mode).sm.base,
    getShadow(mode).md.base,
    getShadow(mode).lg.base,
    getShadow(mode).xl.base,
    getShadow(mode)["2xl"].base,
    getShadow(mode)["3xl"].base,
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ]

  return {
    shadows: shadows,
  }
}
