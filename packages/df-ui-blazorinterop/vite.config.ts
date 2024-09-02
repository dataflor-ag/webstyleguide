import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    rollupOptions:{
      input: {
        app: './lib/index.ts',
      },
      output: {
        entryFileNames: 'index.js',
      }
    },
  },
})
