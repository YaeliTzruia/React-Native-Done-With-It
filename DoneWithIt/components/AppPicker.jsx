import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../config/colors"
import AppText from "./AppText"
import { useState } from "react"
import Screen from "./Screen"
import { FlatList } from "react-native-gesture-handler"
import PickerItem from "./PickerItem"


export default function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem, width = "100%", PickerItemComponent = PickerItem, numberOfColumns = 1 }) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => {
                setModalVisible(true)
            }}>
                <View style={[style.contaier, width = { width }]}>
                    {icon &&
                        <MaterialCommunityIcons size={20} color={colors.medium} style={style.icon} name={icon}
                        />
                    }
                    {selectedItem ? <AppText styles={style.text}>
                        {selectedItem.label}
                    </AppText> : <AppText styles={style.placeholder}>
                        {placeholder}
                    </AppText>
                    }
                    <MaterialCommunityIcons size={20} color={colors.medium} name="chevron-down" />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => {
                        setModalVisible(false)
                    }} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()} numColumns={numberOfColumns}
                        renderItem={({ item }) =>
                            <PickerItemComponent
                                item={item}
                                onPress={() => {
                                    setModalVisible(false)
                                    onSelectItem(item)
                                }}
                            />
                        } />

                </Screen>
            </Modal>
        </>
    )
}

const style = StyleSheet.create({
    contaier: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },

    icon: {
        marginRight: 10
    },
    placeholder: {
        color: colors.medium,
        flex: 1,
    },
    text: {
        flex: 1
    },
})