import { Text, Image, StyleSheet, ImageBackground, View, Button } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppButton from "../components/AppButton";

export default function WelcomeScreen(props) {

    return (
        <ImageBackground blurRadius={9} style={style.background} source={require("../assets/background.jpg")}>
            <View style={style.logoContainer}>
                <Image style={style.logo} source={require("../assets/logo-red.png")} />
                <AppText style={style.tagline}>Sell what we don't need</AppText>

            </View>
            <View style={style.buttonsContainter}>
                <AppButton title="Login" onPress={() => {
                    console.log("tapped")
                }} />
                <AppButton title="Register" color="secondary" onPress={() => {
                    console.log("tapped")
                }} />
            </View>
            <View style={style.registerButton}></View>
        </ImageBackground>
    )

}
const style = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonsContainter: {
        padding: 20,
        width: "100%"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
    },
    logo: {
        width: 100,
        height: 100,

    },
    logoContainer: {
        alignItems: "center",
        position: "absolute",
        top: 70
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }

})