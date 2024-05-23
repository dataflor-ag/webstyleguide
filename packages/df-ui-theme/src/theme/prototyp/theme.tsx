import type { PaletteMode, Theme } from "@mui/material"
import { deepmerge } from "@mui/utils"
import { createTheme } from "@mui/material"

import type {} from "@mui/x-data-grid/themeAugmentation"
import type {} from "@mui/lab/themeAugmentation"

import { getComponents } from "../utils/getComponents"
import { getPalette } from "../utils/getPalette"
import { getShadows } from "../utils/getShadows"

import typography from "../typography"
import spacing from "../spacing"
import shape from "../shape"
// import shadows from "../shadows"

declare module "@mui/material/styles" {
  interface Palette {
    surface: Palette["primary"]
  }
  interface PaletteOptions {
    surface?: PaletteOptions["primary"]
  }
  interface PaletteColor {
    0?: string
    50?: string
    100?: string
    200?: string
    300?: string
    400?: string
    500?: string
    600?: string
    700?: string
    800?: string
    900?: string
    950?: string
  }
  interface SimplePaletteColorOptions {
    0?: string
    50?: string
    100?: string
    200?: string
    300?: string
    400?: string
    500?: string
    600?: string
    700?: string
    800?: string
    900?: string
    950?: string
  }
}

export const getTheme = (mode: PaletteMode): Theme => {
  const palette = getPalette(mode)
  let theme = createTheme({
    typography,
    spacing,
    shape,
    palette,
  })

  theme = deepmerge(theme, getShadows(theme))
  theme = deepmerge(theme, getComponents(theme))

  return theme
}
