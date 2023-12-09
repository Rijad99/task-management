// Types
import { Project } from "../project-item/ProjectItem.types"

export interface ProjectItemsProps {
	projects: Project[]
	onProjectChange: (project: Project) => void
}
