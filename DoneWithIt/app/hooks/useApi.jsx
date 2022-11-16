import { useState } from "react"

export default function useApi(apiFunc) {

    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    const request = async (...args) => {
        setLoading(true)
        const response = await apiFunc(...args)
        setLoading(false)
        if (!response.ok) return setError(true)

        setError(false)
        console.log(response.data, "response.data")

        setData(response.data)

    }
    return { request, data, error, loading }

}