// Types
import { SidebarLink } from "../../utils/types"

// ENUMS
import { SvgColors } from "../../../../svg/Svg.types"

export interface SidebarItemProps {
	sidebarLink: SidebarLink
	color: SvgColors
	activeRoute?: boolean
	onRouteChange: () => void
}
