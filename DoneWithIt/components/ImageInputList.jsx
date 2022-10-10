import { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {

    const scrollView = useRef()


    return (
        <View>
            <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
                <View style={style.container}>
                    {imageUris.map((uri) => (
                        <View key={uri} style={style.image}>
                            <ImageInput imageUri={uri} onChangeImage={() => {
                                onRemoveImage(uri)
                            }} />
                        </View>
                    ))}
                    <ImageInput onChangeImage={(uri) => { onAddImage(uri) }} />
                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        marginRight: 10,
    }
})