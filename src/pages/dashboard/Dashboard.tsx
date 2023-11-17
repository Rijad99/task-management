// React
import { useContext } from 'react'

// CSS
import dashboardCSS from './Dashboard.module.scss'

// Components
import Projects from './components/projects/Projects'
import MyTeam from './components/my-team/MyTeam'
import TasksBoard from './components/tasks-board/TasksBoard'

// Dashboard hook
import useDashboardHook from './useDashboardHook'
import Popup from '../../common/components/popup/Popup'

// Context
import { LocalizationContext } from '../../common/context/LocalizationContext'



function Dashboard() {
    const { tasks, isProjectSelected, handleProjectChange } = useDashboardHook()

    const { localization } = useContext(LocalizationContext)

    return (
        <div className={dashboardCSS.dashboardGrid}>
            <div className={dashboardCSS.dashboardSidebar}>
                <Projects onProjectChange={handleProjectChange} />
                <MyTeam />
            </div>
            <div className={dashboardCSS.dashboardHeader}>
                {/* <SelectedProject /> */}
                {/* <ProjectTeam /> */}
            </div>
            <div className={dashboardCSS.dashboardSubheader}>
                {/* <DashboardTabs /> */}
            </div>
            <div className={dashboardCSS.dashboardContent}>
                {
                    isProjectSelected() ? <TasksBoard tasks={tasks} /> : <Popup title={localization.info} description={localization.noProjectSelected} />
                }
            </div>
        </div>
    )
}

export default Dashboard
