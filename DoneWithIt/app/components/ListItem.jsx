import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"


import colors from "../config/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ListItem({ onPress, title, subTitle, image, IconComponent, renderRightActios }) {

    return (
        <Swipeable renderRightActions={renderRightActios}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={style.containter}>
                    {IconComponent}
                    {image && <Image style={style.image} source={image} />}
                    <View style={style.detailsContainter}>
                        <AppText numberOfLines={1} styles={style.title}>{title}</AppText>
                        {subTitle && <AppText numberOfLines={2} styles={style.subTitle}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const style = StyleSheet.create({
    containter: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainter: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,

    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colors.medium
    }
})