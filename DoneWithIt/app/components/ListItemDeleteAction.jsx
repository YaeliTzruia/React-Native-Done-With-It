import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ListItemDeleteAction({ onPress }) {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={style.containter}>
                <MaterialCommunityIcons name="trash-can" size={35}
                    color={colors.white} />
            </View></TouchableWithoutFeedback>
    )

}

const style = StyleSheet.create({
    containter: {
        backgroundColor: colors.danger,
        width: 70,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    }

})