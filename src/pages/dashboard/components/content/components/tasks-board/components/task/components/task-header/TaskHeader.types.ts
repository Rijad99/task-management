import { TaskCategory } from "../task-category/TaskCategory.types"

export interface TaskHeaderProps {
	title: string
	priority: number
	status: string
	categories: TaskCategory[]
}
