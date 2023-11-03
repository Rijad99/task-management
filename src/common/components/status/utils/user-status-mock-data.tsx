// Types
import { DropdownItem } from "../../dropdown/Dropdown.types"

// CSS
import userStatusCSS from '../UserStatus.module.scss'
import utilsCSS from '../../../scss/utils.module.scss'



export const userStatusData: DropdownItem[] = [
    {
        id: 0,
        actionName: 'Online',
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.green} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 1,
        actionName: 'Offline',
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.gray} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 2,
        actionName: 'Away',
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.orange} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 3,
        actionName: 'Busy',
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.red} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 4,
        actionName: 'Do not disturb',
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.red} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 5,
        actionName: 'In a meeting',
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.red} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 6,
        actionName: 'Out of office',
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.purple} ${utilsCSS.mr05}`}></div>
    }
]
