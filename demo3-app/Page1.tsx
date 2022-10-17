import React from "react";
import {
  useColorScheme,
  StyleSheet,
  Text,
  FlatList,
  Button,
  View,
} from "react-native";
import MapboxGL from "@rnmapbox/maps";
import { HomeProps } from "./types/routes";

export default function Page1(props: HomeProps): JSX.Element {
  const scheme = useColorScheme();
  const [features, setFeatures] = React.useState<
    GeoJSON.Feature<GeoJSON.Point>[]
  >([]);

  return (
    <View
      style={[
        styles.container,
        scheme === "dark"
          ? { backgroundColor: "#000" }
          : { backgroundColor: "#fff" },
      ]}
    >
      <MapboxGL.MapView
        style={{ flex: 1 }}
        onPress={(feature: GeoJSON.Feature<GeoJSON.Point>) => {
          const coord = {
            longitude: feature.geometry.coordinates[0],
            latitude: feature.geometry.coordinates[1],
          };
          setFeatures([...features, feature]);
        }}
      >
        {features.map((feature, index) => (
          <MapboxGL.ShapeSource
            key={`${feature.geometry.coordinates[0]}${feature.geometry.coordinates[1]}`}
            id={`${feature.geometry.coordinates[0]}${feature.geometry.coordinates[1]}`}
            shape={feature}
          >
            <MapboxGL.CircleLayer
              id={`${feature.geometry.coordinates[0]}${feature.geometry.coordinates[1]}`}
              style={{
                circleColor: "green",
                circleRadius: 10,
              }}
            ></MapboxGL.CircleLayer>
          </MapboxGL.ShapeSource>
        ))}
      </MapboxGL.MapView>
      <FlatList
        data={features}
        style={{ flex: 1 }}
        renderItem={({ item: feature, index }) => (
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              key={index}
              style={[
                { fontSize: 18 },
                scheme === "dark" ? { color: "#fff" } : { color: "#000" },
              ]}
            >
              {`${feature.geometry.coordinates[0].toFixed(
                6
              )}, ${feature.geometry.coordinates[1].toFixed(6)}`}
            </Text>
            <Button
              onPress={() => {
                setFeatures(features.filter((_, i) => i !== index));
              }}
              title="Delete"
            />
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
