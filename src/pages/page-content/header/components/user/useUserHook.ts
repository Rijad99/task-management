// React
import { createRef, useContext } from 'react'

// CSS
import dropdownCSS from '../../../../../common/components/dropdown/Dropdown.module.scss'

// Types
import { DropdownItem } from '../../../../../common/components/dropdown/components/dropdown-item/DropdownItem.types'

// Context
import { UserContext } from '../../../../../common/context/user-context/UserContext'



function useUserHook() {
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

    return { dropdownRef, handleChangeStatus, handleStatusDropdownOpen }
}

export default useUserHook
