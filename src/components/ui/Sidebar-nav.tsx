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
import { NavLink } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import logo from '@/assets/logo.png';

const mainMenuItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: "User's Management", url: '/users', icon: Users },
  { title: 'New Singers Requests', url: '/requests', icon: FileText },
  { title: 'For Events History', url: '/events', icon: Calendar },
  { title: 'Payments & Refunds', url: '/payments', icon: DollarSign },
  { title: 'Platform & Analytics', url: '/analytics', icon: BarChart3 },
];

const controlPanelItems = [
  { title: 'Help & Support Chats', url: '/support', icon: MessageSquare },
  { title: 'Log Out', url: '/logout', icon: LogOut },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="Singeria Logo"
            className={`transition-all duration-200 ${isCollapsed ? 'h-10 w-10' : 'h-12 w-auto'}`}
          />
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-sidebar">
        {/* MAIN Section */}
        <div className="px-3 py-4">
          {!isCollapsed && (
            <div className="mb-2 px-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Main
              </h2>
            </div>
          )}
          <SidebarMenu className="space-y-1">
            {mainMenuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild className="h-10">
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      `flex items-center text-black gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                        isActive
                          ? 'bg-sidebar-primary text-sidebar-primary-foreground font-medium'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                      }`
                    }
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    {!isCollapsed && <span>{item.title}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>

        {/* Control Panel Section */}
        <div className="mt-auto px-3 py-4 border-t border-sidebar-border">
          {!isCollapsed && (
            <div className="mb-2 px-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Control Panel
              </h2>
            </div>
          )}
          <SidebarMenu className="space-y-1">
            {controlPanelItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild className="h-10">
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                        isActive
                          ? 'bg-sidebar-primary text-sidebar-primary-foreground font-medium'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                      }`
                    }
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    {!isCollapsed && <span>{item.title}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
