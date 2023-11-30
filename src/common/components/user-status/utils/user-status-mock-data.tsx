// Types
import { DropdownItem } from '../../dropdown/components/dropdown-item/DropdownItem.types'

// ENUMS
import {UserStatus} from "../../../../pages/page-content/header/components/user/User.types";

// CSS
import userStatusCSS from '../UserStatus.module.scss'
import utilsCSS from '../../../scss/utils.module.scss'



export const userStatusData: DropdownItem[] = [
    {
        id: 0,
        actionName: UserStatus.ONLINE,
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.green} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 1,
        actionName: UserStatus.OFFLINE,
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.gray} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 2,
        actionName: UserStatus.AWAY,
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.orange} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 3,
        actionName: UserStatus.BUSY,
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.red} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 4,
        actionName: UserStatus.DO_NOT_DISTURB,
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.red} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 5,
        actionName: UserStatus.IN_A_MEETING,
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.red} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 6,
        actionName: UserStatus.OUT_OF_OFFICE,
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.purple} ${utilsCSS.mr05}`}></div>
    }
]
