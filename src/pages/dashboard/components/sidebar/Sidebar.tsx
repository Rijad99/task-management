// Components
import Projects from "./components/projects/Projects"
import MyTeam from "./components/my-team/MyTeam"

// Types
import { SidebarProps } from "./Sidebar.types"

function Sidebar({ handleProjectChange }: SidebarProps) {
  return (
    <>
      <Projects onProjectChange={handleProjectChange} />
      <MyTeam />
    </>
  )
}

export default Sidebar
