# `@dataflor-ag/df-ui-theme`

> DATAflor Web Application UI Theme - dark & light mode support

## Usage

### Normaly import

```tsx
import { getTheme } from "@dataflor-ag/df-ui-theme"

export default function App() {
  return (
    <ThemeProvider theme={getTheme("dark")}>
      <CssBaseline enableColorScheme />
      <main>This app is using the dark mode</main>
    </ThemeProvider>
  )
}
```

### Import explicit mode of the theme

```tsx
import { lightTheme, darkTheme } from "@dataflor-ag/df-ui-theme"
```
