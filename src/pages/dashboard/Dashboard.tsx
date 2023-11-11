// CSS
import dashboardCSS from './Dashboard.module.scss'

// Components
import Projects from './components/projects/Projects'
import MyTeam from './components/my-team/MyTeam'
import TasksBoard from './components/tasks-board/TasksBoard'


function Dashboard() {

    return (
        <div className={dashboardCSS.dashboardGrid}>
            <div className={dashboardCSS.dashboardSidebar}>
                <Projects />
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
                <TasksBoard />
            </div>
        </div>
    )
}

export default Dashboard
