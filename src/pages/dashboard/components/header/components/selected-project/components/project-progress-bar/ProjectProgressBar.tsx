// React
import { useContext, useEffect } from "react"

// Framer motion
import { motion, useMotionValue, useTransform, animate } from "framer-motion"

// CSS
import projectProgressBarCSS from "./ProjectProgressBar.module.scss"

// Types
import { ProjectProgressBarProps } from "./ProjectProgressBar.types"

// Context
import { LocalizationContext } from "../../../../../../../../common/context/LocalizationContext"

function ProjectProgressBar({ completionPercentage }: ProjectProgressBarProps) {
  const { localization } = useContext(LocalizationContext)

  const count = useMotionValue(0)
  const rounded = useTransform(count, completionPercentage =>
    Math.round(completionPercentage),
  )

  useEffect(() => {
    if (completionPercentage) {
      const controls = animate(count, +completionPercentage)

      return controls.stop
    }
  }, [completionPercentage])

  const progressBarVariant = {
    visible: {
      width: `${completionPercentage ? completionPercentage : 0}%`,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const percentageVariant = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
      },
    },
  }

  return (
    <div className={projectProgressBarCSS.progressBarContainer}>
      <div className={projectProgressBarCSS.progressBar}>
        <motion.div
          initial={{
            opacity: 0,
            width: 0,
          }}
          animate="visible"
          variants={progressBarVariant}
          className={projectProgressBarCSS.progress}
        ></motion.div>
      </div>
      <div className={projectProgressBarCSS.progressPercentage}>
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate="visible"
          variants={percentageVariant}
        >
          {rounded}
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate="visible"
          variants={percentageVariant}
        >
          % {localization.completed}
        </motion.span>
      </div>
    </div>
  )
}

export default ProjectProgressBar
