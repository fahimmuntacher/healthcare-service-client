import { getDefaultDashboardRoute } from "@/src/lib/authUtils";
import { getUserInfo } from "@/src/services/auth.service";
import { NavSection } from "@/src/types/dashboard.types";
import DashboardSidebarContent from "./DashboardSidebarContent";
import { getNavItemsByRole } from "@/src/lib/navItems";

const DashboardSidebar = async () => {
  const userInfo = await getUserInfo();
  // console.log(userInfo.role);
  const navItems: NavSection[] = getNavItemsByRole(userInfo?.role);

  const dashboardHome = getDefaultDashboardRoute(userInfo?.role);
  return (
    <DashboardSidebarContent
      userInfo={userInfo}
      navItems={navItems}
      dashboardHome={dashboardHome}
    />
  );
};

export default DashboardSidebar;
