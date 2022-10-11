import { Text, Image, StyleSheet, ImageBackground, View, Button } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {

    return (
        <ImageBackground blurRadius={9} style={style.background} source={require("../assets/background.jpg")}>
            <View style={style.logoContainer}>
                <Image style={style.logo} source={require("../assets/logo-red.png")} />
                <AppText styles={style.tagline}>Sell what we don't need</AppText>

            </View>
            <View style={style.buttonsContainter}>
                <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)} />
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
        paddingbottom: 50,

    },
    logoContainer: {
        alignItems: "center",
        top: 70,
        position: "absolute",


    },
    tagline: {

        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }

})