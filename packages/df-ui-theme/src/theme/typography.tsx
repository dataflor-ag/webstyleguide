import { TypographyOptions } from "@mui/material/styles/createTypography"

const typography: TypographyOptions = {
  fontFamily: [
    "Geist",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  button: {
    textTransform: "none",
  },
  h1: {
    fontSize: "2.5rem",
    fontWeight: "600",
    letterSpacing: "-1.5px",
    lineHeight: "3rem",
  },
  h2: {
    fontSize: "2rem",
    fontWeight: "600",
    letterSpacing: "-1.2px",
    lineHeight: "2.5rem",
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: "600",
    letterSpacing: "-0.9px",
    lineHeight: "2rem",
  },
  h4: {
    fontSize: "1.25rem",
    fontWeight: "600",
    letterSpacing: "-0.6px",
    lineHeight: "1.875rem",
  },
  h5: {
    fontSize: "1.125rem",
    fontWeight: "600",
    letterSpacing: "-0.5px",
    lineHeight: "1.75rem",
  },
  h6: {
    fontSize: "1rem",
    fontWeight: "600",
    letterSpacing: "-0.4px",
    lineHeight: "1.5rem",
  },
  body1: {
    fontSize: "1rem",
    fontWeight: "400",
    letterSpacing: "-0.4px",
    lineHeight: "1.5rem",
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: "400",
    letterSpacing: "-0.3px",
    lineHeight: "1.25rem",
  }
}
export default typography
