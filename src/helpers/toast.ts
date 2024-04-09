import { theme } from "@/styles";
import Toast from "react-native-toast-message";

export const toast = Toast.show;

export const baseToastStyles = {
  contentContainerStyle: { backgroundColor: theme.zinc[800] },
  text1Style: { color: theme.zinc[100] },
  text2Style: { color: theme.zinc[200] },
};
