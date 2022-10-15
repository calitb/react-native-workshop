import React from "react";
import {
  useColorScheme,
  StyleSheet,
  Text,
  FlatList,
  Button,
  View,
  TouchableOpacity,
} from "react-native";
import MapboxGL from "@rnmapbox/maps";

export default function Page1() {
  const scheme = useColorScheme();
  const [coords, setCoords] = React.useState([
    { longitude: 7.523231, latitude: 7.523231 },
  ]);

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
        onPress={(event) => {
          const coord = {
            longitude: event.geometry.coordinates[0],
            latitude: event.geometry.coordinates[1],
          };
          setCoords([...coords, coord]);
        }}
      >
        {coords.map((coord, index) => (
          <MapboxGL.PointAnnotation
            key={`pointAnnotation${coord.longitude}${coord.latitude}`}
            id={`pointAnnotation${coord.longitude}${coord.latitude}`}
            coordinate={[coord.longitude, coord.latitude]}
          >
            <TouchableOpacity
              onPress={() => {
                setCoords(coords.filter((_, i) => i !== index));
              }}
            >
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: "#00cccc",
                  borderRadius: 50,
                  borderColor: "#fff",
                  borderWidth: 3,
                }}
              />
            </TouchableOpacity>
          </MapboxGL.PointAnnotation>
        ))}
      </MapboxGL.MapView>
      <FlatList
        data={coords}
        style={{ flex: 1 }}
        renderItem={({ item: coord, index }) => (
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
              {`${coord.longitude.toFixed(6)}, ${coord.latitude.toFixed(6)}`}
            </Text>
            <Button
              onPress={() => {
                setCoords(coords.filter((_, i) => i !== index));
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
