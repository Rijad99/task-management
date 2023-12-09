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

function Dashboard() {
	const {
		project,
		dashboardSidebarVariant,
		isProjectSelected,
		handleProjectChange,
	} = useDashboardHook()

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
				<SubHeader isSelectedProject={isProjectSelected} />
			</div>
			<div className={dashboardCSS.dashboardContent}>
				<Content isProjectSelected={isProjectSelected} tasks={project.tasks} />
			</div>
		</div>
	)
}

export default Dashboard
