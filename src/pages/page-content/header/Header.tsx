// React
import { forwardRef, useContext } from "react"

// CSS
import headerCSS from "./Header.module.scss"

// Components
import Search from "./components/search/Search"
import User from "./components/user/User"
import LanguageSelect from "./components/language-select/LanguageSelect"
import NotificationItem from "./components/notification-item/NotificationItem"
import MessageItem from "./components/message-item/MessageItem"

// Data
import { notificationsData } from "./components/notification-item/components/notifications/utils/notifications-mock-data"

// Custom hooks
import useHeaderHook from "./useHeaderHook"

// Context
import { UserContext } from "../../../common/context/user-context/UserContext"
import { LocalizationContext } from "../../../common/context/LocalizationContext"

const Header = forwardRef<HTMLDivElement>((_, ref) => {
  const { currentTitle } = useHeaderHook()

  const { user } = useContext(UserContext)
  const { localization } = useContext(LocalizationContext)

  return (
    <div ref={ref} className={headerCSS.header}>
      <span className={headerCSS.title}>{localization[currentTitle!]}</span>
      <Search />
      <div className={headerCSS.headerRightSide}>
        <LanguageSelect />
        <div className={headerCSS.actions}>
          <MessageItem />
          <NotificationItem notifications={notificationsData} />
        </div>
        <User
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          photo={user.photo}
          status={user.status}
        />
      </div>
    </div>
  )
})

export default Header
