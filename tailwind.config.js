function generateColors() {
  const COLORS = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ];
  const VARIANTS = [
    "DEFAULT",
    "dark",
    "darker",
    "darkest",
    "light",
    "lighter",
    "lightest",
    "contrast-background",
    "contrast-foreground",
  ];
  const output = {};
  for (const color of COLORS) {
    const map = {};
    for (const variant of VARIANTS) {
      map[variant] =
        variant === "DEFAULT"
          ? `var(--ifm-color-${color})`
          : `var(--ifm-color-${color}-${variant})`;
    }
    output[color] = map;
  }

  output.white = "var(--ifm-color-white)";
  output.black = "var(--ifm-color-black)";

  output.gray = Object.fromEntries(
    [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map((value) => [
      value,
      `var(--ifm-color-gray-${value})`,
    ])
  );
  output.emphasis = Object.fromEntries(
    [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map((value) => [
      value,
      `var(--ifm-color-emphasis-${value})`,
    ])
  );

  output.content = "var(--ifm-color-content)";
  output["content-inverse"] = "var(--ifm-color-content-inverse)";
  output["content-secondary"] = "var(--ifm-color-content-secondary)";

  return output;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./**/*.mdx", "./**/*.md", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...generateColors(),
    },
    extend: {
      backgroundColor: {
        "surface-color": "var(--ifm-background-surface-color)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
