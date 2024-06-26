import { Image, StyleSheet, View } from "react-native";

import { AutoChefLogo } from "@/assets";
import { useAuth } from "@/hooks";
import { theme } from "@/styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Header() {
  const { navigate } = useNavigation();

  const { user } = useAuth();

  return (
    <View style={[styles.header, user ? styles.logged : undefined]}>
      <AutoChefLogo />

      {user ? (
        <TouchableOpacity onPress={() => navigate("SignOutModal")}>
          <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    padding: 24,

    borderBottomWidth: 1,
    borderColor: theme.zinc[800],
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 6,
    resizeMode: "cover",
  },
  logged: {
    justifyContent: "space-between",
  },
});
