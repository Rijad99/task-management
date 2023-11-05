// React
import { useContext } from 'react'

// CSS
import dropdownItemCSS from './DropdownItem.module.scss'

// Types
import { DropdownItem as ItemDropdown , DropdownItemProps } from './DropdownItem.types'

// Context
import { LocalizationContext } from '../../../../context/LocalizationContext'



function DropdownItem({ item, onActionChange }: DropdownItemProps) {
    const { localization } = useContext(LocalizationContext)

    const handleActionChange = (item: ItemDropdown) => {
        onActionChange(item)
    }

    return (
        <li className={dropdownItemCSS.dropdownItem} onClick={() => handleActionChange(item)}>
            {item.icon && item.icon}
            {localization[item.actionName]}
        </li>
    )
}

export default DropdownItem
