// React
import { createRef, useContext } from 'react'

// CSS
import userCSS from './User.module.scss'
import dropdownCSS from '../../../../../common/components/dropdown/Dropdown.module.scss'

// Components
import UserStatus from '../../../../../common/components/status/UserStatus'
import Dropdown from '../../../../../common/components/dropdown/Dropdown'

// Types
import { UserProps } from './User.types'
import { DropdownItem } from '../../../../../common/components/dropdown/Dropdown.types'

// Data
import { userStatusData } from '../../../../../common/components/status/utils/user-status-mock-data'

// Context
import { UserContext } from '../../../../../common/context/UserContext'



function User({ firstName, lastName, email, photo, status }: UserProps) {
    const { user, setUser } = useContext(UserContext) 

    const dropdownRef = createRef<HTMLDivElement>()

    const handleChangeStatus = (item: DropdownItem) => {
        setUser({
            ...user,
            status: item.actionName
        })

        dropdownRef.current?.classList.remove(dropdownCSS.dropdownVisible)
    }

    const handleStatusDropdownOpen = () => {
        dropdownRef.current?.classList.toggle(dropdownCSS.dropdownVisible)
    }

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
