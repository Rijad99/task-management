// Components
import SelectedProject from "./components/selected-project/SelectedProject";
import Participants from "../sidebar/components/projects/components/participants/Participants";

// Types
import { HeaderProps } from "./Header.types";

function Header({
  isProjectSelected,
  name,
  image,
  tasks,
  participants,
}: HeaderProps) {
  return (
    isProjectSelected() && (
      <>
        <SelectedProject name={name} image={image} tasks={tasks} />
        <Participants participants={participants} />
      </>
    )
  );
}

export default Header;
