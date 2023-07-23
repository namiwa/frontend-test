import { styled } from "styled-components";

export const StyledDrawer = styled.div<{ $width: number }>`
    background: var(--drawer-background);
    text-align: center;
    font-family: "Inter";
    color: var(--main-font-color);
    ${props => `width: ${props.$width};`}
    position: absolute;
`
