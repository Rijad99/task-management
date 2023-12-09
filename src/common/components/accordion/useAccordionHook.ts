// React
import { useState } from "react"

// Framer motion
import { useAnimate } from "framer-motion"

function useAccordionHook() {
	const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(true)

	const [accordionContentScope, animateAccordionContentScope] =
		useAnimate<HTMLDivElement>()
	const [arrow, animateArrow] = useAnimate<SVGSVGElement>()

	const accordionContentVariant = {
		open: {
			opacity: 1,
			height: "auto",
		},
		closed: {
			opacity: 0,
			height: 0,
		},
	}

	const arrowVariant = {
		rotate: {
			transform: "rotate(180deg)",
			transition: {
				duration: 0.25,
			},
		},
		rotateToInitial: {
			transform: "rotate(0deg)",
			transition: {
				duration: 0.25,
			},
		},
	}

	return {
		isAccordionOpen,
		accordionContentScope,
		arrow,
		accordionContentVariant,
		arrowVariant,
		setIsAccordionOpen,
		animateAccordionContentScope,
		animateArrow,
	}
}

export default useAccordionHook
