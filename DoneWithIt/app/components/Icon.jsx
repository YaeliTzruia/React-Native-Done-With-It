import { View, StyleSheet } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function Icon({
    name,
    size = 50, 
    backgroundColor="#000", 
    iconColor="#fff"
}){


return(
<View style={{ width:size, height:size, borderRadius: size/2,
backgroundColor, justifyContent:"center", alignItems:"center" }}>
<MaterialCommunityIcons size={size * 0.5} color={iconColor} name={name}/>
</View>
)

}

const style = StyleSheet.create({

})