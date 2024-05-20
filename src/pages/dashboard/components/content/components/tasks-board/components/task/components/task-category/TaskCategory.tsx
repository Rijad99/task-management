// CSS
import taskCategoryCSS from './TaskCategory.module.scss';

// Types
import { TaskCategoryProps } from './TaskCategory.types';

function TaskCategory({ name }: TaskCategoryProps) {
  return <div className={taskCategoryCSS.category}>{name}</div>;
}

export default TaskCategory;
