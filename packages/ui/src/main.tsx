import React from "react"
import ReactDOM from "react-dom/client"

import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import theme from "./theme"

// import App from "./App.tsx"
import Example from "./sandbox/example.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <App /> */}
      <Example />
    </ThemeProvider>
  </React.StrictMode>
)
