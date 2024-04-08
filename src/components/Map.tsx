import { mapStyle } from "@/helpers";
import { RestaurantModel } from "@/models";
import { theme } from "@/styles";
import { useEffect, useRef } from "react";
import { Image, StyleSheet } from "react-native";
import MapView, { Marker, PanDragEvent } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { GOOGLE_MAPS_API_KEY } from '@env';

interface MapProps {
  origin?: {
    lat: number;
    lng: number;
  };
  destination?: {
    lat: number;
    lng: number;
  };
  restaurant: Pick<RestaurantModel, "name" | "image_url">;
}

export function Map({ origin, destination, restaurant }: MapProps) {
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      },
    });
  }, [origin, destination]);

  function onPanDrag(event: PanDragEvent) {
    const { lat: originLat, lng: originLng } = origin;
    const { lat: destinationLat, lng: destiationLng } = destination;

    const { latitude, longitude } = event.nativeEvent.coordinate;

    if (
      latitude === originLat &&
      longitude === originLng &&
      latitude === destinationLat &&
      longitude === destiationLng
    ) {
      return;
    }

    mapRef.current?.setMapBoundaries(
      {
        latitude: Math.min(originLat, destinationLat),
        longitude: Math.min(originLng, destiationLng),
      },
      {
        latitude: Math.max(originLat, destinationLat),
        longitude: Math.max(originLng, destiationLng),
      }
    );
  }

  return (
    <MapView
      ref={mapRef}
      userInterfaceStyle="dark"
      customMapStyle={mapStyle}
      style={styles.map}
      initialRegion={{
        latitude: origin.lat,
        longitude: origin.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      pitchEnabled={false}
      showsCompass={false}
      showsBuildings={false}
      onPanDrag={onPanDrag}
      minZoomLevel={13}
    >
      {origin && destination && (
        <MapViewDirections
          origin={{
            latitude: origin.lat,
            longitude: origin.lng,
          }}
          destination={{
            latitude: destination.lat,
            longitude: destination.lng,
          }}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={5}
          strokeColor={theme.primary[500]}
        />
      )}
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
          image={require("@/assets/images/origin-marker.png")}
          rotation={60}
        />
      )}
      {destination && (
        <Marker
          coordinate={{
            latitude: destination.lat,
            longitude: destination.lng,
          }}
          pinColor={theme.primary[500]}
          title={restaurant.name}
          description="Av. Paulista 123"
          identifier="destination"
        >
          <Image
            source={{
              uri: restaurant.image_url,
            }}
            style={{ width: 40, height: 40, borderRadius: 8 }}
          />
        </Marker>
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
