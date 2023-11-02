// CSS
import userCSS from './User.module.scss'

// Components
import UserStatus from '../../../../../common/components/status/UserStatus'
import Dropdown from '../../../../../common/components/dropdown/Dropdown'

// Types
import { UserProps } from './User.types'
import { DropdownItem } from '../../../../../common/components/dropdown/Dropdown.types'

// Data
import { userStatusData } from '../../../../../common/components/status/utils/user-status-mock-data'



function User({ firstName, lastName, email, photo, status }: UserProps) {

    const handleChangeStatus = (item: DropdownItem) => {
        console.log('Status')
        console.log(item)
    }

    return (
        <div className={userCSS.userContainer}>
            <img src={photo} className={userCSS.photo} />
            <div className={userCSS.userInfo}>
                <span className={userCSS.name}>
                    {`${firstName} ${lastName}`} 
                    <UserStatus status={status} />
                </span>
                <span className={userCSS.email}>{email}</span>
                <Dropdown items={userStatusData} onActionChange={handleChangeStatus} />
            </div>
        </div>
    )
}

export default User
