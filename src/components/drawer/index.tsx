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
    width: number
    title: string
    open: boolean
    children: ReactNode
    onClose: CallableFunction
}

const DrawerPanel = ({ 
    drawerRef, 
    width, 
    title, 
    children,
    onClose
}: Omit<DrawerProps, 'open'> & {
    drawerRef: MutableRefObject<HTMLDivElement | null>
}) => <Wrapper>
    <StyledDrawer $width={width} ref={drawerRef}>
    <DrawerTitle>{title}</DrawerTitle>
    <ChildrenWrapper>{children}</ChildrenWrapper>
</StyledDrawer>
<Mask onClick={() => onClose()}/>
</Wrapper>

export const Drawer = ({ width, title, open, children, onClose }: DrawerProps) => {
    const drawerRef = useRef<HTMLDivElement | null>(null)
    const Panel = useCallback(() => <DrawerPanel
        drawerRef={drawerRef}
        width={width} 
        title={title} 
        children={children}
        onClose={onClose}
    />, [children, title, width, onClose, drawerRef])

    return open
        ? createPortal(<Panel />, document.body, 'drawer-panel')
        : null
}
