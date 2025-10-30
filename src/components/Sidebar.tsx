import {
  LayoutDashboard,
  Users,
  FileText,
  Calendar,
  DollarSign,
  BarChart3,
  MessageSquare,
  LogOut,
} from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';

const mainMenuItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: "User's Management", url: '/users', icon: Users },
  { title: 'New Singers Requests', url: '/requests', icon: FileText },
  { title: 'For Events History', url: '/events', icon: Calendar },
  { title: 'Payments & Refunds', url: '/payments', icon: DollarSign },
  {
    title: 'Platform & Analytics',
    url: '/platform-analytics',
    icon: BarChart3,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';
  const location = useLocation();

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-sidebar-border bg-white md:px-5"
    >
      {/* ----- Logo Section ----- */}
      <SidebarHeader className="border-b border-sidebar-border h-[13vh] bg-white md:px-0 px-5">
        <div className="flex h-full items-center justify-center">
          <img
            src="/logo.png"
            alt="Singeria Logo"
            className={`transition-all duration-200 ${isCollapsed ? 'h-12 w-12' : 'h-12 w-auto'}`}
          />
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-white md:px-0 px-5 overflow-y-auto! scroll-none ">
        {/* ----- Main Menu ----- */}
        <div className="py-5 flex flex-col gap-2 shrink-0">
          {!isCollapsed && (
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Main
            </h2>
          )}

          {mainMenuItems.map((item) => {
            const isPlatformAnalytics = item.title === 'Platform & Analytics';
            const isActive = location.pathname === item.url;

            return (
              <NavLink
                key={item.title}
                to={item.url}
                end
                className={`flex items-center gap-3 rounded-lg px-2 py-2 text-[15px] transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white font-semibold'
                    : 'text-sidebar-foreground hover:bg-slate-50'
                }`}
              >
                <img
                  className={`w-4 transition-all ${
                    isPlatformAnalytics && isActive
                      ? 'filter brightness-0 invert'
                      : ''
                  }`}
                  src="/SideIcon.png"
                  alt=""
                />
                {!isCollapsed && (
                  <span
                    className={`font-semibold ${
                      isPlatformAnalytics && isActive
                        ? 'text-white'
                        : 'text-primary'
                    }`}
                  >
                    {item.title}
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>
      </SidebarContent>

      {/* ----- Control Panel ----- */}
      <SidebarFooter className=" border-sidebar-border bg-white md:px-0 px-5">
        <div className="flex flex-col gap-1">
          {!isCollapsed && (
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Control Panel
            </h2>
          )}

          <NavLink
            to="/support"
            className="flex border-b pb-5 pt-3 items-center gap-3 rounded-lg px-3 py-1 text-[15px] transition-all cursor-pointer text-primary hover:bg-slate-50"
          >
            <MessageSquare className="h-4 w-4 shrink-0 text-primary" />
            {!isCollapsed && <span>Help & Support Chats</span>}
          </NavLink>

          <NavLink
            to="/logout"
            className="flex items-center gap-3 rounded-lg px-3 py-1 text-[15px] transition-all cursor-pointer hover:bg-slate-50"
          >
            <LogOut className="h-4 w-4 shrink-0 text-red-400" />
            {!isCollapsed && <span className="text-[#222222]">Log Out</span>}
          </NavLink>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
