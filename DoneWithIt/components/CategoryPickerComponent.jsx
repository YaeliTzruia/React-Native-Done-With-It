import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

export default function CategoryPickerComponent({ item, onPress }) {

    return (
        <View style={style.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon
                    backgroundColor={item.backgroundColor}
                    name={item.icon}
                    size={80}
                />
            </TouchableOpacity>
            <Text style={style.label}>{item.label}</Text>
        </View>
    )


}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%",
    },
    label: {
        marginTop: 5,
        textAlign: "center"
    }
})