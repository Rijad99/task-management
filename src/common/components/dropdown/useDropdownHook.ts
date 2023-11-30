// React
import { useEffect, useRef } from 'react'

// Types
import { DropdownItem } from './components/dropdown-item/DropdownItem.types'



function useDropdownHook(onActionChange: (item: DropdownItem) => void, onOutsideClickDropdownClose: () => void) {
    const dropdownRef = useRef<HTMLDivElement>(null)

    const dropdownVariant = {
        visible: {
            opacity: 1,
            visibility: 'visible',
            transform: "translateY(10px) scale(1)",
            transition: {
                duration: 0.25
            }
        },
        hidden: {
            opacity: 0,
            visibility: 'hidden',
            transform: "translateY(-20px) scale(0.8)",
            transition: {
                duration: 0.25
            }
        }
    }

    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {

            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                onOutsideClickDropdownClose()
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

    return { dropdownRef, dropdownVariant, handleActionChange }
}

export default useDropdownHook
