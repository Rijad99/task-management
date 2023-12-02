// React
import {PropsWithChildren} from "react"

// CSS
import popupCSS from './Popup.module.scss'

// Framer motion
import {motion} from "framer-motion"

// Types
import {PopupProps} from "./Popup.types"
import usePopupHook from "./usePopupHook";



function Popup(props: PropsWithChildren<PopupProps>) {
    const { popupRef, popupVariant } = usePopupHook(props.onOutsideClickPopupClose)

    return (
        <motion.div ref={popupRef} className={popupCSS.popupContainer} initial={{ opacity: 0, transform: "translateY(-10px) scale(0.8)" }} animate={props.isPopupShown ? popupVariant.visible : popupVariant.hidden} variants={popupVariant}>
            {props.children}
        </motion.div>
    )
}

export default Popup
