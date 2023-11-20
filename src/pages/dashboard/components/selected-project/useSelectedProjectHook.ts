// React
import { createRef, useEffect, useState } from 'react'

// Types
import { Tasks } from '../tasks-board/TasksBoard.types'

function useSelectedProjectHook(name: string, tasks: Tasks) {
    const [completionPercentage, setCompletionPercentage] = useState<string>()

    const progressBarRef = createRef<HTMLDivElement>()

    useEffect(() => {

        if (tasks.todoTasks && tasks.inProgressTasks) {
            const completedTasks = tasks.completedTasks
            const restOfTheTasks = [...tasks.todoTasks, ...tasks.inProgressTasks]
            const percentage = Number((completedTasks.length / restOfTheTasks.length) * 100).toFixed(2)
    
            progressBarRef.current!.style.width = `${percentage}%`

            setCompletionPercentage(percentage)
        } 
        
        if (tasks.todoTasks.length === 0 && tasks.inProgressTasks.length === 0) {
            progressBarRef.current!.style.width = `0%`

            setCompletionPercentage('0')
        }

        if (tasks.todoTasks.length === 0 && tasks.inProgressTasks.length === 0 && tasks.completedTasks.length > 0) {
            progressBarRef.current!.style.width = `100%`

            setCompletionPercentage('100')
        }
    }, [name])

    return { progressBarRef, completionPercentage }
}

export default useSelectedProjectHook
