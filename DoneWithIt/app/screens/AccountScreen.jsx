import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import { StyleSheet, View, FlatList } from "react-native"
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
    {
        title: "My Listings",
        Icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
        // targetScreen: "Messages"
    },
    {
        title: "My Messages",
        Icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: "Messages"
    }
]



export default function AccountScreen({ navigation }) {
    return (
        <Screen styles={style.screen}>
            <View style={style.containter}>
                <ListItem
                    title="Yael Tzruia"
                    subTitle="tzruia.yaeli@gmail.com"
                    image={require('../assets/profilepic.jpg')}
                />
            </View>
            <View style={style.containter}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) => (
                        <ListItem title={item.title} IconComponent={
                            <Icon name={item.Icon.name} backgroundColor={item.Icon.backgroundColor}
                            />
                        }
                            onPress={(() => navigation.navigate(item.targetScreen))}
                        />
                    )}

                    ItemSeparatorComponent={ListItemSeperator}
                />
            </View>

            <View>
                <ListItem
                    title="Log Out"
                    IconComponent={
                        <Icon name="logout" backgroundColor="#ffe66d" />
                    }
                />
            </View>
        </Screen>
    )
}

const style = StyleSheet.create({
    containter: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light
    }
})