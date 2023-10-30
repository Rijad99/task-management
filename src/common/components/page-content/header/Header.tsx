// React
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// CSS
import headerCSS from './Header.module.scss'

// Utils
import { setTitle } from './utils'



function Header() {
    const [currentTitle, setCurrentTitle] = useState<string | null>(null)

    const location = useLocation()

    useEffect(() => {
        const title = setTitle(location.pathname)

        setCurrentTitle(title)
    }, [location.pathname])

    return (
        <div className={headerCSS.header}>
            <span className={headerCSS.title}>{currentTitle}</span>
        </div>
    )
}

export default Header
