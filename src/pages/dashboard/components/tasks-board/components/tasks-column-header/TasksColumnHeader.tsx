// React
import { useEffect } from 'react'

// Framer motion
import { motion, animate, useMotionValue, useTransform } from 'framer-motion'

// CSS
import tasksColumnHeaderCSS from './TasksColumnHeader.module.scss'

// Types
import { TasksColumnHeaderProps } from './TasksColumnHeader.types'



function TasksColumnHeader({ title, tasks }: TasksColumnHeaderProps) {
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
                duration: 0.5
            }
        }
    }

    return (
        <motion.div className={tasksColumnHeaderCSS.header} initial={{ opacity: 0 }} animate='visible' variants={taskColumnVariant}>
            <h3 className={tasksColumnHeaderCSS.title}>{title}</h3>
            <motion.div className={tasksColumnHeaderCSS.tasksNumber}>{tasksNumber}</motion.div>
        </motion.div>
    )
}

export default TasksColumnHeader
