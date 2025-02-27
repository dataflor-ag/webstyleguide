/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-storysource",
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    "@storybook/addon-themes",
    // "@storybook/addon-onboarding",
    // "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    compilerOptions: {
      allowSyntheticDefaultImports: false,
      esModuleInterop: false,
    },
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
    propFilter: (prop) =>
      prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    disableTelemetry: true,
  },
}
export default config
