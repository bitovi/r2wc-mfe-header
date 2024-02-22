import path from "path";
import { defineConfig, build as viteBuild } from "vite";

import react from "@vitejs/plugin-react";

build();

async function build() {
  viteBuild(
    defineConfig({
      plugins: [react()],
      build: {
        lib: {
          entry: path.resolve(__dirname, "../src/scenes/Header/web-component"),
          fileName: () => "header.js",
          formats: ["iife"],
          name: "header",
        },
        outDir: path.resolve(__dirname, "../public/mfe"),
      },
      define: {
        "process.env.NODE_ENV": JSON.stringify("production"),
      },
    })
  );
}
