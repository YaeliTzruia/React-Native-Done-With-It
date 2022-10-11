import { StyleSheet, Image, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function ViewImageScreen() {
    return (
        <View style={style.containter}>
            <View style={style.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={35} />

            </View>
            <View style={style.deleteIcon}>

                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
            </View>
            <Image resizeMode="contain" style={style.image} source={require("../assets/chair.jpg")} /></View>
    )
}
const style = StyleSheet.create({
    containter: {
        backgroundColor: colors.black,
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%"
    },
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30,
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
    }
})