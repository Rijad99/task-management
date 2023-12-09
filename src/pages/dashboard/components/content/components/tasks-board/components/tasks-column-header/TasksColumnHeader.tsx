// React
import { useEffect } from "react"

// Framer motion
import { motion, animate, useMotionValue, useTransform } from "framer-motion"

// CSS
import tasksColumnHeaderCSS from "./TasksColumnHeader.module.scss"

// Types
import { TasksColumnHeaderProps } from "./TasksColumnHeader.types"

// Components
import Button from "../../../../../../../../common/components/button/Button"

// ENUMS
import { SvgColors } from "../../../../../../../../common/components/svg/Svg.types"
import {
	ButtonSize,
	ButtonType,
} from "../../../../../../../../common/components/button/Button.types"

import Svg from "../../../../../../../../common/components/svg/Svg"

// Icons
import { plusIcon } from "../../../../../../../../common/icons/icons"

function TasksColumnHeader({ title, tasks, category }: TasksColumnHeaderProps) {
	const count = useMotionValue(0)
	const tasksNumber = useTransform(count, tasks => Math.round(tasks))

	useEffect(() => {
		const controls = animate(count, tasks.length)

		return controls.stop
	}, [tasks.length])

	const taskColumnVariant = {
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<motion.div
			className={tasksColumnHeaderCSS.header}
			initial={{
				opacity: 0,
			}}
			animate="visible"
			variants={taskColumnVariant}
		>
			<div className={tasksColumnHeaderCSS.tasksCategory}>
				<h3 className={tasksColumnHeaderCSS.title}>{title}</h3>
				<motion.div className={tasksColumnHeaderCSS.tasksNumber}>
					{tasksNumber}
				</motion.div>
			</div>
			{category !== "completedTasks" && (
				<Button
					size={ButtonSize.SMALL}
					type={ButtonType.PRIMARY}
					onClick={() => null}
					additionalClasses={tasksColumnHeaderCSS.addNewButton}
				>
					<Svg
						path={plusIcon}
						width="16"
						height="11"
						viewBox="0 0 13 12"
						color={SvgColors.WHITE}
					/>
				</Button>
			)}
		</motion.div>
	)
}

export default TasksColumnHeader
