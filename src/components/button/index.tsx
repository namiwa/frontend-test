import { ReactNode } from "react"
import { StyledButton } from "./styledComponents"

interface ButtonProps {
    children?: ReactNode,
    onClick?: CallableFunction,
}

export const Button = ({ children, onClick }: ButtonProps) => {
    return <StyledButton onClick={() => onClick && onClick()}>
        {children}
    </StyledButton>
}
