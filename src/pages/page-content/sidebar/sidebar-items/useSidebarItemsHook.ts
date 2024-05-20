// React
import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Data
import { sidebarLinks } from '../utils/sidebar-links-mock-data';

// CSS
import sidebarCSS from '../Sidebar.module.scss';

function useSidebarItemsHook(onPageContentWidthChange: () => void) {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarRef = useRef<HTMLDivElement>(null);

  const links = sidebarLinks.slice(0, -1);
  const logoutLink = sidebarLinks[sidebarLinks.length - 1];

  const handleNavigateTo = (path: string) => {
    navigate(path);
  };

  const handleActiveRoute = (path: string) => {
    const currentLocation = `/${location.pathname.split('/')[1]}`;

    return currentLocation === path ? true : false;
  };

  const handleOpenSidebar = () => {
    sidebarRef.current?.classList.toggle(sidebarCSS.sidebarOpened);

    onPageContentWidthChange();
  };

  return {
    links,
    logoutLink,
    sidebarRef,
    handleNavigateTo,
    handleActiveRoute,
    handleOpenSidebar,
  };
}

export default useSidebarItemsHook;
