// React
import { useContext } from "react"

// Components
import Accordion from "../../../../../../common/components/accordion/Accordion"
import ProjectItems from "./components/project-items/ProjectItems"
import Button from "../../../../../../common/components/button/Button.tsx"

// CSS
import projectsCSS from "./Projects.module.scss"

// Data
import { allProjectsData } from "./utils/projects-mock-data"

// Context
import { LocalizationContext } from "../../../../../../common/context/LocalizationContext"

// Types
import { ProjectsProps } from "./Projects.types"

// ENUMS
import {
	ButtonSize,
	ButtonType,
} from "../../../../../../common/components/button/Button.types.ts"
import Svg from "../../../../../../common/components/svg/Svg.tsx"
import { plusIcon } from "../../../../../../common/icons/icons.ts"
import { SvgColors } from "../../../../../../common/components/svg/Svg.types.ts"

function Projects({ onProjectChange }: ProjectsProps) {
	const { localization } = useContext(LocalizationContext)

	const handleProjectCreation = () => {}

	return (
		<Accordion title={localization.projects}>
			<Button
				type={ButtonType.PRIMARY}
				size={ButtonSize.LARGE}
				onClick={handleProjectCreation}
				additionalClasses={projectsCSS.createProjectButton}
			>
				{localization.createNewProject}
				<Svg
					path={plusIcon}
					width="26"
					height="13"
					viewBox="0 0 9 14"
					color={SvgColors.NEUTRAL}
				/>
			</Button>
			<ProjectItems
				projects={allProjectsData}
				onProjectChange={onProjectChange}
			/>
		</Accordion>
	)
}

export default Projects
