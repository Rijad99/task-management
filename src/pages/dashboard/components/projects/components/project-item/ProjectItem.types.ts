// Types
import { Project } from "../../../../Dashboard.types"



export interface ProjectItemProps {
    project: Project
    activeProject: boolean
    onProjectChange: (project: Project) => void
}
