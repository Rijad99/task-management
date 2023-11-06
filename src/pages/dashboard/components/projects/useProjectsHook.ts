// React
import { useNavigate } from "react-router-dom"

// Types
import { Project } from "./components/project-item/ProjectItem.types"

// ENUMS
import { Paths } from "../../../../common/utils/paths"



function useProjectsHook() {
    const navigate = useNavigate()

    const handleProjectChange = (project: Project) => {
        navigate(`${Paths.DASHBOARD}/${project.name.toLowerCase()}`)
    }

    return { handleProjectChange }
}

export default useProjectsHook
