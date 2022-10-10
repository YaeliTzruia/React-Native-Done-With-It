import AppTextInputs from "../AppTextInputs"
import ErrorMessage from "./ErrorMessage"
import { useFormikContext } from "formik"

export default function AppFormField({ name, width, ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

    return (
        <>
            <AppTextInputs width={width} onBlur={() => { setFieldTouched(name) }} onChangeText={handleChange(name)}
                {...otherProps}
            />
            <ErrorMessage visible={touched[name]} error={errors[name]} />
        </>
    )
}