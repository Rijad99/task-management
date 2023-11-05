// React
import { useEffect, useRef } from 'react'

// Types
import { DropdownItem } from './components/dropdown-item/DropdownItem.types'

// CSS
import dropdownCSS from './Dropdown.module.scss'



function useDropdownHook(onActionChange: (item: DropdownItem) => void) {
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {

            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                dropdownRef.current.classList.remove(dropdownCSS.dropdownVisible)
            }
        }

        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    const handleActionChange = (item: DropdownItem) => {
        onActionChange(item)
    }

    return { dropdownRef, handleActionChange }
}

export default useDropdownHook
