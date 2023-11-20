// Types
import { DropdownItem } from '../../dropdown/components/dropdown-item/DropdownItem.types'

// CSS
import userStatusCSS from '../UserStatus.module.scss'
import utilsCSS from '../../../scss/utils.module.scss'



export const userStatusData: DropdownItem[] = [
    {
        id: 0,
        actionName: 'online',
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.green} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 1,
        actionName: 'offline',
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.gray} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 2,
        actionName: 'away',
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.orange} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 3,
        actionName: 'busy',
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.red} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 4,
        actionName: 'doNotDisturb',
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.red} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 5,
        actionName: 'inAMeeting',
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.red} ${utilsCSS.mr05}`}></div>
    },
    {
        id: 6,
        actionName: 'outOfOffice',
        icon: <div className={`${userStatusCSS.circle} ${userStatusCSS.purple} ${utilsCSS.mr05}`}></div>
    }
]
