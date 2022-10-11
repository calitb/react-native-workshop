import { useState } from "react";
import {
  TextInput,
  useColorScheme,
  StyleSheet,
  View,
  Button,
} from "react-native";

export default function Page2(props) {
  const [input, setInput] = useState("");
  const scheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        scheme === "dark"
          ? { backgroundColor: "#000" }
          : { backgroundColor: "#fff" },
      ]}
    >
      <TextInput
        value={input}
        onChangeText={setInput}
        style={[
          styles.input,
          scheme === "dark" ? { color: "#fff" } : { color: "#000" },
        ]}
      />
      <Button
        title="Save"
        onPress={() => {
          props.navigation.navigate("Page1", { input });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderColor: "green",
    borderWidth: 2,
    padding: 10,
    width: "100%",
  },
});
