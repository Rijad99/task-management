// React
import { useContext, useState } from "react"

// Components
import Button from "../../../../../common/components/button/Button"
import Svg from "../../../../../common/components/svg/Svg"
import Tooltip from "../../../../../common/components/tooltip/Tooltip"
import Popup from "../../../../../common/components/popup/Popup"
import Notifications from "./components/notifications/Notifications"

// ENUMS
import {
	ButtonSize,
	ButtonType,
} from "../../../../../common/components/button/Button.types"
import {
	SvgClipRule,
	SvgColors,
	SvgFillRule,
} from "../../../../../common/components/svg/Svg.types"
import { TooltipPosition } from "../../../../../common/components/tooltip/Tooltip.types"
import { NotificationState } from "./components/notifications/components/notifications-list/components/notification/Notification.types"

// Icons
import { notificationIcon } from "../../../../../common/icons/icons"

// CSS
import notificationItemCSS from "./NotificationItem.module.scss"
import utilsCSS from "../../../../../common/scss/utils.module.scss"

//Context
import { LocalizationContext } from "../../../../../common/context/LocalizationContext"
import { NotificationItemProps } from "./NotificationItem.types"

function NotificationItem({ notifications }: NotificationItemProps) {
	const [isNotificationsPopupShown, setIsNotificationsPopupShown] =
		useState<boolean>(false)

	const newNotifications = notifications.filter(
		notification => notification.state === NotificationState.UNREAD,
	)

	const { localization } = useContext(LocalizationContext)

	const handleShowNotificationsPopup = () => {
		setIsNotificationsPopupShown(!isNotificationsPopupShown)
	}

	return (
		<div className={notificationItemCSS.notificationItem}>
			<Tooltip
				text={`${newNotifications.length} ${localization.newNotifications}`}
				position={TooltipPosition.BOTTOM}
				tooltipClasses={`${notificationItemCSS.notificationTooltip} ${utilsCSS.mr1}`}
			>
				<Button
					size={ButtonSize.SMALLEST}
					type={ButtonType.PRIMARY}
					onClick={handleShowNotificationsPopup}
					additionalClasses={notificationItemCSS.notificationButton}
				>
					<Svg
						path={notificationIcon}
						width="21"
						height="19"
						viewBox="0 -1 19 22"
						color={SvgColors.NEUTRAL}
						fillRule={SvgFillRule.EVENODD}
						clipRule={SvgClipRule.EVENODD}
					/>
					{notifications.length > 0 && (
						<div className={notificationItemCSS.notificationCircle}></div>
					)}
				</Button>
			</Tooltip>
			<Popup
				isPopupShown={isNotificationsPopupShown}
				onOutsideClickPopupClose={() => setIsNotificationsPopupShown(false)}
			>
				<Notifications notifications={notifications} />
			</Popup>
		</div>
	)
}

export default NotificationItem
