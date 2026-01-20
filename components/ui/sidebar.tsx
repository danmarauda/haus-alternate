import { ReactNode } from "react";

// Stub components for sidebar UI
export const SidebarProvider = ({ children, defaultOpen = true }: { children: ReactNode; defaultOpen?: boolean }) => {
  return <>{children}</>;
};

export const SidebarInset = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};

export const SidebarTrigger = ({ className }: { className?: string }) => {
  return <button className={className} aria-label="Toggle sidebar" />;
};

export const Sidebar = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <aside className={className}>{children}</aside>;
};

export const SidebarHeader = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};

export const SidebarContent = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};

export const SidebarFooter = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};

export const SidebarGroup = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};

export const SidebarGroupContent = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};

export const SidebarGroupLabel = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};

export const SidebarSeparator = ({ className }: { className?: string }) => {
  return <div className={className} />;
};

export const SidebarMenu = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <nav className={className}>{children}</nav>;
};

export const SidebarMenuItem = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};

export const SidebarMenuButton = ({ children, className, asChild, isActive, tooltip }: { children: ReactNode; className?: string; asChild?: boolean; isActive?: boolean; tooltip?: string }) => {
  if (asChild) {
    return <>{children}</>;
  }
  return <button className={className} aria-label={tooltip}>{children}</button>;
};

export const SidebarMenuSub = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};

export const SidebarMenuSubItem = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};

export const SidebarMenuSubButton = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <button className={className}>{children}</button>;
};
