import { styled } from "styled-components";


export const CardWrapper = styled.div<{ $open?: boolean }>`
    height: 100%;
    width: 100%;
    display: flex;
    padding: 10px;
    flex-direction: column;
    ${props => props.$open && `background: var(--card-focus-background);`}
`

export const Title = styled.span`
    font-family: "Inter";
    font-weight: 400;
    font-size: 24px;
    line-height: 29.05px;
`

export const TitleWrapper = styled.span`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`