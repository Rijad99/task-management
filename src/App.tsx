// React
import { useEffect, Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Paths
import { Paths } from "./common/utils/paths"

// Components
import PageContent from "./pages/page-content/PageContent"
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"))

// Providers
import { LocalizationProvider } from "./common/context/LocalizationContext"
import { UserProvider } from "./common/context/user-context/UserContext"

function App() {
  useEffect(() => {
    if (!localStorage.getItem("language")) {
      localStorage.setItem(
        "language",
        JSON.stringify({
          value: "English",
          icon: "/src/common/images/flags/english.png",
        }),
      )
    }
  }, [])

  return (
    <LocalizationProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path={Paths.ROOT} element={<PageContent />}>
              <Route
                path={Paths.DASHBOARD}
                element={
                  <Suspense fallback={"Loading component..."}>
                    <Dashboard />
                  </Suspense>
                }
              />

              <Route
                path={`${Paths.DASHBOARD}/:project`}
                element={
                  <Suspense fallback={"Loading component..."}>
                    <Dashboard />
                  </Suspense>
                }
              />

              <Route
                path={Paths.SPRINT}
                element={
                  <Suspense fallback={"Loading component..."}>
                    <></>
                  </Suspense>
                }
              />
              <Route
                path={Paths.MYTEAM}
                element={
                  <Suspense fallback={"Loading component..."}>
                    <></>
                  </Suspense>
                }
              />
              <Route
                path={Paths.REPORTS}
                element={
                  <Suspense fallback={"Loading component..."}>
                    <></>
                  </Suspense>
                }
              />
              <Route
                path={Paths.SETTINGS}
                element={
                  <Suspense fallback={"Loading component..."}>
                    <></>
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </LocalizationProvider>
  )
}

export default App
