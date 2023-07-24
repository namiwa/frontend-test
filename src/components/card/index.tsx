import { ReactNode } from "react";

import OpenIcon from './open.svg'
import CloseIcon from './close.svg'
import { CardWrapper } from "./styledComponents";

export interface CardProps {
    title: string
    open: boolean
    children: ReactNode
}

const CardTitle = ({ title, open }: Omit<CardProps, 'children'>) => {
    const icon = open ? <img src={OpenIcon} /> : <img src={CloseIcon} /> 
    return <span>{title}{icon}</span>
}

export const Card = ({ title, open, children }: CardProps) => {
    return <CardWrapper>
        <CardTitle title={title} open={open} />
        {children}
    </CardWrapper>
}