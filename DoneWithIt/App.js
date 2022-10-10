import { useEffect, useState } from "react";
import Screen from "./components/Screen";
import * as ImagePicker from "expo-image-picker";
import ListingEditScreen from "./screens/ListingEditScreen";
import LoginScreen from "./screens/LoginScreen";
import MessagesScreen from "./screens/MessagesScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
// import * as Permissions from "expo-permissions";
import { Image } from "react-native";
import AppButton from "./components/AppButton";
import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageInputList";

export default function App() {
  return <WelcomeScreen />;
}
