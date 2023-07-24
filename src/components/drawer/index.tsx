import { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from "react"
import { StyledDrawer } from "./styledComponents"
import { createPortal } from "react-dom"

interface DrawerProps {
    width: number
    title: string
    open: boolean
    children: ReactNode
}

const DrawerPanel = ({ 
    drawerRef, 
    width, 
    title, 
    children 
}: Omit<DrawerProps, 'open'> & {
    drawerRef: MutableRefObject<HTMLDivElement | null>
}) => <StyledDrawer $width={width} ref={drawerRef}>
    <div>{title}</div>
    {children}
</StyledDrawer>

export const Drawer = ({ width, title, open, children }: DrawerProps) => {
    const [_open, setOpen] = useState(open)
    const drawerRef = useRef<HTMLDivElement | null>(null)
    const Panel = useCallback(() => <DrawerPanel
        drawerRef={drawerRef}
        width={width} 
        title={title} 
        children={children}
    />, [children, title, width, drawerRef])

    return createPortal(<Panel />, document.body, 'drawer-panel')
}
