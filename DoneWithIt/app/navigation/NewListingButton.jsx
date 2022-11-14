import { MaterialCommunityIcons } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import colors from "../config/colors";


export default function NewListingButton({ onPress }) {



    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.container}>
                <MaterialCommunityIcons name="plus-circle" color={colors.white} size={35} />
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 20,
        height: 80,
        width: 80,

    }
})