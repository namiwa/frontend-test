// drawer references from: https://letsbuildui.dev/articles/building-a-drawer-component-with-react-portals
import { 
    MutableRefObject, 
    ReactNode, 
    useCallback, 
    useRef 
} from "react"
import { 
    ChildrenWrapper, 
    DrawerTitle, 
    Mask, 
    StyledDrawer, 
    Wrapper 
} from "./styledComponents"
import { createPortal } from "react-dom"

interface DrawerProps {
    title: string
    open: boolean
    children: ReactNode
    onClose: CallableFunction
}

const DrawerPanel = ({ 
    drawerRef,
    title, 
    children,
    onClose
}: Omit<DrawerProps, 'open'> & {
    drawerRef: MutableRefObject<HTMLDivElement | null>
}) => <Wrapper>
    <StyledDrawer ref={drawerRef}>
    <DrawerTitle>{title}</DrawerTitle>
    <ChildrenWrapper>{children}</ChildrenWrapper>
</StyledDrawer>
<Mask onClick={() => onClose()}/>
</Wrapper>

export const Drawer = ({ title, open, children, onClose }: DrawerProps) => {
    const drawerRef = useRef<HTMLDivElement | null>(null)
    const Panel = useCallback(() => <DrawerPanel
        drawerRef={drawerRef}
        title={title} 
        children={children}
        onClose={onClose}
    />, [children, title, onClose, drawerRef])

    return open
        ? createPortal(<Panel />, document.body, 'drawer-panel')
        : null
}
