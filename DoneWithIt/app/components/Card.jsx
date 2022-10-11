import { View, StyleSheet, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../config/colors";
import AppText from "./AppText";

export default function Card({ title, subTitle, image, onPress }) {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={style.card}>

                <Image style={style.image} source={image} />
                <View style={style.detailsContainter}>
                    <AppText styles={style.title}>{title}</AppText>
                    <AppText styles={style.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const style = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"

    },
    detailsContainter: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    },
    title: {
        marginBottom: 7
    }
})