// Status hook
import useStatusHook from "./useStatusHook"

// ENUMS
import { UserStatus } from "../page-content/header/components/user/User.types"

// Types
import { StatusProps } from "./Status.types"

// CSS
import statusCSS from './Status.module.scss'



function Status({ status }: StatusProps) {
    const { getStatus } = useStatusHook()

    return (
        <div className={`${statusCSS.circle} ${statusCSS.status}`}></div>
    )
}

export default Status
