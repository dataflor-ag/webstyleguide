import type { Components, Theme } from "@mui/material"

export type ComponentStyles = Components<Omit<Theme, "components">>
