// React
import { forwardRef } from 'react'

// CSS
import headerCSS from './Header.module.scss'

// Components
import Search from './components/search/Search'
import User from './components/user/User'

// Custom hooks
import useHeaderHook from './useHeaderHook'

// User photo
import photo from '../../../images/profile-photos/Profile.png'

// ENUMS
import { UserStatus } from './components/user/User.types'



const Header = forwardRef<HTMLDivElement>((_, ref) => {
    const { currentTitle } = useHeaderHook()

    return (
        <div ref={ref} className={headerCSS.header}>
            <span className={headerCSS.title}>{currentTitle}</span>
            <Search />
            <User firstName='John' lastName='Doe' email='johndoe@example.com' photo={photo} status={UserStatus.ONLINE} onStatusChange={() => null} />
        </div>
    )
})

export default Header
