import { join, resolve } from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import dts from "vite-plugin-dts"

import { peerDependencies } from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-expect-error: Type mismatch due to different vite versions in monorepo
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    target: "esnext",
    lib: {
      entry: resolve(__dirname, join("lib", "index.ts")),
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "react/jsx-runtime",
        "@dataflor-ag/df-ui-theme",
        ...Object.keys(peerDependencies),
      ],
    },
  },
})
