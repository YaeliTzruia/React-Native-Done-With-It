import { Image, StyleSheet, View, TouchableWithoutFeedback, Alert } from "react-native"
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";


export default function ImageInput({ imageUri, onChangeImage }) {

    const requestPermission = async () => {
        // const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        console.log(granted, "granted");
        if (!granted) {
            alert("You need to enable permission to access the library");
        }
    };

    useEffect(() => {
        requestPermission()
    }, [])

    const handlePress = () => {
        if (!imageUri) {
            selectImage()
        } else {
            Alert.alert('Delete', "are you sure you want to delete this image?", [
                { text: 'Yes', onPress: () => onChangeImage(null) },
                { text: "No" }
            ])
        }
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.cancelled) {
                onChangeImage(result.uri);
            }
        } catch (error) {
            console.log(error, "Error reading image");
        }
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={style.container}>
                {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />}
                {imageUri && <Image source={{ uri: imageUri }} style={style.image} />}
            </View>
        </TouchableWithoutFeedback>
    );

}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: "center",
        height: 100,
        width: 100,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%",

    }
})