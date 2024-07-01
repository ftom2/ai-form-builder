export const THEMES: ITheme[] = [
  {
    "color-scheme": "light",
    primary: "#570df8",
    "primary-content": "#ffffff",
    secondary: "#f000b8",
    accent: "#37cdbe",
    neutral: "#3d4451",
    "base-100": "#ffffff",
    info: "#3abff8",
    success: "#36d399",
    warning: "#fbbd23",
    error: "#f87272",
    theme: "light",
  },
  {
    "color-scheme": "dark",
    primary: "#661AE6",
    "primary-content": "#ffffff",
    secondary: "#D926AA",
    accent: "#1FB2A5",
    neutral: "#191D24",
    "base-100": "#2A303C",
    info: "#3ABFF8",
    success: "#36D399",
    warning: "#FBBD23",
    error: "#F87272",
    theme: "dark",
  },
  {
    "color-scheme": "light",
    primary: "#65c3c8",
    "primary-content": "#ffffff",
    secondary: "#ef9fbc",
    accent: "#eeaf3a",
    neutral: "#291334",
    "base-100": "#faf7f5",
    info: "#3abff8",
    success: "#36d399",
    warning: "#fbbd23",
    error: "#f87272",
    theme: "cupcake",
  },
  {
    "color-scheme": "light",
    primary: "#e0a82e",
    "primary-content": "#181830",
    secondary: "#f9d72f",
    accent: "#181830",
    neutral: "#181830",
    "base-100": "#ffffff",
    info: "#3abff8",
    success: "#36d399",
    warning: "#fbbd23",
    error: "#f87272",
    theme: "bumblebee",
  },
];

//create an interface for the themes
export interface ITheme {
  "color-scheme": string;
  primary: string;
  "primary-content": string;
  secondary: string;
  accent: string;
  neutral: string;
  "base-100": string;
  info: string;
  success: string;
  warning: string;
  error: string;
  theme: string;
}

export const GRADIENTS = [
  {
    name: "Sunset",
    gradient: "linear-gradient(to right, #ff4e50, #f9d423)",
    isDark: false,
  },
  {
    name: "Ocean",
    gradient: "linear-gradient(to right, #2193b0, #6dd5ed)",
    isDark: false,
  },
  {
    name: "Forest",
    gradient: "linear-gradient(to right, #134e5e, #71b280)",
    isDark: true,
  },
  {
    name: "Amethyst",
    gradient: "linear-gradient(to right, #9d50bb, #6e48aa)",
    isDark: true,
  },
  {
    name: "Peach",
    gradient: "linear-gradient(to right, #ed4264, #ffedbc)",
    isDark: false,
  },
  {
    name: "Moonlight",
    gradient: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    isDark: true,
  },
  {
    name: "Emerald",
    gradient: "linear-gradient(to right, #43cea2, #185a9d)",
    isDark: false,
  },
  {
    name: "Lavender",
    gradient: "linear-gradient(to right, #834d9b, #d04ed6)",
    isDark: true,
  },
  {
    name: "Cherry",
    gradient: "linear-gradient(to right, #eb3349, #f45c43)",
    isDark: false,
  },
  {
    name: "Skyline",
    gradient: "linear-gradient(to right, #1488cc, #2b32b2)",
    isDark: true,
  },
];
