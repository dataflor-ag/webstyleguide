import type { CustomShadows } from "../types/Shadow"
import { dark as palette } from "../palettes/dark"

const customShadowBase = `0 0 0 1px ${palette.grey?.[200]}`
const customShadowFocus = `0 0 0 1px ${palette.grey?.[300]}, 0 0 0 4px ${palette.grey?.[200]}`
const customShadowError = `0 0 0 1px ${palette.error?.[600]}`
const customShadowErrorFocus = `0 0 0 1px ${palette.error?.[600]}, 0 0 0 4px ${palette.error?.[200]}`
const customShadowPrimary = `0 0 0 1px ${palette.primary?.[600]}`
const customShadowPrimaryFocus = `0 0 0 1px ${palette.primary?.[600]}, 0 0 0 4px ${palette.primary?.[200]}`
const customShadowSecondary = `0 0 0 1px ${palette.grey?.[900]}`
const customShadowSecondaryFocus = `0 0 0 1px ${palette.grey?.[900]}, 0 0 0 4px ${palette.grey?.[300]}`

export const dark: CustomShadows = {
  xs: {
    base: `${customShadowBase}`,
    focus: `${customShadowFocus}`,
    error: `${customShadowError}`,
    errorFocus: `${customShadowErrorFocus}`,
    primary: `${customShadowPrimary}`,
    primaryFocus: `${customShadowPrimaryFocus}`,
    secondary: `${customShadowSecondary}`,
    secondaryFocus: `${customShadowSecondaryFocus}`,
  },
  sm: {
    base: `${customShadowBase}`,
    focus: `${customShadowFocus}`,
    error: `${customShadowError}`,
    errorFocus: `${customShadowErrorFocus}`,
    primary: `${customShadowPrimary}`,
    primaryFocus: `${customShadowPrimaryFocus}`,
    secondary: `${customShadowSecondary}`,
    secondaryFocus: `${customShadowSecondaryFocus}`,
  },
  md: {
    base: `${customShadowBase}`,
    focus: `${customShadowFocus}`,
    error: `${customShadowError}`,
    errorFocus: `${customShadowErrorFocus}`,
    primary: `${customShadowPrimary}`,
    primaryFocus: `${customShadowPrimaryFocus}`,
    secondary: `${customShadowSecondary}`,
    secondaryFocus: `${customShadowSecondaryFocus}`,
  },
  lg: {
    base: `${customShadowBase}`,
    focus: `${customShadowFocus}`,
    error: `${customShadowError}`,
    errorFocus: `${customShadowErrorFocus}`,
    primary: `${customShadowPrimary}`,
    primaryFocus: `${customShadowPrimaryFocus}`,
    secondary: `${customShadowSecondary}`,
    secondaryFocus: `${customShadowSecondaryFocus}`,
  },
  xl: {
    base: `${customShadowBase}`,
    focus: `${customShadowFocus}`,
    error: `${customShadowError}`,
    errorFocus: `${customShadowErrorFocus}`,
    primary: `${customShadowPrimary}`,
    primaryFocus: `${customShadowPrimaryFocus}`,
    secondary: `${customShadowSecondary}`,
    secondaryFocus: `${customShadowSecondaryFocus}`,
  },
  "2xl": {
    base: `${customShadowBase}`,
    focus: `${customShadowFocus}`,
    error: `${customShadowError}`,
    errorFocus: `${customShadowErrorFocus}`,
    primary: `${customShadowPrimary}`,
    primaryFocus: `${customShadowPrimaryFocus}`,
    secondary: `${customShadowSecondary}`,
    secondaryFocus: `${customShadowSecondaryFocus}`,
  },
  "3xl": {
    base: `${customShadowBase}`,
    focus: `${customShadowFocus}`,
    error: `${customShadowError}`,
    errorFocus: `${customShadowErrorFocus}`,
    primary: `${customShadowPrimary}`,
    primaryFocus: `${customShadowPrimaryFocus}`,
    secondary: `${customShadowSecondary}`,
    secondaryFocus: `${customShadowSecondaryFocus}`,
  },
}
