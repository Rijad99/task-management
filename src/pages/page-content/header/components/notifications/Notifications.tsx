// React
import { useContext } from 'react'

// Components
import Button from "../../../../../common/components/button/Button"
import Svg from "../../../../../common/components/svg/Svg"
import Tooltip from "../../../../../common/components/tooltip/Tooltip"

// ENUMS
import { ButtonSize, ButtonType } from "../../../../../common/components/button/Button.types"
import { SvgColors, SvgFillRule, SvgClipRule } from "../../../../../common/components/svg/Svg.types"
import { TooltipPosition } from "../../../../../common/components/tooltip/Tooltip.types"

// Icons
import { notificationIcon } from "../../../../../common/icons/icons"

// CSS
import notificationsCSS from './Notifications.module.scss'
import utilsCSS from '../../../../../common/scss/utils.module.scss'

//Context
import { LocalizationContext } from "../../../../../common/context/LocalizationContext"
import { NotificationsProps } from './Notifications.types'



function Notifications({ notifications }: NotificationsProps) {
    const { localization } = useContext(LocalizationContext)

    return (
        <Tooltip text={`7 ${localization.newNotifications}`} position={TooltipPosition.BOTTOM} tooltipClasses={`${notificationsCSS.notificationTooltip} ${utilsCSS.mr1}`}>
            <Button size={ButtonSize.SMALLEST} type={ButtonType.PRIMARY} onClick={() => null} additionalClasses={notificationsCSS.notification}>
            <Svg path={notificationIcon} width='21' height='19' viewBox='0 -1 19 22' color={SvgColors.NEUTRAL} fillRule={SvgFillRule.EVENODD} clipRule={SvgClipRule.EVENODD} />
            {
                notifications.length > 0 && 
                    <div className={notificationsCSS.notificationCircle}></div>
            }
            </Button>
        </Tooltip>
    )
}

export default Notifications
