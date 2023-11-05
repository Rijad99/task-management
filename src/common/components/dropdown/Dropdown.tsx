// React
import { forwardRef, useImperativeHandle } from 'react'

// CSS
import dropdownCSS from './Dropdown.module.scss'

import DropdownItem from './components/dropdown-item/DropdownItem'

// Types
import { DropdownProps } from './Dropdown.types'

// Dropdown hook
import useDropdownHook from './useDropdownHook'



const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, outerRef) => {
    const { dropdownRef, handleActionChange } = useDropdownHook(props.onActionChange)

    useImperativeHandle(outerRef, () => dropdownRef.current!, []);

    return (
        <div ref={dropdownRef} className={dropdownCSS.dropdown}>
            <ul>
                {
                    props.items.map(item => {

                        return (
                            <DropdownItem key={item.id} item={item} onActionChange={handleActionChange} />
                        )
                    })
                }
            </ul>
        </div>
    )
})

export default Dropdown
