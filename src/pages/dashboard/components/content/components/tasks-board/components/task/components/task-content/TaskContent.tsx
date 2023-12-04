// CSS
import taskContentCSS from "./TaskContent.module.scss";

// Types
import { TaskContentProps } from "./TaskContent.types";

// Components
import DueDate from "../due-date/DueDate";

function TaskContent({ description, fromDate, toDate }: TaskContentProps) {
  return (
    <div className={taskContentCSS.content}>
      <p className={taskContentCSS.description}>{description}</p>
      <DueDate fromDate={fromDate} toDate={toDate} />
    </div>
  );
}

export default TaskContent;
