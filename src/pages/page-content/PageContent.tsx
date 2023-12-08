// React
import { Outlet } from "react-router-dom"

// CSS
import PageContentCSS from "./PageContent.module.scss"

// Components
import Sidebar from "./sidebar/Sidebar"
import Header from "./header/Header"

// Page content hook
import usePageContentHook from "./usePageContentHook"

function PageContent() {
  const {
    sidebarRef,
    headerRef,
    pageContentRef,
    handlePageContentWidthUpdate,
  } = usePageContentHook()

  return (
    <>
      <Sidebar
        ref={sidebarRef}
        onPageContentWidthChange={handlePageContentWidthUpdate}
      />
      <Header ref={headerRef} />
      <div ref={pageContentRef} className={PageContentCSS.pageContentLayout}>
        <Outlet />
      </div>
    </>
  )
}

export default PageContent
