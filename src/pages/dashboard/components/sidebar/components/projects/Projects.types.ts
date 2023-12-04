// Types
import { Project } from "../../../../Dashboard.types";

export interface ProjectsProps {
  onProjectChange: (project: Project) => void;
}

export interface ProjectItem {
  id: string | number;
  name: string;
  image: string;
}
