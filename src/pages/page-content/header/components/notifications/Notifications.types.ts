export interface NotificationsProps {
    notifications: Notification[]
}

interface Notification {
    id: string | number
    title: string
    description: string
    onNotificationClose: (notification: Notification) => void
    onNotificationOpen: (notification: Notification) => void
}
