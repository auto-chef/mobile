import { Button, Title } from "@/components";
import { theme } from "@/styles";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

interface ConfirmationModalProps {
  text: string;
  onConfirm: () => void;
  cancelText: string;
  confirmText: string;
  confirmColor: string;
}

export function ConfirmationModal({
  text,
  onConfirm,
  cancelText,
  confirmColor,
  confirmText,
}: ConfirmationModalProps) {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backdrop} onPress={goBack}>
        <View />
      </TouchableOpacity>
      <View style={styles.content}>
        <Title style={styles.text}>{text}</Title>
        <View style={styles.buttonsContainer}>
          <Button style={{ flex: 1 }} variant="secondary" onPress={goBack}>
            {cancelText}
          </Button>
          <Button
            style={{ flex: 1, backgroundColor: confirmColor }}
            onPress={onConfirm}
          >
            {confirmText}
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  content: {
    position: "absolute",

    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    elevation: 20,

    padding: 24,
    width: "90%",
    borderRadius: 20,
    borderWidth: 1,

    backgroundColor: theme.zinc[950],
    borderColor: theme.zinc[800],
  },
  backdrop: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 8,
  },
});
