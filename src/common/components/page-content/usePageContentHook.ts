// React
import { createRef, useEffect, useRef } from 'react'



function usePageContentHook() {
    const sidebarRef = createRef<HTMLDivElement>()
    const headerRef = useRef<HTMLDivElement>(null)
    const pageContentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const sidebarWidth = sidebarRef.current?.getBoundingClientRect().width

        pageContentRef.current!.style.width = `calc(100vw - ${sidebarWidth}px)`
        headerRef.current!.style.width = `calc(100vw - ${sidebarWidth}px)`
    }, [])

    const handlePageContentWidthUpdate = () => {

        setTimeout(() => {
            const sidebarWidth = sidebarRef.current?.getBoundingClientRect().width

            pageContentRef.current!.style.width = `calc(100vw - ${sidebarWidth}px)`
            headerRef.current!.style.width = `calc(100vw - ${sidebarWidth}px)`
        }, 200);
    }

    return { sidebarRef, headerRef, pageContentRef, handlePageContentWidthUpdate }
}

export default usePageContentHook
