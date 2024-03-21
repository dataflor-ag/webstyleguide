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

export const customShadows: Record<CustomShadowNames, CustomShadow> = {
  xs: {
    base: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), ${customShadowBase}`,
    focus: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), ${customShadowFocus}`,
    error: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), ${customShadowError}`,
    errorFocus: `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), ${customShadowErrorFocus}`,
  },
  sm: {
    base: "",
    focus: "",
    error: "",
    errorFocus: "",
  },
  md: {
    base: "",
    focus: "",
    error: "",
    errorFocus: "",
  },
  lg: {
    base: "",
    focus: "",
    error: "",
    errorFocus: "",
  },
  xl: {
    base: "",
    focus: "",
    error: "",
    errorFocus: "",
  },
  "2xl": {
    base: "",
    focus: "",
    error: "",
    errorFocus: "",
  },
  "3xl": {
    base: "",
    focus: "",
    error: "",
    errorFocus: "",
  },
}

export const shadows: Shadows = [
  "none",
  `0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), 0 0 0 1px ${palette.grey?.[200]}`,
  `0 2px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.08), 0 0 0 1px ${palette.grey?.[200]}`,
  `0 4px 8px -2px rgba(0,0,0,0.10), 0 2px 4px 0 rgba(0,0,0,0.05), 0 0 0 1px ${palette.grey?.[200]}`,
  `0 12px 16px -4px rgba(0,0,0,0.10), 0 4px 6px -2px rgba(0,0,0,0.05), 0 0 0 1px ${palette.grey?.[200]}`,
  `0 8px 24px 0 rgba(0,0,0,0.08), 0 24px 48px -12px rgba(0,0,0,0.15), 0 0 0 1px ${palette.grey?.[200]}`,
  `0 24px 48px -12px rgba(0,0,0,0.15), 0 0 0 1px ${palette.grey?.[200]}`,
  `0 24px 48px -12px rgba(0,0,0,0.15), 0 0 0 1px ${palette.grey?.[200]}`,
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
