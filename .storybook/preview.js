import { withThemeFromJSXProvider } from "@storybook/addon-themes"
import { CssBaseline, ThemeProvider } from "@mui/material"

import theme from "../packages/df-ui-theme/src/theme"

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: { theme },
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
}

export default preview
