// React
import { useContext } from "react"

// Components
import Button from "../../../../../common/components/button/Button"
import Svg from "../../../../../common/components/svg/Svg"

// CSS
import sidebarItemCSS from "./SidebarItem.module.scss"

// Types
import { SidebarItemProps } from "./SidebarItem.types"
import {
	ButtonSize,
	ButtonType,
} from "../../../../../common/components/button/Button.types"

// ENUMS
import {
	SvgFillRule,
	SvgClipRule,
} from "../../../../../common/components/svg/Svg.types"
import { Paths } from "../../../../../common/utils/paths"

// Context
import { LocalizationContext } from "../../../../../common/context/LocalizationContext"

function SidebarItem({
	sidebarLink,
	color,
	activeRoute,
	onRouteChange,
}: SidebarItemProps) {
	const { localization } = useContext(LocalizationContext)

	return (
		<Button
			additionalClasses={`${
				sidebarLink.linkTo !== Paths.LOGOUT && sidebarItemCSS.sidebarItem
			} ${activeRoute ? sidebarItemCSS.active : ""} ${
				sidebarLink.linkTo === Paths.LOGOUT && sidebarItemCSS.logoutSidebarItem
			}`}
			size={ButtonSize.MEDIUM}
			type={ButtonType.PRIMARY}
			onClick={onRouteChange}
		>
			<Svg
				path={sidebarLink.icon}
				width="21"
				height="19"
				viewBox="0 -1 19 22"
				color={color}
				fillRule={SvgFillRule.EVENODD}
				clipRule={SvgClipRule.EVENODD}
			/>
			<span className={sidebarItemCSS.name}>
				{localization[sidebarLink.name]}
			</span>
		</Button>
	)
}

export default SidebarItem
