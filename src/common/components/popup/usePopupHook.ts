// React
import {useEffect, useRef} from "react"



function usePopupHook(onOutsideClickPopupClose: () => void) {
    const popupRef = useRef<HTMLDivElement>(null)

    const popupVariant = {
        visible: {
            opacity: 1,
            visibility: 'visible',
            transform: "translateY(0px) scale(1)",
            transition: {
                duration: 0.25
            }
        },
        hidden: {
            opacity: 0,
            visibility: 'hidden',
            transform: "translateY(-10px) scale(0.8)",
            transition: {
                duration: 0.25
            }
        }
    }

    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {

            if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
                onOutsideClickPopupClose()
            }
        }

        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    return { popupRef, popupVariant }
}

export default usePopupHook
