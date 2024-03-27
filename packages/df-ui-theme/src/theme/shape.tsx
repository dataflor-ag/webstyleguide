const shape = { borderRadius: 1 }
export default shape

type Radius = {
    none: string
    xxs: string
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    "2xl": string
    "3xl": string
    "4xl": string
    full: string
}

export const radius: Radius  = {
    none: "0",
    xxs: "0.125rem",
    xs: "0.25rem",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.625rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.25rem",
    "4xl": "1.55rem",
    full: "50rem",
}