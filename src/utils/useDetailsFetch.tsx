import axios from "axios"
import { useState, useEffect } from "react"

type DetailsData = {
    swaggerUrl: string,
    info: {
        contact: {
            email: string,
            name: string,
            url: string
        }
        description: string,
        title: string,
        "x-logo": {
            url: string
        }
    }
}

interface DetailsRepsonse {
    apis: Record<string, DetailsData>
}

export const useGetProviderDetails = (url: string) => {
   const [data, setData] = useState<DetailsData>()
   useEffect(() => {
    const fetchDetailsData = async (url: string) => {
        const res = await axios.get(`https://api.apis.guru/v2/${url}.json`)
        const data = (res.data as DetailsRepsonse).apis
        // match partial key
        const keys = Object.keys(data)
        const details = data[keys[0] as keyof typeof data]
        setData(details)
    }
    fetchDetailsData(url)
   },[url])
   return data
}

export default useGetProviderDetails
