// Components
import Button from '../../../button/Button'
import Svg from '../../../svg/Svg'
import SidebarItem from './sidebar-item/SidebarItem'

// Types
import { SidebarItemsProps } from './SidebarItems.types'

// ENUMS
import { SvgColors, SvgStrokeLineCap, SvgStrokeLineJoin } from '../../../svg/Svg.types'
import { ButtonSize, ButtonType } from '../../../button/Button.types'

// CSS
import utilsCSS from '../../../../scss/utils.module.scss'
import sidebarCSS from '../Sidebar.module.scss'

// SidebarItems hook
import useSidebarItemsHook from './useSidebarItemsHook'

// Icons
import { arrowIcon } from '../../../../icons/icons'



function SidebarItems({ onPageContentWidthChange }: SidebarItemsProps) {
    const { links, logoutLink, sidebarRef, handleNavigateTo, handleActiveRoute, handleOpenSidebar } = useSidebarItemsHook(onPageContentWidthChange)

    return (
        <>
            <div ref={sidebarRef} className={`${utilsCSS.max_height} ${utilsCSS.mt4} ${utilsCSS.flex} ${utilsCSS.flex_column} ${utilsCSS.jc_sb}`}>
                <div className={sidebarCSS.sidebarItems}>
                    
                    {
                        links.map(sidebarLink => {
                            const activeRoute = handleActiveRoute(sidebarLink.linkTo)

                            return (
                                <SidebarItem key={sidebarLink.id} sidebarLink={sidebarLink} color={SvgColors.NEUTRAL} activeRoute={activeRoute} onRouteChange={() => handleNavigateTo(sidebarLink.linkTo)} />
                            )
                        })
                    }

                </div>
                <SidebarItem sidebarLink={logoutLink} color={SvgColors.RED} onRouteChange={() => handleNavigateTo(logoutLink.linkTo)} />
            </div>
            <Button size={ButtonSize.SMALL} type={ButtonType.PRIMARY} additionalClasses={sidebarCSS.expandSidebarButton} onClick={handleOpenSidebar}>
                <Svg path={arrowIcon} width='8' height='6' strokeWidth='1.5' viewBox='0 0 12 7' stroke={SvgColors.BLACK} strokeLinecap={SvgStrokeLineCap.ROUND} strokeLinejoin={SvgStrokeLineJoin.ROUND} additionalClasses={sidebarCSS.leftArrow} />
                <Svg path={arrowIcon} width='8' height='6' strokeWidth='1.5' viewBox='0 0 12 7' stroke={SvgColors.BLACK} strokeLinecap={SvgStrokeLineCap.ROUND} strokeLinejoin={SvgStrokeLineJoin.ROUND} additionalClasses={sidebarCSS.rightArrow} />
            </Button>
        </>
    )
}

export default SidebarItems
