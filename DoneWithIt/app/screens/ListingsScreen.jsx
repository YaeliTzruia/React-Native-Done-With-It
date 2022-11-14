import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card"
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings"
import { useEffect, useState } from "react";


export default function ListingsScreen({ navigation }) {

    const [listings, setListings] = useState([])

    useEffect(() => {
        loadListings()
        console.log(listingsApi, "listingsApi")
    }, []);


    const loadListings = async () => {
        const response = await listingsApi.getListings()
        console.log(response.data, "response.data")
        setListings(response.data)


    }

    return (
        <Screen styles={style.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.image[0].url}
                    />
                }
            />
        </Screen>
    )
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.light
    }
})