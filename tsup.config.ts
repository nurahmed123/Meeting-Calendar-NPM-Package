import { defineConfig } from "tsup";

export default defineConfig([
    // 1. Library Build (for NPM/React apps) - DOES NOT Bundle React
    {
        entry: { index: "src/index.tsx" },
        format: ["cjs", "esm"],
        dts: true,
        splitting: false,
        sourcemap: true,
        clean: true, // Only clean once or handle carefully
        external: ["react", "react-dom"], // React is a peer dependency here
    },
    // 2. Web Component Build (for static HTML) - BUNDLES React
    {
        entry: { embed: "src/web-component.tsx" },
        format: ["iife"],
        splitting: false,
        sourcemap: true,
        // clean: false, // Don't wipe the previous build
        target: "es2015",
        noExternal: ["react", "react-dom"], // Bundle React for standalone use
        globalName: "MeetingCalendar",
        env: {
            NODE_ENV: "production",
        },
    }
]);
