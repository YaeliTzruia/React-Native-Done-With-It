import { StyleSheet } from "react-native";
import AppText from "../AppText";


export default function ErrorMessage({ error, visible }) {

    if (!visible || !error) return null;

    return (
        <AppText styles={style.error}>{error}</AppText>
    )
}

const style = StyleSheet.create({
    error: { color: "red" }
})