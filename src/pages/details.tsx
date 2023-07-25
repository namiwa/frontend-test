import { useParams } from 'react-router-dom'
import { MainWrapper } from "./styledComponents"

export const Details = () => {
    const params = useParams()
    const { url } = params
    return <MainWrapper>{url}</MainWrapper>
}