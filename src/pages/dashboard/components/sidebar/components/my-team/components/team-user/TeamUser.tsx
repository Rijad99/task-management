// CSS
import teamUserCSS from './TeamUser.module.scss'
import utilsCSS from '../../../../../../../../common/scss/utils.module.scss'

// Types
import { UserProps } from './TeamUser.types'

// Components
import Button from '../../../../../../../../common/components/button/Button'
import Svg from '../../../../../../../../common/components/svg/Svg'

// ENUMS
import { ButtonSize, ButtonType } from '../../../../../../../../common/components/button/Button.types'
import { SvgStrokeLineCap, SvgStrokeLineJoin } from '../../../../../../../../common/components/svg/Svg.types'

// Icons
import { arrowIcon } from '../../../../../../../../common/icons/icons'
import UserStatus from '../../../../../../../../common/components/status/UserStatus'



function TeamUser({ user }: UserProps) {

    const handleShowHideUserDropdown = () => {

    }

    return (
        <Button type={ButtonType.PRIMARY} size={ButtonSize.LARGE} additionalClasses={teamUserCSS.userButton} onClick={handleShowHideUserDropdown}>
            <img src={user.photo} />
            <div className={teamUserCSS.userInfo}>
                <span className={teamUserCSS.name}>{`${user.firstName} ${user.lastName}`}</span>
                <UserStatus status={user.status} showStatusText={true} additionalClasses={utilsCSS.ml05} />
            </div>
            <Svg path={arrowIcon} width='8' height='6' strokeWidth='2' viewBox='0 0 12 7' strokeLinecap={SvgStrokeLineCap.ROUND} strokeLinejoin={SvgStrokeLineJoin.ROUND} additionalClasses={teamUserCSS.arrow} />
        </Button>
    )
}

export default TeamUser
