// CSS
import notificationCSS from "./Notification.module.scss"

// Components
import Button from "../../../../../../../../../../../common/components/button/Button"
import UserStatus from "../../../../../../../../../../../common/components/user-status/UserStatus"

// Types
import {
  NotificationProps,
  NotificationTypes,
  NotificationState,
} from "./Notification.types"
import {
  ButtonSize,
  ButtonType,
} from "../../../../../../../../../../../common/components/button/Button.types"

// Notification hook
import useNotificationHook from "./useNotificationHook"

function Notification({ notification }: NotificationProps) {
  const { localization, description, userInitials, initialsCircleColor } =
    useNotificationHook(notification)

  return (
    <div
      className={`${notificationCSS.notification} ${
        notification.state === NotificationState.READ
          ? notificationCSS.read
          : notificationCSS.unread
      }`}
    >
      <div
        className={`${
          notification.user.photo
            ? notificationCSS.circle
            : `${notificationCSS.initialsCircle} ${notificationCSS[initialsCircleColor]}`
        }`}
      >
        {notification.user.photo ? (
          <img src={notification.user.photo} />
        ) : (
          userInitials
        )}
        <UserStatus
          status={notification.user.status}
          additionalClasses={notificationCSS.userStatus}
        />
      </div>
      <div className={notificationCSS.content}>
        <span className={notificationCSS.description}>{description}</span>
        <span className={notificationCSS.sentDate}>
          {notification.sentDate}
        </span>
        {notification.type === NotificationTypes.REQUEST_TO_EDIT && (
          <div className={notificationCSS.actions}>
            <Button
              size={ButtonSize.SMALL}
              type={ButtonType.PRIMARY}
              onClick={() => null}
              additionalClasses={notificationCSS.acceptButton}
            >
              {localization.accept}
            </Button>
            <Button
              size={ButtonSize.SMALL}
              type={ButtonType.PRIMARY}
              onClick={() => null}
              additionalClasses={notificationCSS.denyButton}
            >
              {localization.deny}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Notification
