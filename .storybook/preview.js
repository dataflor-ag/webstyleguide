import React from 'react';
import { withThemeFromJSXProvider } from "@storybook/addon-themes"
import { CssBaseline, ThemeProvider } from "@mui/material"

import { getTheme } from "../packages/df-ui-theme/src"

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
      themes: {
        light: getTheme("light"),
        dark: getTheme("dark"),
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: () => React.createElement(CssBaseline, { enableColorScheme: true }),
    }),
  ],
}

export default preview
