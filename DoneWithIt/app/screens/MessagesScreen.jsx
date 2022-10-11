import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";
import colors from "../config/colors";




const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: "D1",
        image: require("../assets/profilepic.jpg")
    },
    {
        id: 2,
        title: 'T2',
        description: "D2",
        image: require("../assets/profilepic.jpg")
    }
]

export default function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = (message) => {
        const newMessages = messages.filter(m => m.id !== message.id)
        setMessages(newMessages)
    }

    console.log(messages, "initialMessages")

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        renderRightActios={() => (<ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}
                        onPress={() => { console.log("message selected", item) }}
                        title={item.title}
                        subTitle={item.description}
                        image={item.image} />
                }
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: "D2",
                            image: require("../assets/profilepic.jpg")
                        }
                    ])
                }}
            />
        </Screen>

    )
}


const style = StyleSheet.create({

})
