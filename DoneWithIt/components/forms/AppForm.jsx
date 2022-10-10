import { Formik } from "formik"


export default function AppForm({ initialValues, onSubmit, children, validationSchema }) {

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() =>
                <>
                    {children}
                </>
            }
        </Formik>
    )
}