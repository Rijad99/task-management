// Types
import { Tasks } from "./components/tasks-board/TasksBoard.types";

export interface ContentProps {
  isProjectSelected: () => boolean;
  tasks: Tasks;
}
