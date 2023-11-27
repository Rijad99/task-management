// React
import { useContext } from 'react'

// Framer motion
import { motion } from 'framer-motion'

// CSS
import dashboardCSS from './Dashboard.module.scss'

// Components
import Projects from './components/projects/Projects'
import MyTeam from './components/my-team/MyTeam'
import TasksBoard from './components/tasks-board/TasksBoard'
import SelectedProject from './components/selected-project/SelectedProject'
import Participants from './components/projects/components/participants/Participants'

// Types
import { Task } from './components/tasks-board/TasksBoard.types'

// Dashboard hook
import useDashboardHook from './useDashboardHook'
import Popup from '../../common/components/popup/Popup'

// Context
import { LocalizationContext } from '../../common/context/LocalizationContext'



function Dashboard() {
    const { project, dashboardSidebarVariant, isProjectSelected, handleProjectChange } = useDashboardHook()

    const { localization } = useContext(LocalizationContext)

    return (
        <div className={`${isProjectSelected() ? dashboardCSS.dashboardGrid : dashboardCSS.dashboardEmpty}`}>
            <motion.div className={dashboardCSS.dashboardSidebar} initial={{ opacity: 0 }} animate='visible' variants={dashboardSidebarVariant}>
                <Projects onProjectChange={handleProjectChange} />
                <MyTeam />
            </motion.div>
            {
                isProjectSelected() &&
                    <div className={dashboardCSS.dashboardHeader}>
                        <SelectedProject name={project.name} image={project.image} tasks={project.tasks} />
                        <Participants participants={project.participants} />
                    </div>
            }
            <div className={dashboardCSS.dashboardSubheader}>

            </div>
            <div className={dashboardCSS.dashboardContent}>
                {
                    isProjectSelected() ? <TasksBoard tasks={project.tasks as unknown as Task[]} /> : <Popup title={localization.info} description={localization.noProjectSelected} />
                }
            </div>
        </div>
    )
}

export default Dashboard
