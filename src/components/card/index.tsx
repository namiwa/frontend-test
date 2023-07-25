import { ReactNode, useState } from "react";

import Open from './open.svg'
import Close from './close.svg'
import { 
    CardWrapper, 
    Title, 
    TitleWrapper
} from "./styledComponents";

export interface CardProps {
    title: string
    defaultOpen: boolean
    children: ReactNode
}

const OpenIcon = () => <img src={Open} />
const CloseIcon = () => <img src={Close} />
const CardTitle = ({ title, open, onClick }: Omit<CardProps, 'children' | 'defaultOpen'> & {
    onClick: CallableFunction,
    open: boolean
}) => {
    const icon = open ? <OpenIcon /> : <CloseIcon />
    return <TitleWrapper onClick={() => onClick()}>
        <Title>{title}</Title>{icon}
    </TitleWrapper>
}

export const Card = ({ title, defaultOpen, children }: CardProps) => {
    const [open, setOpen] = useState(defaultOpen)
    return <CardWrapper $open={open}>
        <CardTitle
            title={title}
            open={open}
            onClick={() => setOpen((val: boolean) => !val)}
        />
        {open && children}
    </CardWrapper>
}