import { resolve } from "path"
import { defineConfig } from "vite"
// import react from "@vitejs/plugin-react-swc"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react(),
    dts({
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "theme",
      formats: ["es"],
      name: "df-ui-theme",
    },
    // rollupOptions: {
    //   external: ["react"],
    //   output: {
    //     globals: {
    //       react: "react",
    //     },
    //   },
    // },
  },
})
