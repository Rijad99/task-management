// CSS
import dashboardCSS from './Dashboard.module.scss'

// Components
import Projects from './components/projects/Projects'
import MyTeam from './components/my-team/MyTeam'
import TasksBoard from './components/tasks-board/TasksBoard'

// Dashboard hook
import useDashboardHook from './useDashboardHook'
import Popup from '../../common/components/popup/Popup'



function Dashboard() {
    const { tasks, isProjectSelected, handleProjectChange } = useDashboardHook()

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
                    isProjectSelected() ? <TasksBoard tasks={tasks} /> : <Popup title='Info' description='Select project to view tasks' />
                }
            </div>
        </div>
    )
}

export default Dashboard
