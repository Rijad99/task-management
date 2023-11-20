// Types
import { Participant } from "./components/tasks-board/TasksBoard.types"
import { Tasks } from "./components/tasks-board/TasksBoard.types"



export interface Project {
    id: string | number | null
    name: string
    image: string
    participants: Participant[]
    tasks: Tasks
}
