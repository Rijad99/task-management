// Types
import { NotificationsListProps } from "./NotificationsList.types"
import Notification from "./components/notification/Notification"

function NotificationsList({ notifications }: NotificationsListProps) {
  return notifications.map(notification => {
    return <Notification key={notification.id} notification={notification} />
  })
}

export default NotificationsList
