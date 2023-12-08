// React
import { useEffect, useState } from "react"

// Types
import { Tasks } from "../../../content/components/tasks-board/TasksBoard.types"

function useSelectedProjectHook(name: string, tasks: Tasks) {
  const [completionPercentage, setCompletionPercentage] = useState<string>()

  useEffect(() => {
    if (tasks.todoTasks && tasks.inProgressTasks) {
      const completedTasks = tasks.completedTasks
      const restOfTheTasks = [...tasks.todoTasks, ...tasks.inProgressTasks]
      const percentage = Number(
        (completedTasks.length / restOfTheTasks.length) * 100,
      ).toFixed(2)

      setCompletionPercentage(percentage)
    }

    if (tasks.todoTasks.length === 0 && tasks.inProgressTasks.length === 0) {
      setCompletionPercentage("0")
    }

    if (
      tasks.todoTasks.length === 0 &&
      tasks.inProgressTasks.length === 0 &&
      tasks.completedTasks.length > 0
    ) {
      setCompletionPercentage("100")
    }
  }, [name])

  return {
    completionPercentage,
  }
}

export default useSelectedProjectHook
