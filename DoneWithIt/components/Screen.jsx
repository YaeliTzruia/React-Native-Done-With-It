import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native"

export default function Screen({ children, styles }) {

    return (

        <SafeAreaView style={[style.screen, styles]}>
            <View style={[style.view, styles]}>{children}</View>
        </SafeAreaView>
    )


}


const style = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    }, view: {
        flex: 1,
    }
})