import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";


export default {
    ...DefaultTheme,
    document: {
        dir: 'rtl'
    },
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white
    }
}