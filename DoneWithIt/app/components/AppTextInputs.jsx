import { StyleSheet, TextInput, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../config/colors"
import defaultStyles from "../config/styles"

export default function AppTextInputs({ icon, width = '100%', ...otherProps }) {

    return (
        <View style={[style.contaier, { width }]}>
            {icon && <MaterialCommunityIcons size={20} color={colors.medium} style={style.icon} name={icon} />}
            <TextInput placeholderTextColor={colors.medium} style={defaultStyles.text} {...otherProps} />
        </View>
    )
}

const style = StyleSheet.create({
    contaier: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },

    icon: {
        marginRight: 10
    }
})