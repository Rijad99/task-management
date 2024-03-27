// Types
import { TaskCategoriesProps } from "./TaskCategories.types"

// Components
import TaskCategory from "../task-category/TaskCategory"

// CSS
import taskCategoriesCSS from "./TaskCategories.module.scss"

function TaskCategories({ taskCategories }: TaskCategoriesProps) {
	return (
		<div className={taskCategoriesCSS.categories}>
			{taskCategories.map(category => {
				return <TaskCategory key={category.id} name={category.name} />
			})}
		</div>
	)
}

export default TaskCategories
