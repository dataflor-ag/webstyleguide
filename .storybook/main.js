import { join, dirname } from "path"

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")))
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    // getAbsolutePath("@storybook/addon-onboarding"),
    // getAbsolutePath("@storybook/addon-interactions"),
    // getAbsolutePath("@storybook/addon-themes"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
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
