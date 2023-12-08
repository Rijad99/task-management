// React
import { useContext } from "react"

// CSS
import userCSS from "./User.module.scss"
import utilsCSS from "../../../../../common/scss/utils.module.scss"
import statusCSS from "../../../../../common/components/user-status/UserStatus.module.scss"

// Components
import UserStatus from "../../../../../common/components/user-status/UserStatus"
import Dropdown from "../../../../../common/components/dropdown/Dropdown"
import Tooltip from "../../../../../common/components/tooltip/Tooltip"

// ENUMS
import { TooltipPosition } from "../../../../../common/components/tooltip/Tooltip.types"

// Types
import { UserProps } from "./User.types"

// Data
import { userStatusData } from "../../../../../common/components/user-status/utils/user-status-mock-data"

// User hook
import useUserHook from "./useUserHook"

// Context
import { LocalizationContext } from "../../../../../common/context/LocalizationContext"

function User({ firstName, lastName, email, photo, status }: UserProps) {
  const {
    isUserStatusDropdownOpen,
    setIsUserStatusDropdownOpen,
    handleChangeStatus,
    handleStatusDropdownOpen,
  } = useUserHook()

  const { localization } = useContext(LocalizationContext)

  return (
    <div className={userCSS.userContainer}>
      <img src={photo} className={userCSS.photo} />
      <div className={userCSS.userInfo}>
        <span className={userCSS.name}>
          {`${firstName} ${lastName}`}
          <Tooltip
            text={localization[status]}
            position={TooltipPosition.RIGHT}
            tooltipContainerClasses={utilsCSS.ml05}
            tooltipClasses={
              statusCSS[status.split(" ").join("_").toLowerCase()]
            }
          >
            <UserStatus
              status={status}
              onStatusDropdownOpen={handleStatusDropdownOpen}
            />
          </Tooltip>
        </span>
        <span className={userCSS.email}>{email}</span>
        <Dropdown
          isDropdownOpen={isUserStatusDropdownOpen}
          items={userStatusData}
          onActionChange={handleChangeStatus}
          onOutsideClickDropdownClose={() => setIsUserStatusDropdownOpen(false)}
        />
      </div>
    </div>
  )
}

export default User
