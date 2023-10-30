// React
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Components
import PageContent from './common/components/page-content/PageContent'
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))

// Paths
import { Paths } from './common/utils/paths'



const router = createBrowserRouter([
	{
		path: Paths.ROOT,
		element: <PageContent />,
		children: [
			{
				path: Paths.DASHBOARD,
				element: <Suspense fallback='Loading component...'><Dashboard /></Suspense>
			},
			{
				path: Paths.SPRINT,
				element: <></>
			},
			{
				path: Paths.MYTEAM,
				element: <></>
			},
			{
				path: Paths.REPORTS,
				element: <></>
			},
			{
				path: Paths.SETTINGS,
				element: <></>
			},
			{
				path: Paths.LOGOUT,
				element: <></>
			}
		]
	},
])



ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)
