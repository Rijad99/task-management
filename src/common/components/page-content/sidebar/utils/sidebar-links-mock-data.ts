// Types
import { Paths } from "../../../../utils/paths";
import { SidebarLink } from "./types";

// Icons
import { dashboardIcon, logoutIcon, peopleIcon, reportsIcon, settingsIcon, sprintIcon } from "../../../../icons/icons";



export const sidebarLinks: SidebarLink[] = [
    {
        id: 0,
        name: 'Dashboard',
        linkTo: Paths.DASHBOARD,
        icon: dashboardIcon
    },
    {
        id: 1,
        name: 'Sprint',
        linkTo: Paths.SPRINT,
        icon: sprintIcon
    },
    {
        id: 2,
        name: 'My Team',
        linkTo: Paths.MYTEAM,
        icon: peopleIcon
    },
    {
        id: 3,
        name: 'Reports',
        linkTo: Paths.REPORTS,
        icon: reportsIcon
    },
    {
        id: 4,
        name: 'Settings',
        linkTo: Paths.SETTINGS,
        icon: settingsIcon
    },
    {
        id: 5,
        name: 'Log out',
        linkTo: Paths.LOGOUT,
        icon: logoutIcon
    }
]
