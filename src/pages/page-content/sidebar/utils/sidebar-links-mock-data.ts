// Types
import { Paths } from "../../../../common/utils/paths"
import { SidebarLink } from "./types"

// Icons
import {
  dashboardIcon,
  logoutIcon,
  peopleIcon,
  reportsIcon,
  settingsIcon,
  sprintIcon,
} from "../../../../common/icons/icons"

export const sidebarLinks: SidebarLink[] = [
  {
    id: 0,
    name: "dashboard",
    linkTo: Paths.DASHBOARD,
    icon: dashboardIcon,
  },
  {
    id: 1,
    name: "sprint",
    linkTo: Paths.SPRINT,
    icon: sprintIcon,
  },
  {
    id: 2,
    name: "myteam",
    linkTo: Paths.MYTEAM,
    icon: peopleIcon,
  },
  {
    id: 3,
    name: "reports",
    linkTo: Paths.REPORTS,
    icon: reportsIcon,
  },
  {
    id: 4,
    name: "settings",
    linkTo: Paths.SETTINGS,
    icon: settingsIcon,
  },
  {
    id: 5,
    name: "logout",
    linkTo: Paths.LOGOUT,
    icon: logoutIcon,
  },
]
