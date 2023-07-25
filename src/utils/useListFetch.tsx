import axios from "axios"
import { useState, useEffect } from "react"

interface ProvidersResponse {
    data: string[]
}

export const useGetProviders = () => {
    const [data, setData] = useState<ProvidersResponse['data']>([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://api.apis.guru/v2/providers.json")
            const data = (res.data as ProvidersResponse).data
            setData(data)
        }
        fetchData()
    }, [])

    return data
}

export default useGetProviders
