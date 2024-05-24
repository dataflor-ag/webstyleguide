export type CustomShadow = {
  base: string
  focus: string
  error: string
  errorFocus: string
  primary: string
  primaryFocus: string
  secondary: string
  secondaryFocus: string
}

export type CustomShadowNames = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

export type CustomShadows = Record<CustomShadowNames, CustomShadow>
