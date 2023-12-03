// React
import {useRef} from "react"

// Custom Hooks
import useOutsideClickHook from "../../custom-hooks/useOutsideClickHook"



function usePopupHook(onOutsideClickPopupClose: () => void) {
    const popupRef = useRef<HTMLDivElement>(null as HTMLDivElement)

    useOutsideClickHook(popupRef, onOutsideClickPopupClose)

    const popupVariant = {
        visible: {
            opacity: 1,
            transform: "translateY(0px) scale(1)",
            transition: {
                duration: 0.25
            }
        },
        hidden: {
            opacity: 0,
            transform: "translateY(-10px) scale(0.8)",
            transition: {
                duration: 0.25
            }
        }
    }

    return { popupRef, popupVariant }
}

export default usePopupHook
