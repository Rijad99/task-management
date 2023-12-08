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
}

export interface TaskCategory {
  id: string | number
  category: string
}

export interface Participant {
  id: string | number
  photo: string
}
