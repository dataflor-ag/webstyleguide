import { Shadows } from "@mui/material"
import palette from "./palette"

type CustomShadow = {
  base: string
  focus: string
  error: string
  errorFocus: string
}

type CustomShadowNames = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

const customShadowBase = `0 0 0 1px ${palette.grey?.[200]}`
const customShadowFocus = `0 0 0 1px ${palette.grey?.[300]}, 0 0 0 4px ${palette.grey?.[200]}`
const customShadowError = `0 0 0 1px ${palette.error?.[500]}`
const customShadowErrorFocus = `0 0 0 1px ${palette.error?.[600]}, 0 0 0 4px ${palette.error?.[200]}`

const customShadowXs = `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08)`
const customShadowSm = `0 2px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08)`
const customShadowMd = `0 4px 8px -2px rgba(0,0,0,0.10), 0 2px 4px 0 rgba(0,0,0,0.05)`
const customShadowLg = `0 12px 16px -4px rgba(0,0,0,0.10), 0 4px 6px -2px rgba(0,0,0,0.05)`
const customShadowXl = `0 8px 24px 0 rgba(0,0,0,0.08), 0 24px 48px -12px rgba(0,0,0,0.15)`
const customShadow2xl = `0 24px 48px -12px rgba(0,0,0,0.15)`
const customShadow3xl = `0 24px 48px -12px rgba(0,0,0,0.15)`

export const customShadows: Record<CustomShadowNames, CustomShadow> = {
  xs: {
    base: `${customShadowXs}, ${customShadowBase}`,
    focus: `${customShadowXs}, ${customShadowFocus}`,
    error: `${customShadowXs}, ${customShadowError}`,
    errorFocus: `${customShadowXs}, ${customShadowErrorFocus}`,
  },
  sm: {
    base: `${customShadowSm}, ${customShadowBase}`,
    focus: `${customShadowSm}, ${customShadowFocus}`,
    error: `${customShadowSm}, ${customShadowError}`,
    errorFocus: `${customShadowSm}, ${customShadowErrorFocus}`,
  },
  md: {
    base: `${customShadowMd}, ${customShadowBase}`,
    focus: `${customShadowMd}, ${customShadowFocus}`,
    error: `${customShadowMd}, ${customShadowError}`,
    errorFocus: `${customShadowMd}, ${customShadowErrorFocus}`,
  },
  lg: {
    base: `${customShadowLg}, ${customShadowBase}`,
    focus: `${customShadowLg}, ${customShadowFocus}`,
    error: `${customShadowLg}, ${customShadowError}`,
    errorFocus: `${customShadowLg}, ${customShadowErrorFocus}`,
  },
  xl: {
    base: `${customShadowXl}, ${customShadowBase}`,
    focus: `${customShadowXl}, ${customShadowFocus}`,
    error: `${customShadowXl}, ${customShadowError}`,
    errorFocus: `${customShadowXl}, ${customShadowErrorFocus}`,
  },
  "2xl": {
    base: `${customShadow2xl}, ${customShadowBase}`,
    focus: `${customShadow2xl}, ${customShadowFocus}`,
    error: `${customShadow2xl}, ${customShadowError}`,
    errorFocus: `${customShadow2xl}, ${customShadowErrorFocus}`,
  },
  "3xl": {
    base: `${customShadow3xl}, ${customShadowBase}`,
    focus: `${customShadow3xl}, ${customShadowFocus}`,
    error: `${customShadow3xl}, ${customShadowError}`,
    errorFocus: `${customShadow3xl}, ${customShadowErrorFocus}`,
  },
}

export const shadows: Shadows = [
  "none",
  customShadows.xs.base,
  customShadows.sm.base,
  customShadows.md.base,
  customShadows.lg.base,
  customShadows.xl.base,
  customShadows["2xl"].base,
  customShadows["3xl"].base,
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

export default shadows
