// Status hook
import useUserStatusHook from "./useUserStatusHook"

// Types
import { StatusProps } from "./UserStatus.types"

// CSS
import statusCSS from './UserStatus.module.scss'



function UserStatus({ status, showStatusText, additionalClasses, onStatusDropdownOpen }: StatusProps) {
    const { getStatus } = useUserStatusHook()

    const statusColor = getStatus(status)

    return (
        <div className={`${statusCSS.statusContainer} ${additionalClasses ? additionalClasses : ''}`}>
            <div className={`${statusCSS.circle} ${statusCSS.status} ${statusCSS} ${statusCSS[statusColor!]}`} onClick={onStatusDropdownOpen}></div>
            {showStatusText && <span className={statusCSS.statusText}>{status}</span>}
        </div>
    )
}

export default UserStatus
