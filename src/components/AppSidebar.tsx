import { 
  Home, 
  Calendar, 
  Bookmark, 
  DollarSign, 
  UserCheck, 
  ClipboardList, 
  Users, 
  Settings, 
  MoreHorizontal,
  Stethoscope
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const sidebarItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Bookings", url: "/bookings", icon: Bookmark },
  { title: "Finance", url: "/finance", icon: DollarSign },
  { title: "Inpatient", url: "/inpatient", icon: UserCheck },
  { title: "Order", url: "/order", icon: ClipboardList },
  { title: "Lead Manager", url: "/leads", icon: Users },
  { title: "IVR", url: "/ivr", icon: Stethoscope },
  { title: "Membership", url: "/membership", icon: Users },
  { title: "Tasks", url: "/tasks", icon: ClipboardList },
  { title: "Customers", url: "/customers", icon: Users },
  { title: "Users", url: "/users", icon: Users },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "More", url: "/more", icon: MoreHorizontal },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-60"} bg-sidebar border-sidebar-border`}
      collapsible="icon"
    >
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
            <img 
              src="/lovable-uploads/63c14391-c8b2-4ade-b370-70bfae07e066.png" 
              alt="Jaldee Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-sidebar-foreground font-bold text-lg">Jaldee</h2>
              <p className="text-sidebar-foreground/60 text-xs">Life Made Easy</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}