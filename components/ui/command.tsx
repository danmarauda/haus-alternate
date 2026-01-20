import { ReactNode } from "react";

// Stub components for command UI
export const Command = ({ children, className, ...props }: { children: ReactNode; className?: string; [key: string]: any }) => {
  return <div className={className} {...props}>{children}</div>;
};

export const CommandDialog = ({ children, open, onOpenChange, ...props }: { children: ReactNode; open?: boolean; onOpenChange?: (open: boolean) => void; [key: string]: any }) => {
  return <div {...props}>{open ? children : null}</div>;
};

export const CommandInput = ({ className, ...props }: { className?: string; [key: string]: any }) => {
  return <input className={className} {...props} />;
};

export const CommandList = ({ children, className, ...props }: { children: ReactNode; className?: string; [key: string]: any }) => {
  return <div className={className} {...props}>{children}</div>;
};

export const CommandItem = ({ children, className, onSelect, ...props }: { children: ReactNode; className?: string; onSelect?: () => void; [key: string]: any }) => {
  return <div className={className} onClick={onSelect} {...props}>{children}</div>;
};

export const CommandEmpty = ({ children, className, ...props }: { children: ReactNode; className?: string; [key: string]: any }) => {
  return <div className={className} {...props}>{children}</div>;
};

export const CommandGroup = ({ children, className, heading, ...props }: { children: ReactNode; className?: string; heading?: ReactNode; [key: string]: any }) => {
  return (
    <div className={className} {...props}>
      {heading && <div className="text-xs font-semibold">{heading}</div>}
      {children}
    </div>
  );
};

export const CommandSeparator = ({ className, ...props }: { className?: string; [key: string]: any }) => {
  return <div className={className} {...props} />;
};

export const CommandShortcut = ({ children, className, ...props }: { children: ReactNode; className?: string; [key: string]: any }) => {
  return <span className={className} {...props}>{children}</span>;
};
