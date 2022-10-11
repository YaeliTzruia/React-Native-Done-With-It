import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function AppButton({ title, onPress, color = "primary" }) {

    return (
        <TouchableOpacity style={[style.button, { backgroundColor: colors[color] }]} onPress={onPress}>

            <Text style={style.text}>{title}</Text>

        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10,

    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransformation: 'uppercase',
        fontWeight: "bold"
    }
})