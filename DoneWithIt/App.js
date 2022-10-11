import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Text } from "react-native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import Screen from "./app/components/Screen";
import NavigationTheme from "./app/navigation/NavigationTheme";
import RegisterScreen from "./app/screens/RegisterScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
