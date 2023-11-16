// CSS
import popupCSS from './Popup.module.scss'

// Types
import { PopupProps } from './Popup.types'


function Popup({ title, description }: PopupProps) {

    return (
        
        <div className={popupCSS.popupContainer}>
            <div className={popupCSS.popup}>
                <h3 className={popupCSS.title}>{title}</h3>
                <span className={popupCSS.description}>{description}</span>
            </div>
        </div>
    )
}

export default Popup
