import { defineConfig } from "vitest/config";
import path from "path";
import tailwindConfig from "./tailwind.config";

export default defineConfig({
  resolve: {
    alias: {
      "@internalComponents": path.resolve(__dirname, "app/_components"),
      "@components": path.resolve(__dirname, "app/_sections"),
      "@lib": path.resolve(__dirname, "app/_lib"),
      "@providers": path.resolve(__dirname, "app/_providers"),
      "@internalSupabase": path.resolve(__dirname, "supabase"),
      "@": path.resolve(__dirname, "app"),
    },
  },
  test: {
    globals: true,
    setupFiles: "./tests/vitest.setup.ts",
    environment: "jsdom",
    include: [
      "tests/**/*.test.ts",
      "tests/**/*.spec.ts",
      "tests/**/*.test.tsx",
      "tests/**/*.spec.tsx",
      "app/debug/**/*.test.ts",
      "app/viewer/**/*.test.ts",
    ],
    coverage: {
      provider: "istanbul",
      reporter: ["text", "html"],
      include: [
        "app/page.tsx",
        "app/%5BpageTitle%5D/page.tsx",
        "app/[pageTitle]/page.tsx",
        "app/*/page.tsx", 
        "app/_sections/**/*.tsx",
        "app/_sections/Button.tsx",
        "app/_sections/ModalVideo.tsx",
        "app/_sections/CallToAction/_CallToActionType1.tsx",
        "app/_sections/CallToAction/_CallToActionType2.tsx",
        "app/_sections/CallToAction/_CallToActionType3.tsx",
        "app/_sections/Footer/_FooterType1.tsx",
        "app/_sections/Footer/_FooterType2.tsx",
        "app/_sections/Footer/_FooterType3.tsx",
        "app/_sections/Footer/_FooterType4.tsx",
        "app/_sections/Header/_HeaderType1.tsx",
        "app/_sections/Header/_HeaderType2.tsx",
        "app/_sections/Header/_HeaderType3.tsx",
        "app/_sections/MainContent/_MainContentType1.tsx",
        "app/_sections/MainContent/_MainContentType2.tsx",
        "app/_sections/TextBox/_TextBox.tsx",
        "app/_sections/blog/_BlogType1.tsx",
        "app/_sections/blog/_BlogType2.tsx",
        "app/_sections/blog/_BlogType3.tsx",
        "app/_sections/blog/_BlogType4.tsx",
        "app/_sections/blog/elements/BlogItem/_BlogItemType1.tsx",
        "app/_sections/blog/elements/BlogItem/_BlogItemType2.tsx",
      ],
      exclude: [
        "node_modules/**",
        "tests/**",
        "**/*.config.ts", 
        "**/*.config.js",
        "vite.config.ts",
        "postcss.config.js",
        ".vscode/**",
        "bin/**",
        "public/**",
        "globals.css",
      ],
    }
    
  },
});
