// CSS
import userCSS from './User.module.scss'

// Components
import UserStatus from '../../../../../common/components/status/UserStatus'
import Dropdown from '../../../../../common/components/dropdown/Dropdown'

// Types
import { UserProps } from './User.types'

// Data
import { userStatusData } from '../../../../../common/components/status/utils/user-status-mock-data'

// User hook
import useUserHook from './useUserHook'



function User({ firstName, lastName, email, photo, status }: UserProps) {
    const { dropdownRef, handleChangeStatus, handleStatusDropdownOpen } = useUserHook()

    return (
        <div className={userCSS.userContainer}>
            <img src={photo} className={userCSS.photo} />
            <div className={userCSS.userInfo}>
                <span className={userCSS.name}>
                    {`${firstName} ${lastName}`} 
                    <UserStatus status={status} onStatusDropdownOpen={handleStatusDropdownOpen} />
                </span>
                <span className={userCSS.email}>{email}</span>
                <Dropdown ref={dropdownRef} items={userStatusData} onActionChange={handleChangeStatus} />
            </div>
        </div>
    )
}

export default User
