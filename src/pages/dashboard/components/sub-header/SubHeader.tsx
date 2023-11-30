// React
import {useContext} from "react";

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

// Context
import {LocalizationContext} from "../../../../common/context/LocalizationContext";

// Types
import {SubHeaderProps} from "./SubHeader.types";



function SubHeader({ isSelectedProject }: SubHeaderProps) {
    const { localization } = useContext(LocalizationContext)

    return (
        isSelectedProject() &&
            <>
                <Button size={ButtonSize.MEDIUM} type={ButtonType.PRIMARY} onClick={() => null} additionalClasses={subHeaderCSS.addNewButton}>
                    <Svg path={plusIcon} width="16" height="11" viewBox="0 0 13 12" color={SvgColors.WHITE} additionalClasses={utilsCSS.mr05} />
                    {localization.new}
                </Button>
            </>
    )
}

export default SubHeader
