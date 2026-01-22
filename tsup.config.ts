import { defineConfig } from "tsup";

export default defineConfig({
    entry: {
        index: "src/index.tsx",
        embed: "src/web-component.tsx", // Separate entry for the web component
    },
    format: ["cjs", "esm", "iife"], // Add IIFE for browser script tag
    dts: true, // Generate declaration file (.d.ts)
    splitting: false,
    sourcemap: true,
    clean: true,
    target: "es2015", // Required for Web Components (HTMLElement extension)
    // For the IIFE build, we want to bundle React dependencies so it works standalone
    noExternal: ["react", "react-dom"],
    globalName: "MeetingCalendar", // Global variable name for IIFE
    env: {
        NODE_ENV: "production",
    },
});
