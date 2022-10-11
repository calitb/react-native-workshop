import { useState, useLayoutEffect, useEffect } from "react";
import {
  StyleSheet,
  Text,
  useColorScheme,
  FlatList,
  Button,
} from "react-native";

export default function Page1(props) {
  const [items, setItems] = useState([]);
  const scheme = useColorScheme();

  useEffect(() => {
    if (props.route.params?.input) {
      setItems([...items, props.route.params.input]);
    }
  }, [props.route.params?.input]);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            props.navigation.navigate("Page2");
          }}
          title="Add Item"
        />
      ),
    });
  }, [props.navigation]);

  return (
    <FlatList
      style={[
        styles.container,
        scheme === "dark"
          ? { backgroundColor: "#000" }
          : { backgroundColor: "#fff" },
      ]}
      data={items}
      renderItem={({ item }) => (
        <Text
          style={[scheme === "dark" ? { color: "#fff" } : { color: "#000" }]}
        >
          {item}
        </Text>
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
