// Framer motion
import { motion } from "framer-motion"

// CSS
import dashboardCSS from "./Dashboard.module.scss"

// Components
import Sidebar from "./components/sidebar/Sidebar"
import Header from "./components/header/Header"
import SubHeader from "./components/sub-header/SubHeader"
import Content from "./components/content/Content"

// Dashboard hook
import useDashboardHook from "./useDashboardHook"
import useTaskHook from "./components/content/components/tasks-board/components/task/useTaskHook"
import TaskForm from "./components/task-form/TaskForm";

function Dashboard() {
	const {
		project,
		dashboardSidebarVariant,
		isTaskFormOpen,
		setIsTaskFormOpen,
		isProjectSelected,
		handleProjectChange,
	} = useDashboardHook()

	const { handleCreateTask } = useTaskHook(setIsTaskFormOpen)

	return (
		<div
			className={`${
				isProjectSelected()
					? dashboardCSS.dashboardGrid
					: dashboardCSS.dashboardEmpty
			}`}
		>
			<motion.div
				className={dashboardCSS.dashboardSidebar}
				initial={{
					opacity: 0,
				}}
				animate="visible"
				variants={dashboardSidebarVariant}
			>
				<Sidebar handleProjectChange={handleProjectChange} />
			</motion.div>
			<div className={dashboardCSS.dashboardHeader}>
				<Header
					isProjectSelected={isProjectSelected}
					name={project.name}
					image={project.image}
					tasks={project.tasks}
					participants={project.participants}
				/>
			</div>
			<div className={dashboardCSS.dashboardSubheader}>
				<SubHeader isSelectedProject={isProjectSelected} onTaskCreate={handleCreateTask} />
			</div>
			<div className={dashboardCSS.dashboardContent}>
				<Content isProjectSelected={isProjectSelected} tasks={project.tasks} />
			</div>
			<TaskForm isTaskFormOpen={isTaskFormOpen} onModalClose={() => setIsTaskFormOpen(false)} />
		</div>
	)
}

export default Dashboard
