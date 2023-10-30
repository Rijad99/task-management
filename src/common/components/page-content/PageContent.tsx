// React
import { createRef, useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'

// CSS
import PageContentCSS from './PageContent.module.scss'

// Components
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'



function PageContent() {
    const sidebarRef = createRef<HTMLDivElement>()
    const pageContentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const sidebarWidth = sidebarRef.current?.getBoundingClientRect().width

        pageContentRef.current!.style.width = `calc(100vw - ${sidebarWidth}px)`
    }, [])

    const handlePageContentWidthUpdate = () => {

        setTimeout(() => {
            const sidebarWidth = sidebarRef.current?.getBoundingClientRect().width
            pageContentRef.current!.style.width = `calc(100vw - ${sidebarWidth}px)`
        }, 200);
    }

    return (
        <>
            <Sidebar ref={sidebarRef} onPageContentWidthChange={handlePageContentWidthUpdate} />
            <div ref={pageContentRef} className={PageContentCSS.pageContentLayout}>
                <Header />
                <Outlet />
            </div>
        </>
    )
}

export default PageContent
