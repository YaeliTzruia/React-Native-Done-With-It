import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

export default function PickerItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText styles={style.text}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    text: {
        padding: 20,
    }
})