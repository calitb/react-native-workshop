import { StatusBar } from "expo-status-bar";
import Page1 from "./Page1";
import Page2 from "./Page2";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";

const MainStack = createNativeStackNavigator();
export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Page1"
          component={Page1}
          options={{ title: "Demo App" }}
        />
        <MainStack.Screen
          name="Page2"
          component={Page2}
          options={{ title: "Add Item" }}
        />
      </MainStack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
