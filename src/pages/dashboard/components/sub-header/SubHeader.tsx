// Components
import Button from "../../../../common/components/button/Button"
import Svg from "../../../../common/components/svg/Svg"

// CSS
import subHeaderCSS from "./SubHeader.module.scss"
import utilsCSS from "../../../../common/scss/utils.module.scss"

// Icons
import {plusIcon} from "../../../../common/icons/icons"

// ENUMS
import {ButtonSize, ButtonType} from "../../../../common/components/button/Button.types"
import {SvgColors} from "../../../../common/components/svg/Svg.types"



function SubHeader() {

    return (
        <>
            <Button size={ButtonSize.SMALL} type={ButtonType.PRIMARY} onClick={() => null} additionalClasses={subHeaderCSS.addNewButton}>
                <Svg path={plusIcon} width="16" height="11" viewBox="0 0 13 12" color={SvgColors.WHITE} additionalClasses={utilsCSS.mr05} />
                New
            </Button>
        </>
    )
}

export default SubHeader
