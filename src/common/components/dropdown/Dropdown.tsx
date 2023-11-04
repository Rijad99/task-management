// React
import { forwardRef, useContext } from 'react'

// CSS
import dropdownCSS from './Dropdown.module.scss'

// Types
import { DropdownItem, DropdownProps } from './Dropdown.types'

// Context
import { LocalizationContext } from '../../context/LocalizationContext'



const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
    const { localization } = useContext(LocalizationContext)

    const handleActionChange = (item: DropdownItem) => {
        props.onActionChange(item)
    }

    return (
        <div ref={ref} className={dropdownCSS.dropdown}>
            <ul>

                {
                    props.items.map(item => {

                        return (
                            <li key={item.id} className={dropdownCSS.dropdownItem} onClick={() => handleActionChange(item)}>
                                {item.icon && item.icon}
                                {localization[item.actionName]}
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
})

export default Dropdown
