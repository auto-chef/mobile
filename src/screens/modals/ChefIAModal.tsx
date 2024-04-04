import { ChefIATalk } from "@/assets/ChefIATalk";
import { Title } from "@/components";
import { theme } from "@/styles";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function ChefIAModal() {
  const { goBack } = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <TouchableOpacity
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        onPress={goBack}
      >
        <View />
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          gap: 48,
          elevation: 20,

          padding: 24,
          width: Dimensions.get("window").width,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 1,

          backgroundColor: theme.zinc[950],
          borderColor: theme.zinc[800],
        }}
      >
        <Title style={{ textAlign: "center" }}>
          Como posso atender sua fome hoje?
        </Title>
        <ChefIATalk />
      </View>
    </View>
  );
}
