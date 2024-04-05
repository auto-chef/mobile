import { mapStyle } from "@/helpers";
import { theme } from "@/styles";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

interface MapProps {
  origin?: {
    lat: number;
    lng: number;
  };
}

export function Map({ origin }: MapProps) {
  return (
    <MapView
      userInterfaceStyle="dark"
      customMapStyle={mapStyle}
      style={styles.map}
      initialRegion={{
        latitude: origin.lat,
        longitude: origin.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && (
        <Marker
          coordinate={{
            latitude: origin.lat,
            longitude: origin.lng,
          }}
          pinColor={theme.primary[500]}
          title="Você está aqui!"
          description="Rua Purpurina, 131, Vila Madalena"
          identifier="origin"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
