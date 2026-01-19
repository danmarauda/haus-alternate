import { ReactNode } from "react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { GlobalSidebar } from "@/components/GlobalSidebar";
import { Header } from "@/components/Header";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <GlobalSidebar />
        <SidebarInset className="flex-1">
          <Header />
          <main className="flex-1 p-4 pt-20">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};
