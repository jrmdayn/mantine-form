import { tailwindConfig } from "./src/tailwind/tailwindTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: tailwindConfig,
  plugins: [],
};
