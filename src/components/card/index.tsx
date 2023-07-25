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
const CardTitle = ({ title, defaultOpen: open }: Omit<CardProps, 'children'>) => {
    const icon = open ? <OpenIcon /> : <CloseIcon />
    return <TitleWrapper>
        <Title>{title}</Title>{icon}
    </TitleWrapper>
}

export const Card = ({ title, defaultOpen, children }: CardProps) => {
    const [open, setOpen] = useState(defaultOpen)
    return <CardWrapper onClick={() => setOpen((val: boolean) => !val)} >
        <CardTitle title={title} defaultOpen={open} />
        {open && children}
    </CardWrapper>
}