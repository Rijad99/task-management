// React
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

// Types
import { Project } from "./components/projects/components/project-item/ProjectItem.types"
import { Task } from "./components/tasks-board/TasksBoard.types"

// ENUMS
import { Paths } from "../../common/utils/paths"

// HTTP
import { getData } from "../../common/utils/http"



function useDashboardHook() {
    const [tasks, setTasks] = useState<Task[]>([])

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const projectName = location.pathname.split('/')[2]

        if (projectName) {
            getData(`../../../src/pages/dashboard/components/projects/data/${projectName}.json`)
            .then(data => setTasks(data))
        }
    }, [])

    const handleProjectChange = (project: Project) => {
        navigate(`${Paths.DASHBOARD}/${project.name.toLowerCase()}`)

        getData(`../../../src/pages/dashboard/components/projects/data/${project.name.toLowerCase()}.json`)
            .then(data => setTasks(data))
    }

    const isProjectSelected = (): boolean => {
        return location.pathname !== Paths.DASHBOARD
    }
  
    return { tasks, handleProjectChange, isProjectSelected }
}

export default useDashboardHook
