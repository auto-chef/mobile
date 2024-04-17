import {
  LocationObject,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useState } from "react";

export function useLocation() {
  const [location, setLocation] = useState<LocationObject | null>();

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  return {
    location,
    requestLocationPermissions,
  };
}
