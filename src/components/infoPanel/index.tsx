import { useNavigate } from 'react-router-dom'
import { useGetProviderDetails } from "../../utils"
import { InfoPanelIcon, InfoPanelTitle, InfoPanelWrapper } from "./styledComponents"

interface InfoPanelProps {
    url: string
}

export const InfoPanel = (props: InfoPanelProps) => {
    const details = useGetProviderDetails(props.url)
    const navigate = useNavigate()
    return <InfoPanelWrapper onClick={() => navigate(`/${props.url}/`)}>
        <InfoPanelIcon src={details?.info["x-logo"].url} />
        <InfoPanelTitle>{details?.info.title}</InfoPanelTitle>
    </InfoPanelWrapper>
}

export default InfoPanel
