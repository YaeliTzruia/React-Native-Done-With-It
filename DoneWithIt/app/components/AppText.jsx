import { Text } from "react-native"
import defaultStyles from "../config/styles"

export default function AppText({ children, styles, ...otherProps }) {
    return (
        <Text {...otherProps} style={[defaultStyles.text, styles]}>{children}</Text>
    )
}


