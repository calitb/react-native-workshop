import { StatusBar } from "expo-status-bar";
import Page1 from "./Page1";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "expo-constants";

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import MapboxGL from "@rnmapbox/maps";

MapboxGL.setAccessToken(Constants.manifest?.extra?.MAPBOX_TOKEN);

const MainStack = createNativeStackNavigator();
export default function App(): JSX.Element {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Page1"
          component={Page1}
          options={{ title: "Demo App" }}
        />
      </MainStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
