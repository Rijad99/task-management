export interface ProjectItemProps {
    project: Project
    activeProject: boolean
    onProjectChange: (project: Project) => void
    onProjectDropdownOpen: () => void
}

export interface Project {
    id: string | number
    name: string
}
