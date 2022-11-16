import LottieView from "lottie-react-native"

export default function ActivityIndicator({ visible = false }) {

    if (!visible) return null;
    return <LottieView autoPlay loop source={require("../assets/animations/lf30_editor_4uak2nng.json")}></LottieView>

}