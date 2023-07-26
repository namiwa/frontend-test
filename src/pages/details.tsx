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
    SectionItemWrapper,
    SectionWrapper,
    ButtonWrapper,
    ContactsWrapper,
    ContactsValue,
    ContactsSpanWrapper,
    ContactsLabel
} from "./styledComponents"
import { useGetProviderDetails } from '../utils'
import { Button } from '../components'

const Heading = ({ iconUrl, title }: { iconUrl?: string, title?: string }) => {
    return <HeadingWrapper>
        <DetailsImg src={iconUrl} />
        <HeadingTitle>{title}</HeadingTitle>
    </HeadingWrapper>
}

const LargeSectionItem = ({ title, value }: { title: string, value?: string }) => {
    return <SectionItemWrapper>
        <SectionLabel>{title}</SectionLabel>
        <SectionValue>{value}</SectionValue>
    </SectionItemWrapper>
}

const checkInfo = ['email', 'name', 'url']
const ContactsSection = ({ info }: { info?: {
    email: string,
    name: string,
    url: string
}}) => {
    if (!info) return null
    const data = Object.entries(info)
    .filter(([key]) => checkInfo.includes(key))
    .map(([key, value]) => {
        return <ContactsSpanWrapper>
            <ContactsLabel>
            {key[0].toUpperCase() + key.slice(1)}
            </ContactsLabel>
            <ContactsValue>{value}</ContactsValue>
        </ContactsSpanWrapper>
    })



    return <ContactsWrapper>
        {data}
    </ContactsWrapper>
}

export const Details = () => {
    const params = useParams()
    const { url } = params
    const details = useGetProviderDetails(url!)
    const iconUrl = details?.info['x-logo'].url
    const title = details?.info.title
    const description = details?.info.description
    const swagger = details?.swaggerUrl
    const contactInfo = details?.info.contact
    const navigate = useNavigate()
    return details 
        ? <DetailsWrapper>
            <Heading iconUrl={iconUrl} title={title} />
            <SectionWrapper>
                <LargeSectionItem title='Description' value={description} />
                <LargeSectionItem title='Swagger' value={swagger} />
                <SectionItemWrapper>
                    <SectionLabel>Contact</SectionLabel>
                    <ContactsSection info={contactInfo}/>
                </SectionItemWrapper>
                <ButtonWrapper>
                    <Button onClick={() => navigate('/?open=true')}>
                        <ButtonTitle>Explore more APIs</ButtonTitle>
                    </Button>
                </ButtonWrapper>
            </SectionWrapper>
        </DetailsWrapper>
        : <MainWrapper>Loading data...</MainWrapper>
}