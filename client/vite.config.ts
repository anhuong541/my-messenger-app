import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [sveltekit()],
  optimizeDeps: { exclude: ["fsevents"] },
  define: {
    "process.env": process.env,
  },
});
