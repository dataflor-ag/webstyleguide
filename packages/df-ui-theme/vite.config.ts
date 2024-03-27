import { resolve } from "node:path"
import { defineConfig } from "vite"
// import react from "@vitejs/plugin-react-swc"
import dts from "vite-plugin-dts"

import { peerDependencies } from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
  build: {
    target: "esnext",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
  },
})
