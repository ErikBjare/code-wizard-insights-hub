
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  FileCode, 
  BarChart2, 
  AlertTriangle, 
  Users, 
  FileText, 
  Menu 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from '@/components/ui/sidebar';

const navItems = [
  {
    name: 'Dashboard',
    path: '/',
    icon: <BarChart2 className="h-5 w-5" />,
  },
  {
    name: 'Code Quality',
    path: '/code-quality',
    icon: <FileCode className="h-5 w-5" />,
  },
  {
    name: 'Code Smells',
    path: '/code-smells',
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    name: 'Team Performance',
    path: '/team',
    icon: <Users className="h-5 w-5" />,
  },
  {
    name: 'Documentation',
    path: '/documentation',
    icon: <FileText className="h-5 w-5" />,
  },
];

const CodeAnalyticsSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex items-center px-2 py-4">
        <div className="flex items-center space-x-2 px-2">
          <FileCode className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">CodeAnalytics</span>
        </div>
        <div className="ml-auto">
          <SidebarTrigger>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Sidebar</span>
            </Button>
          </SidebarTrigger>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter className="px-3 py-2">
        <div className="rounded-md bg-secondary px-3 py-2">
          <div className="text-xs font-medium">Last analysis</div>
          <div className="text-sm">May 19, 2025 - 14:30</div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default CodeAnalyticsSidebar;
