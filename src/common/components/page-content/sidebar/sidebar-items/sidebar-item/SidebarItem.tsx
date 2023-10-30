// Components
import Button from "../../../../button/Button"
import Svg from "../../../../svg/Svg"

// CSS
import sidebarItemCSS from './SidebarItem.module.scss'

// Types
import { SidebarItemProps } from "./SidebarItem.types"
import { ButtonSize, ButtonType } from "../../../../button/Button.types"

// ENUMS
import { SvgFillRule, SvgClipRule } from "../../../../svg/Svg.types"
import { Paths } from "../../../../../utils/paths"



function SidebarItem({ sidebarLink, color, activeRoute, onRouteChange }: SidebarItemProps) {

    return (
        <Button additionalClasses={`${sidebarLink.linkTo !== Paths.LOGOUT && sidebarItemCSS.sidebarItem} ${activeRoute ? sidebarItemCSS.active : ''} ${sidebarLink.linkTo === Paths.LOGOUT && sidebarItemCSS.logoutSidebarItem}`} size={ButtonSize.SMALL} type={ButtonType.PRIMARY} onClick={onRouteChange} >
            <Svg path={sidebarLink.icon} width='21' height='19' viewBox='0 -1 19 22' color={color} fillRule={SvgFillRule.EVENODD} clipRule={SvgClipRule.EVENODD} />
            <span className={sidebarItemCSS.name}>{sidebarLink.name}</span>
        </Button>
    )
}

export default SidebarItem
