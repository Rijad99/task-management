// CSS
import userCSS from './User.module.scss'

// Components
import Status from '../../../../status/Status'

// Types
import { UserProps } from './User.types'


function User({ firstName, lastName, email, photo, status, _onStatusChange }: UserProps) {

    return (
        <div className={userCSS.userContainer}>
            <img src={photo} className={userCSS.photo} />
            <div className={userCSS.userInfo}>
                <span className={userCSS.name}>
                    {`${firstName} ${lastName}`} 
                    <Status status={status} />
                </span>
                <span className={userCSS.email}>{email}</span>
            </div>
        </div>
    )
}

export default User
