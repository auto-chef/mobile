import { OrderStatus } from "@/models";

export const theme = {
  white: "#FFFFFF",
  primary: {
    500: "#EB3F12",
    700: "#AA2214",
  },
  zinc: {
    50: "#FAFAFA",
    100: "#F4F4F5",
    200: "#E4E4E7",
    300: "#D4D4D8",
    400: "#A1A1AA",
    500: "#71717A",
    600: "#52525B",
    700: "#3F3F46",
    800: "#27272A",
    900: "#18181B",
    950: "#09090B",
  },
  border: "#FFFFFF1A",
  amber: {
    500: "#F59E0B",
  },
  green: {
    500: "#22C55E",
  },
  red: {
    500: "#EF4444",
  },
};

export const fontFamily = {
  regular: "text_regular",
  medium: "text_medium",
  bold: "text_bold",
};

export const statusColors: Record<OrderStatus, string> = {
  PENDING: theme.zinc[500],
  ACCEPTED: theme.amber[500],
  REJECTED: theme.red[500],
  DELIVERED: theme.green[500],
};
