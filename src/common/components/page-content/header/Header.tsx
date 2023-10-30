// React
import { forwardRef } from 'react'

// CSS
import headerCSS from './Header.module.scss'

// Custom hooks
import useHeaderHook from './useHeaderHook'



const Header = forwardRef<HTMLDivElement>((_, ref) => {
    const { currentTitle } = useHeaderHook()

    return (
        <div ref={ref} className={headerCSS.header}>
            <span className={headerCSS.title}>{currentTitle}</span>
        </div>
    )
})

export default Header
