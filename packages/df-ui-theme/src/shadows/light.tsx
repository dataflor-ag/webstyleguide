import type { CustomShadows } from "../types/Shadow"
import { light as palette } from "../palettes/light"

const customShadowBase = `inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.grey?.[200]}`
const customShadowFocus = `inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.grey?.[300]}, 0 0 0 4px ${palette.grey?.[200]}`
const customShadowError = `inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.error?.[600]}`
const customShadowErrorFocus = `inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.error?.[600]}, 0 0 0 4px ${palette.error?.[200]}`
const customShadowPrimary = `inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.primary?.[600]}`
const customShadowPrimaryFocus = `inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.primary?.[600]}, 0 0 0 4px ${palette.primary?.[200]}`
const customShadowSecondary = `inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.grey?.[900]}`
const customShadowSecondaryFocus = `inset 0 1px 0 0 rgba(255,255,255, 0.12), 0 0 0 1px ${palette.grey?.[900]}, 0 0 0 4px ${palette.grey?.[300]}`

const customShadowXs = `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08)`
const customShadowSm = `0 2px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08)`
const customShadowMd = `0 4px 8px -2px rgba(0,0,0,0.10), 0 2px 4px 0 rgba(0,0,0,0.05)`
const customShadowLg = `0 12px 16px -4px rgba(0,0,0,0.10), 0 4px 6px -2px rgba(0,0,0,0.05)`
const customShadowXl = `0 8px 24px 0 rgba(0,0,0,0.08), 0 24px 48px -12px rgba(0,0,0,0.15)`
const customShadow2xl = `0 24px 48px -12px rgba(0,0,0,0.15)`
const customShadow3xl = `0 24px 48px -12px rgba(0,0,0,0.15)`

export const light: CustomShadows = {
  xs: {
    base: `${customShadowXs}, ${customShadowBase}`,
    focus: `${customShadowXs}, ${customShadowFocus}`,
    error: `${customShadowXs}, ${customShadowError}`,
    errorFocus: `${customShadowXs}, ${customShadowErrorFocus}`,
    primary: `${customShadowXs}, ${customShadowPrimary}`,
    primaryFocus: `${customShadowXs}, ${customShadowPrimaryFocus}`,
    secondary: `${customShadowXs}, ${customShadowSecondary}`,
    secondaryFocus: `${customShadowXs}, ${customShadowSecondaryFocus}`,
  },
  sm: {
    base: `${customShadowSm}, ${customShadowBase}`,
    focus: `${customShadowSm}, ${customShadowFocus}`,
    error: `${customShadowSm}, ${customShadowError}`,
    errorFocus: `${customShadowSm}, ${customShadowErrorFocus}`,
    primary: `${customShadowSm}, ${customShadowPrimary}`,
    primaryFocus: `${customShadowSm}, ${customShadowPrimaryFocus}`,
    secondary: `${customShadowSm}, ${customShadowSecondary}`,
    secondaryFocus: `${customShadowSm}, ${customShadowSecondaryFocus}`,
  },
  md: {
    base: `${customShadowMd}, ${customShadowBase}`,
    focus: `${customShadowMd}, ${customShadowFocus}`,
    error: `${customShadowMd}, ${customShadowError}`,
    errorFocus: `${customShadowMd}, ${customShadowErrorFocus}`,
    primary: `${customShadowMd}, ${customShadowPrimary}`,
    primaryFocus: `${customShadowMd}, ${customShadowPrimaryFocus}`,
    secondary: `${customShadowMd}, ${customShadowSecondary}`,
    secondaryFocus: `${customShadowMd}, ${customShadowSecondaryFocus}`,
  },
  lg: {
    base: `${customShadowLg}, ${customShadowBase}`,
    focus: `${customShadowLg}, ${customShadowFocus}`,
    error: `${customShadowLg}, ${customShadowError}`,
    errorFocus: `${customShadowLg}, ${customShadowErrorFocus}`,
    primary: `${customShadowLg}, ${customShadowPrimary}`,
    primaryFocus: `${customShadowLg}, ${customShadowPrimaryFocus}`,
    secondary: `${customShadowLg}, ${customShadowSecondary}`,
    secondaryFocus: `${customShadowLg}, ${customShadowSecondaryFocus}`,
  },
  xl: {
    base: `${customShadowXl}, ${customShadowBase}`,
    focus: `${customShadowXl}, ${customShadowFocus}`,
    error: `${customShadowXl}, ${customShadowError}`,
    errorFocus: `${customShadowXl}, ${customShadowErrorFocus}`,
    primary: `${customShadowXl}, ${customShadowPrimary}`,
    primaryFocus: `${customShadowXl}, ${customShadowPrimaryFocus}`,
    secondary: `${customShadowXl}, ${customShadowSecondary}`,
    secondaryFocus: `${customShadowXl}, ${customShadowSecondaryFocus}`,
  },
  "2xl": {
    base: `${customShadow2xl}, ${customShadowBase}`,
    focus: `${customShadow2xl}, ${customShadowFocus}`,
    error: `${customShadow2xl}, ${customShadowError}`,
    errorFocus: `${customShadow2xl}, ${customShadowErrorFocus}`,
    primary: `${customShadow2xl}, ${customShadowPrimary}`,
    primaryFocus: `${customShadow2xl}, ${customShadowPrimaryFocus}`,
    secondary: `${customShadow2xl}, ${customShadowSecondary}`,
    secondaryFocus: `${customShadow2xl}, ${customShadowSecondaryFocus}`,
  },
  "3xl": {
    base: `${customShadow3xl}, ${customShadowBase}`,
    focus: `${customShadow3xl}, ${customShadowFocus}`,
    error: `${customShadow3xl}, ${customShadowError}`,
    errorFocus: `${customShadow3xl}, ${customShadowErrorFocus}`,
    primary: `${customShadow3xl}, ${customShadowPrimary}`,
    primaryFocus: `${customShadow3xl}, ${customShadowPrimaryFocus}`,
    secondary: `${customShadow3xl}, ${customShadowSecondary}`,
    secondaryFocus: `${customShadow3xl}, ${customShadowSecondaryFocus}`,
  },
}
