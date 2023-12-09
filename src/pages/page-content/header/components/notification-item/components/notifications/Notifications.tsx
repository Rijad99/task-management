// CSS
import notificationsCSS from "./Notifications.module.scss"

// Components
import NotificationsHeader from "./components/notifications-header/NotificationsHeader"
import NotificationsList from "./components/notifications-list/NotificationsList"

// Types
import { NotificationsProps } from "./Notifications.types"

function Notifications({ notifications }: NotificationsProps) {
	return (
		<div className={notificationsCSS.notificationsContainer}>
			<NotificationsHeader />
			<NotificationsList notifications={notifications} />
		</div>
	)
}

export default Notifications
