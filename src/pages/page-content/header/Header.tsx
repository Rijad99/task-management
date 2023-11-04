// React
import { forwardRef, useContext } from 'react'

// CSS
import headerCSS from './Header.module.scss'
import utilsCSS from '../../../common/scss/utils.module.scss'

// Components
import Search from './components/search/Search'
import User from './components/user/User'
import Button from '../../../common/components/button/Button'
import Svg from '../../../common/components/svg/Svg'
import LanguageSelect from './components/language-select/LanguageSelect'

// ENUMS
import { ButtonSize, ButtonType } from '../../../common/components/button/Button.types'
import { SvgFillRule, SvgClipRule, SvgColors } from '../../../common/components/svg/Svg.types'

// Custom hooks
import useHeaderHook from './useHeaderHook'

// Context
import { UserContext } from '../../../common/context/UserContext'
import { LocalizationContext } from '../../../common/context/LocalizationContext'

// Icons
import { messageIcon, notificationIcon } from '../../../common/icons/icons'



const Header = forwardRef<HTMLDivElement>((_, ref) => {
    const { currentTitle } = useHeaderHook()

    const { user } = useContext(UserContext)
    const { localization } = useContext(LocalizationContext)

    return (
        <div ref={ref} className={headerCSS.header}>
            <span className={headerCSS.title}>{localization[currentTitle!]}</span>
            <Search />
            <div className={headerCSS.headerRightSide}>
                <div className={headerCSS.actions}>
                    <LanguageSelect />
                    <Button size={ButtonSize.SMALL} type={ButtonType.PRIMARY} onClick={() => null} additionalClasses={utilsCSS.mr05}>
                        <Svg path={messageIcon} width='21' height='19' viewBox='0 -1 19 22' color={SvgColors.NEUTRAL} fillRule={SvgFillRule.EVENODD} clipRule={SvgClipRule.EVENODD} />
                    </Button>
                    <Button size={ButtonSize.SMALL} type={ButtonType.PRIMARY} onClick={() => null}>
                        <Svg path={notificationIcon} width='21' height='19' viewBox='0 -1 19 22' color={SvgColors.NEUTRAL} fillRule={SvgFillRule.EVENODD} clipRule={SvgClipRule.EVENODD} />
                    </Button>
                </div>
                <User firstName={user.firstName} lastName={user.lastName} email={user.email} photo={user.photo} status={user.status} />
            </div>
        </div>
    )
})

export default Header
