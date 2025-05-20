
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import CodeAnalyticsSidebar from './CodeAnalyticsSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <CodeAnalyticsSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
