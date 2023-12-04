// React
import { useContext } from "react";

// Components
import TasksBoard from "./components/tasks-board/TasksBoard";
import InformationBox from "../../../../common/components/information-box/InformationBox";

// Types
import { Task } from "./components/tasks-board/TasksBoard.types";
import { ContentProps } from "./Content.types";

// Context
import { LocalizationContext } from "../../../../common/context/LocalizationContext";

function Content({ isProjectSelected, tasks }: ContentProps) {
  const { localization } = useContext(LocalizationContext);

  return isProjectSelected() ? (
    <TasksBoard tasks={tasks as unknown as Task[]} />
  ) : (
    <InformationBox
      title={localization.info}
      description={localization.noProjectSelected}
    />
  );
}

export default Content;
