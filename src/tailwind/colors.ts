import { transparentize } from "polished";
import type { ThemeConfig } from "tailwindcss/types/config";

const bluePalette = {
  10: "#ECF8FF",
  20: "#D9F0FF",
  30: "#C6E9FF",
  40: "#A1DBFF",
  50: "#7BCCFF",
  60: "#42B6FF",
  70: "#309FE6",
  80: "#0076C1",
  90: "#004F80",
  100: "#003B60",
} as const;

const greenPalette = {
  10: "#EBFFF8",
  20: "#D5F5E9",
  30: "#BDE3D6",
  40: "#77C5AA",
  50: "#3DBD92",
  60: "#22A075",
  70: "#1B805E",
  80: "#187052",
  90: "#11503A",
  100: "#0A3023",
} as const;

const greyPalette = {
  10: "#F9FAFB",
  20: "#EAEDF1",
  30: "#DBE1E6",
  40: "#BDC7D1",
  50: "#9EADBD",
  60: "#8094A8",
  70: "#647B91",
  80: "#4F6173",
  90: "#3A4855",
  100: "#303B46",
} as const;

const orangePalette = {
  10: "#FFF9E6",
  20: "#FFEDB3",
  30: "#FFE280",
  40: "#FFD64D",
  50: "#FFD033",
  60: "#FFC400",
  70: "#E6B000",
  80: "#B38900",
  90: "#6B5200",
  100: "#4D3B00",
} as const;

const redPalette = {
  10: "#FFF0F0",
  20: "#FFD9D9",
  30: "#FBADAD",
  40: "#F97A7A",
  50: "#F64D4D",
  60: "#F20000",
  70: "#BF0000",
  80: "#910000",
  90: "#610000",
  100: "#360000",
} as const;

const blue = {
  ...bluePalette,
  DEFAULT: bluePalette[60],
  background: bluePalette[10],
  dark: bluePalette[70],
  light: bluePalette[50],
} as const;

const green = {
  ...greenPalette,
  DEFAULT: greenPalette[60],
  background: greenPalette[10],
  dark: greenPalette[70],
  light: greenPalette[50],
  outline: transparentize(0.8, greenPalette[60]),
} as const;

const orange = {
  ...orangePalette,
  DEFAULT: orangePalette[60],
  background: orangePalette[10],
  dark: orangePalette[70],
  light: orangePalette[50],
  outline: transparentize(0.8, orangePalette[60]),
} as const;

const grey = {
  ...greyPalette,
  DEFAULT: greyPalette[60],
  background: greyPalette[10],
  dark: greyPalette[70],
  light: greyPalette[50],
  outline: transparentize(0.8, greyPalette[60]),
} as const;

const red = {
  ...redPalette,
  DEFAULT: redPalette[60],
  background: redPalette[10],
  dark: redPalette[70],
  light: redPalette[50],
  outline: transparentize(0.8, redPalette[60]),
} as const;

const chathamsBlue = "#124469";
const white = "#FFFFFF";
const whisper = "#F6F7FA";

export const colors = {
  text: chathamsBlue,
  secondaryText: greyPalette[70],
  primary: {
    DEFAULT: greenPalette[60],
    dark: greenPalette[70],
    light: greenPalette[50],
  },
  accent: {
    DEFAULT: bluePalette[60],
    dark: bluePalette[70],
    light: bluePalette[50],
  },
  background: {
    app: whisper,
    greyLight: greyPalette[10],
    white: white,
  },
  border: { dark: greyPalette[40], light: greyPalette[20] },
  blue,
  green,
  orange,
  grey,
  red,
  white,
  black: "#000000",
  inherit: "inherit",
  transparent: "transparent",
  current: "currentColor",
  components: {
    primary: {
      background: green[10],
      base: green[60],
      focus: green[50],
      hover: green[70],
      outline: green.outline,
    },
    warning: {
      background: orange[10],
      base: orange[60],
      focus: orange[50],
      hover: orange[70],
      outline: orange.outline,
    },
    danger: {
      background: red[10],
      base: red[60],
      focus: red[50],
      hover: red[70],
      outline: red.outline,
    },
  },
  "modal-overlay-color": transparentize(0.8, chathamsBlue),
  offScale: {
    candyAppleRed: "#FFB5CB",
    chathamsBlue,
    lavender: "#DED1FA",
    ocre: "#DD8C14",
    whisper,
  },
} as const satisfies ThemeConfig["colors"];
