import { Platform } from "react-native";

import colors from "./colors";

export default {
  text: {
    fontSize: Platform.OS === "android" ? 15 : 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
};
