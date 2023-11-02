// CSS
import dropdownCSS from './Dropdown.module.scss'

// Types
import { DropdownItem, DropdownProps } from './Dropdown.types'



function Dropdown({ items, onActionChange }: DropdownProps) {

    const handleStatusChange = (item: DropdownItem) => {
        onActionChange(item)
    }

    return (
        <div className={dropdownCSS.dropdown}>
            <ul>

                {
                    items.map(item => {

                        return (
                            <li key={item.id} className={dropdownCSS.dropdownItem} onClick={() => handleStatusChange(item)}>
                                {item.actionName}
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default Dropdown
