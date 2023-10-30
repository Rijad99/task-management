// React
import { forwardRef } from 'react'

// CSS
import '../../../scss/main.scss'
import sidebarCSS from './Sidebar.module.scss'

// Components
import Logo from './logo/Logo'
import SidebarItems from './sidebar-items/SidebarItems'

// Types
import { SidebarProps } from './Sidebar.types'



const Sidebar = forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {

    return (
        <div ref={ref} className={sidebarCSS.sidebar}>
            <Logo />
            <SidebarItems onPageContentWidthChange={props.onPageContentWidthChange} />
        </div>
    )
})

export default Sidebar
