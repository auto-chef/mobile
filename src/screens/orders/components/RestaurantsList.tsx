import { Skeleton } from "@/components";
import { toast } from "@/helpers";
import { RestaurantModel } from "@/models";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getRestaurantsRequest } from "../requests";

export function RestaurantsList() {
  const { navigate } = useNavigation();
  const [restaurants, setRestaurants] = useState<RestaurantModel[]>([]);

  useEffect(() => {
    async function loadRestaurants() {
      try {
        const { data } = await getRestaurantsRequest();

        setRestaurants(data);
      } catch (error) {
        toast({
          type: "error",
          text1: "Não foi possível carregar os restaurantes.",
        });
      }
    }

    loadRestaurants();
  }, []);

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
      ListEmptyComponent={() => (
        <View style={{ flexDirection: "row", gap: 12 }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton
              width={56}
              height={56}
              key={`skeleton-restaurant-${index}`}
            />
          ))}
        </View>
      )}
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
