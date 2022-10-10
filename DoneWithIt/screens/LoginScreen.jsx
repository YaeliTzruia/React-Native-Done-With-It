import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup"
import { AppFormField, SubmitButton, AppForm } from "../components/forms"


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

export default function LoginScreen() {


    return (
        <Screen styles={style.containter}>
            <Image style={style.logo} source={require("../assets/logo-red.png")} />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    name="email"
                />
                <AppFormField
                    icon="lock"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                    name="password"
                />
                <SubmitButton title="Login" />

            </AppForm>

        </Screen>
    )
}


const style = StyleSheet.create({
    containter: {
        padding: 10,

    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }

})