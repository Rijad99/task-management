import {
  Participant,
  Tasks,
} from "../content/components/tasks-board/TasksBoard.types";

export interface HeaderProps {
  isProjectSelected: () => boolean;
  name: string;
  image: string;
  tasks: Tasks;
  participants: Participant[];
}
