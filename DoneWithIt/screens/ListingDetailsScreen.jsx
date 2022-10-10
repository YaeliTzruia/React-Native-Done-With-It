import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen(props){
    return(
<View> 
<Image style={style.image} source={require("../assets/jacket.jpeg")}/>
<View style={style.detailsContainter}>
<AppText styles={style.title}>Red jacket for sale</AppText>
<AppText styles={style.price}>$100</AppText>
<View style={style.userContainer}>
<ListItem
image={require("../assets/profilepic.jpg")}
title="Yael Tzruia"
subTitle="5 Listings"
/>
</View>
</View>
</View>
    )
}

const style = StyleSheet.create({
    detailsContainter:{
        padding:20,
    },
    image:{
        width:"100%",
        height:300
    },
    price:{
color:colors.secondary,
fontWeight:"bold",
fontSize:20,
marginVertical:10
    },
    title:{
        fontSize:24,
        fontWeight:"500"
    },
    userContainer:{
        marginVertical:40,
    }
    
})