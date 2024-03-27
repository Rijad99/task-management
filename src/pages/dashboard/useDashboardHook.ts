// React
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

// Types
import { Project } from "./Dashboard.types"

// ENUMS
import { Paths } from "../../common/utils/paths"

// HTTP
import { getData } from "../../common/utils/http"

function useDashboardHook() {
	const [project, setProject] = useState<Project>({
		id: null,
		name: "",
		image: "",
		participants: [],
		tasks: {
			todoTasks: [],
			inProgressTasks: [],
			underReviewTasks: [],
			readyForTestingTasks: [],
			completedTasks: [],
		}
	})

	const [isTaskFormOpen, setIsTaskFormOpen] = useState<boolean>(false)

	const dashboardSidebarVariant = {
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	}

	const navigate = useNavigate()

	const location = useLocation()

	useEffect(() => {
		const projectName = location.pathname.split("/")[2]

		if (projectName) {
			getData(
				`../../../src/pages/dashboard/components/sidebar/components/projects/data/${projectName}.json`,
			).then(data => setProject(data))
		}
	}, [])

	const handleProjectChange = (project: Project) => {
		navigate(`${Paths.DASHBOARD}/${project.name.toLowerCase()}`)

		getData(
			`../../../src/pages/dashboard/components/sidebar/components/projects/data/${project.name.toLowerCase()}.json`,
		).then(data => setProject(data))
	}

	const isProjectSelected = (): boolean => {
		return location.pathname !== Paths.DASHBOARD
	}

	return {
		project,
		dashboardSidebarVariant,
		isTaskFormOpen,
		setIsTaskFormOpen,
		setProject,
		handleProjectChange,
		isProjectSelected,
	}
}

export default useDashboardHook
