// React
import {PropsWithChildren} from "react"
import {createPortal} from 'react-dom'

// CSS
import modalCSS from "./Modal.module.scss"

// Types
import {ModalProps} from "./Modal.types"

// Framer motion
import {motion} from "framer-motion"

// Components
import Button from "../button/Button"
import Svg from "../svg/Svg"

// Enums
import {ButtonSize, ButtonType} from "../button/Button.types"
import {SvgColors} from "../svg/Svg.types"

// Icons
import {plusIcon} from "../../icons/icons"

function Modal(props: PropsWithChildren<ModalProps>) {

	const modalVariants = {
		hidden: {
			opacity: 0,
			transform: "scale(0.9)",
			pointerEvents: "none",
			transition: {
				duration: 0.25,
			},
		},
		visible: {
			opacity: 1,
			transform: "scale(1)",
			pointerEvents: "unset",
			transition: {
				duration: 0.25,
			},
		},
	}

	return (
		createPortal(
			<motion.div
				className={modalCSS.overlay}
				initial={{ opacity: 0, transform: "scale(0.9)", pointerEvents: "none" }}
				animate={
					props.isModalShown ? modalVariants.visible : modalVariants.hidden
				}
			>
				<Button size={ButtonSize.MEDIUM} type={ButtonType.PRIMARY} onClick={props.onModalClose} additionalClasses={modalCSS.closeModalButton}>
					<Svg
						path={plusIcon}
						width="15"
						height="13"
						viewBox="0 0 13 12"
						color={SvgColors.NEUTRAL}
					/>
				</Button>
				<div className={modalCSS.modal}>
					{props.children}
				</div>
			</motion.div>,
			document.body
		)
	)
}

export default Modal
