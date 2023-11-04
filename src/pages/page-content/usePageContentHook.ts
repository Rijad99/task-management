// React
import { createRef, useEffect, useRef, useContext } from 'react'

// Context
import { LocalizationContext } from '../../common/context/LocalizationContext'



function usePageContentHook() {
    const sidebarRef = createRef<HTMLDivElement>()
    const headerRef = useRef<HTMLDivElement>(null)
    const pageContentRef = useRef<HTMLDivElement>(null)
    
    const { localization } = useContext(LocalizationContext)

    useEffect(() => {
        const sidebarWidth = sidebarRef.current?.getBoundingClientRect().width

        pageContentRef.current!.style.width = `calc(100vw - ${sidebarWidth}px)`
        headerRef.current!.style.width = `calc(100vw - ${sidebarWidth}px)`
    }, [localization])

    const handlePageContentWidthUpdate = () => {

        const sidebarTimeout = setTimeout(() => {
            const sidebarWidth = sidebarRef.current?.getBoundingClientRect().width

            pageContentRef.current!.style.width = `calc(100vw - ${sidebarWidth}px)`
            headerRef.current!.style.width = `calc(100vw - ${sidebarWidth}px)`

            clearTimeout(sidebarTimeout)
        }, 200)
    }

    return { sidebarRef, headerRef, pageContentRef, handlePageContentWidthUpdate }
}

export default usePageContentHook
