import { styled } from "styled-components";

export const StyledDrawer = styled.div`
    background: var(--main-background);
    text-align: center;
    font-family: "Inter";
    color: var(--main-font-color);
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 40%;
    z-index: 1000;
    overflow: hidden;
`

export const Wrapper = styled.div`
    --transition-speed: 0.3s;
    &-open {
        transform: translateX(0);
    }
`

export const Mask = styled.div`
    background: rgba(0, 0, 0, 0.7);
    transition: opacity var(--transition-speed) ease,
        visibility var(--transition-speed) ease;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 999;
    pointer-events: auto;
    cursor: pointer;
    padding: 0px;
`

export const DrawerTitle = styled.div`
    font-family: "Inter";
    font-weight: 500;
    font-size: 24px;
    line-height: 29.05px;
    padding-top: 10px;
`

export const ChildrenWrapper = styled.div`
    padding: 10px;
    max-height: 100%;
    overflow: scroll;
`