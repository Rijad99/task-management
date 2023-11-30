// React
import {createRef, useEffect, useState} from "react"

// Types
import {Option} from "./components/options/Options.types"



function useSelectHook(onOptionChange: (option: Option) => void) {

    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false)

    const optionsRef = createRef<HTMLUListElement>()

    const handleSelectOpen = () => {
        setIsSelectOpen(!isSelectOpen)
    }

    const handleOptionChange = (option: Option) => {
        onOptionChange(option)

        setIsSelectOpen(false)
    }

    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {

            if (optionsRef.current && !optionsRef.current.contains(e.target as Node)) {
                setIsSelectOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    return { optionsRef, isSelectOpen, handleSelectOpen, handleOptionChange }
}

export default useSelectHook
