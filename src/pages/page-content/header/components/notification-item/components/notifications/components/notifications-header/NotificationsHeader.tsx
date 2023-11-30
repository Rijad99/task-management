// React
import {useContext} from "react"


// CSS
import notificationsHeaderCSS from './NotificationsHeader.module.scss'

// Components
import Button from "../../../../../../../../../common/components/button/Button"

// ENUMS
import {ButtonSize, ButtonType} from "../../../../../../../../../common/components/button/Button.types"

// Context
import {LocalizationContext} from "../../../../../../../../../common/context/LocalizationContext"



function NotificationsHeader() {
    const { localization } = useContext(LocalizationContext)

    return (
        <div className={notificationsHeaderCSS.notificationsHeader}>
            <h4 className={notificationsHeaderCSS.title}>{localization.notifications}</h4>
            <Button size={ButtonSize.SMALLEST} type={ButtonType.PRIMARY} onClick={() => null} additionalClasses={notificationsHeaderCSS.markAllAsReadButton}>
                {localization.markAllAsRead}
            </Button>
        </div>
    )
}

export default NotificationsHeader
