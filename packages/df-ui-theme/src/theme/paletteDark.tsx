import type { PaletteOptions } from "@mui/material"

declare module "@mui/material/styles" {
  interface PaletteColor {
    primary: true
  }

  interface SimplePaletteColorOptions {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    950: string
  }
}

const palette: PaletteOptions = {
  mode: "dark",
  primary: {
    "50": "#162b08",
    "100": "#314e19",
    "200": "#375b19",
    "300": "#437318",
    "400": "#56961a",
    "500": "#6ab023",
    "600": "#90d744",
    "700": "#afe670",
    "800": "#cff1a5",
    "900": "#e7f8cf",
    "950": "#f4fce9",
    contrastText: "#000000",
  },
  secondary: {
    "50": "#18181b",
    "100": "#26272b",
    "200": "#3f3f46",
    "300": "#51525c",
    "400": "#70707b",
    "500": "#a0a0ab",
    "600": "#c9c9cf",
    "700": "#E9E9EC",
    "800": "#f4f4f5",
    "900": "#fafafa",
    A100: "#fafafa",
    A200: "#fafafa",
    A400: "#fafafa",
    A700: "#fafafa",
  },
  grey: {
    "50": "#18181b",
    "100": "#26272b",
    "200": "#3f3f46",
    "300": "#51525c",
    "400": "#70707b",
    "500": "#a0a0ab",
    "600": "#c9c9cf",
    "700": "#E9E9EC",
    "800": "#f4f4f5",
    "900": "#fafafa",
    A100: "#26272b",
    A200: "#3f3f46",
    A400: "#70707b",
    A700: "#E9E9EC",
  },
  info: {
    "50": "#142057",
    "100": "#19318f",
    "200": "#1734b6",
    "300": "#1440e1",
    "400": "#1b55f5",
    "500": "#2970ff",
    "600": "#599cff",
    "700": "#8ec0ff",
    "800": "#bcd8ff",
    "900": "#d9e8ff",
    "950": "#eef5ff",
  },
  success: {
    "50": "#042a1c",
    "100": "#094b31",
    "200": "#0a5b39",
    "300": "#097347",
    "400": "#0b9055",
    "500": "#17b26a",
    "600": "#3bcc84",
    "700": "#73e2a7",
    "800": "#aaf0c7",
    "900": "#d3f8e0",
    "950": "#edfcf3",
  },
  warning: {
    "50": "#421e06",
    "100": "#713b12",
    "200": "#85480e",
    "300": "#a15c07",
    "400": "#ca8204",
    "500": "#eaaa08",
    "600": "#fac315",
    "700": "#fdd947",
    "800": "#feeb8a",
    "900": "#fef7c3",
    "950": "#fefbe8",
  },
  error: {
    "50": "#4c0517",
    "100": "#881334",
    "200": "#9f1235",
    "300": "#bf1137",
    "400": "#df1c41",
    "500": "#f53e59",
    "600": "#fb7181",
    "700": "#fda4ac",
    "800": "#fecdd2",
    "900": "#ffe4e5",
    "950": "#fff1f2",
  },
}

export default palette
