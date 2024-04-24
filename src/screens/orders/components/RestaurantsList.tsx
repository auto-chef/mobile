import { restaurants } from "@/mocks";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export function RestaurantsList() {
  const { navigate } = useNavigation();
  return (
    <FlatList
      horizontal
      data={restaurants}
      renderItem={({ item: restaurant }) => (
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigate("ChefIAModal", { restaurant: restaurant.name })
          }
        >
          <Image source={{ uri: restaurant.image_url }} style={styles.image} />
        </TouchableOpacity>
      )}
      keyExtractor={(restaurant) => String(restaurant.id)}
      ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: 56,
    overflow: "hidden",
    borderRadius: 8,
  },
  image: {
    objectFit: "cover",
    width: 56,
    height: 56,
  },
});
