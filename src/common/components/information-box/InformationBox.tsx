// CSS
import popupCSS from './InformationBox.module.scss'

// Types
import { InformationBoxProps } from './InformationBox.types'


function InformationBox({ title, description }: InformationBoxProps) {

    return (
        
        <div className={popupCSS.informationBoxContainer}>
            <div className={popupCSS.informationBox}>
                <h3 className={popupCSS.title}>{title}</h3>
                <span className={popupCSS.description}>{description}</span>
            </div>
        </div>
    )
}

export default InformationBox
