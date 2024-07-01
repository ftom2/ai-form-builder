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
  {
    "color-scheme": "dark",
    primary: "#e779c1",
    "primary-content": "#1f0721",
    secondary: "#58c7f3",
    accent: "#f3cc30",
    neutral: "#20134e",
    "base-100": "#2d1b69",
    info: "#53c0f3",
    success: "#71ead2",
    warning: "#f3cc30",
    error: "#e24056",
    theme: "synthwave",
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
    name: "none",
    gradient: "none",
    isDark: false,
    border: "hover:border-2 hover:border-gray-600",
  },
  {
    name: "Sunset",
    gradient: "linear-gradient(to right, #ff4e50, #f9d423)",
    isDark: false,
    border: "hover:border-2 hover:border-[#ffaa00]",
  },
  {
    name: "Ocean",
    gradient: "linear-gradient(to right, #2193b0, #6dd5ed)",
    isDark: false,
    border: "hover:border-2 hover:border-[#1a7aff]",
  },
  {
    name: "Forest",
    gradient: "linear-gradient(to right, #134e5e, #71b280)",
    isDark: true,
    border: "hover:border-2 hover:border-[#2ecc71]",
  },
  {
    name: "Amethyst",
    gradient: "linear-gradient(to right, #9d50bb, #6e48aa)",
    isDark: true,
    border: "hover:border-2 hover:border-[#8e44ad]",
  },
  {
    name: "Peach",
    gradient: "linear-gradient(to right, #ed4264, #ffedbc)",
    isDark: false,
    border: "hover:border-2 hover:border-[#ff9ff3]",
  },
  {
    name: "Moonlight",
    gradient: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    isDark: true,
    border: "hover:border-2 hover:border-[#34e7e4]",
  },
  {
    name: "Emerald",
    gradient: "linear-gradient(to right, #43cea2, #185a9d)",
    isDark: false,
    border: "hover:border-2 hover:border-[#00b894]",
  },
  {
    name: "Lavender",
    gradient: "linear-gradient(to right, #834d9b, #d04ed6)",
    isDark: true,
    border: "hover:border-2 hover:border-[#a29bfe]",
  },
  {
    name: "Cherry",
    gradient: "linear-gradient(to right, #eb3349, #f45c43)",
    isDark: false,
    border: "hover:border-2 hover:border-[#ff7675]",
  },
  {
    name: "Skyline",
    gradient: "linear-gradient(to right, #1488cc, #2b32b2)",
    isDark: true,
    border: "hover:border-2 hover:border-[#74b9ff]",
  },
];
