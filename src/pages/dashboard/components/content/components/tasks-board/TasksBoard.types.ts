// Types
import { TaskCategory } from "./components/task/components/task-category/TaskCategory.types"

export enum TaskPriority {
	LOW = 1,
	MEDIUM = 2,
	HIGH = 3,
}

export interface TasksBoardProps {
	tasks: Task[]
}

export interface Tasks {
	todoTasks: Task[]
	inProgressTasks: Task[]
	underReviewTasks: []
	readyForTestingTasks: []
	completedTasks: Task[]
}

export interface Task {
	id: string | number
	title: string
	description: string
	priority: number
	fromDate: string
	toDate: string
	status: string
	participants: Participant[]
	categories: TaskCategory[]
}

export interface TaskCategory {
	id: string | number
	category: string
}

export interface Participant {
	id: string | number
	photo: string
}
