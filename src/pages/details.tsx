import { 
    useParams,
    useNavigate
} from 'react-router-dom'
import { 
    ButtonTitle,
    DetailsImg,
    DetailsWrapper, 
    HeadingTitle, 
    HeadingWrapper, 
    MainWrapper, 
    SectionLabel, 
    SectionValue,
    SectionWrapper
} from "./styledComponents"
import { useGetProviderDetails } from '../utils'
import { Button } from '../components'

const Heading = ({ iconUrl, title }: { iconUrl?: string, title?: string }) => {
    return <HeadingWrapper>
        <DetailsImg src={iconUrl} />
        <HeadingTitle>{title}</HeadingTitle>
    </HeadingWrapper>
}

export const Details = () => {
    const params = useParams()
    const { url } = params
    const details = useGetProviderDetails(url!)
    const iconUrl = details?.info['x-logo'].url
    const title = details?.info.title
    const description = details?.info.description
    const swagger = details?.swaggerUrl
    const navigate = useNavigate()
    return details 
        ? <DetailsWrapper>
            <Heading iconUrl={iconUrl} title={title} />
            <SectionWrapper>
                <SectionLabel>Description</SectionLabel>
                <SectionValue>{description}</SectionValue>
            </SectionWrapper>
            <SectionWrapper>
                <SectionLabel>Swagger</SectionLabel>
                <SectionValue>{swagger}</SectionValue>
            </SectionWrapper>
            <SectionWrapper>
                <SectionLabel>Contact</SectionLabel>
            </SectionWrapper>
            <Button onClick={() => navigate('/?open=true')}>
                <ButtonTitle>Explore more APIs</ButtonTitle>
            </Button>
        </DetailsWrapper>
        : <MainWrapper>Loading data...</MainWrapper>
}