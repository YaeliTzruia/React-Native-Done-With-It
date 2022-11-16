import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card"
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings"
import { useEffect, useState } from "react";
import AppText from "../components/AppText";
import Button from "../components/AppButton"
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";


export default function ListingsScreen({ navigation }) {

    const getListingsApi = useApi(listingsApi.getListings)

    useEffect(() => {
        getListingsApi.request()

    }, []);





    return (
        <Screen styles={style.screen}>
            {getListingsApi.error && <>
                <AppText>Couldn't retreve the listings.</AppText>
                <Button title="Retry" onPress={getListingsApi.loadListings} /></>}
            <ActivityIndicator visible={getListingsApi.loading} />
            <FlatList
                data={getListingsApi.data}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
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