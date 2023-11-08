// CSS
import userCSS from './User.module.scss'

// Types
import { UserProps } from './User.types'

// Components
import Button from '../../../../../../common/components/button/Button'
import Svg from '../../../../../../common/components/svg/Svg'

// ENUMS
import { ButtonSize, ButtonType } from '../../../../../../common/components/button/Button.types'
import { SvgColors, SvgStrokeLineCap, SvgStrokeLineJoin } from '../../../../../../common/components/svg/Svg.types'

// Icons
import { arrowIcon } from '../../../../../../common/icons/icons'
import UserStatus from '../../../../../../common/components/status/UserStatus'


function User({ user }: UserProps) {

    return (
        <Button type={ButtonType.PRIMARY} size={ButtonSize.LARGE} additionalClasses={userCSS.userContainer} onClick={() => null}>
            <div className={userCSS.user}>
                <img src={user.photo} />
                <div className={userCSS.userInfo}>
                    <span className={userCSS.name}>{`${user.firstName} ${user.lastName}`}</span>
                    <div className={userCSS.statusContainer}>
                        <UserStatus status={user.status} />
                        <span className={userCSS.status}>{user.status}</span>
                    </div>
                </div>
            </div>
            <Svg path={arrowIcon} width='8' height='6' strokeWidth='1.5' viewBox='0 0 12 7' stroke={SvgColors.BLACK} strokeLinecap={SvgStrokeLineCap.ROUND} strokeLinejoin={SvgStrokeLineJoin.ROUND} additionalClasses={userCSS.arrow} />
        </Button>
    )
}

export default User
