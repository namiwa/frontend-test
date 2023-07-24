import { styled, keyframes } from "styled-components";

const drawerOpenAnimation = keyframes`
    0%: { left: 0%; }
    33%: { left: 10%: }
    66%: { left: 20% }
    100%: { left: 30% }
`

export const StyledDrawer = styled.div<{ $width: number }>`
    background: var(--drawer-background);
    text-align: center;
    font-family: "Inter";
    color: var(--main-font-color);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 10px;
`

