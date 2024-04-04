import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
})


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css: {
//     modules: {
//       localsConvention: "camelCase",
//     },
//   },
//   build: {
//     outDir: 'build', // Specify the output directory as 'build'
//   },
// });
