import { useState } from "react";
import { Search, LayoutDashboard, Bot, User, Plus, Home, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
  gradient?: string;
  notifications?: number;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Home", href: "/", gradient: "from-blue-500 to-cyan-500" },
  { icon: Search, label: "Search", href: "/search", gradient: "from-emerald-500 to-teal-500" },
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", notifications: 3, gradient: "from-cyan-500 to-blue-500" },
  { icon: Bot, label: "AI", href: "/ai", gradient: "from-teal-500 to-cyan-500" },
  { icon: User, label: "Profile", href: "/profile", gradient: "from-amber-500 to-orange-500" },
];

export const MobileBottomNav = () => {
  const [activeTab, setActiveTab] = useState("/");
  const [showQuickAction, setShowQuickAction] = useState(false);

  return (
    <>
      {/* Quick Action Modal */}
      <AnimatePresence>
        {showQuickAction && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setShowQuickAction(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-24 left-4 right-4 z-50 lg:hidden"
            >
              <div className="bg-popover/95 backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-2xl">
                <h3 className="text-sm font-semibold text-foreground mb-3">Quick Actions</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: Search, label: "New Search", gradient: "from-blue-500 to-cyan-500" },
                    { icon: Plus, label: "Add Listing", gradient: "from-emerald-500 to-teal-500" },
                    { icon: Bot, label: "Ask AI", gradient: "from-teal-500 to-cyan-500" },
                    { icon: LayoutDashboard, label: "Dashboard", gradient: "from-cyan-500 to-blue-500" },
                    { icon: User, label: "Schedule", gradient: "from-amber-500 to-orange-500" },
                    { icon: Sparkles, label: "Insights", gradient: "from-cyan-500 to-teal-500" },
                  ].map((action) => (
                    <button
                      key={action.label}
                      onClick={() => setShowQuickAction(false)}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 active:scale-95 transition-all"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center shadow-lg`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] font-medium text-muted-foreground">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        {/* Gradient border top */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        {/* Glass background */}
        <div className="bg-background/80 backdrop-blur-xl border-t border-border/30 safe-area-pb">
          <div className="flex items-center justify-around py-2 px-2 max-w-md mx-auto">
            {navItems.map((item, index) => {
              const isActive = activeTab === item.href;
              const isCenter = index === Math.floor(navItems.length / 2);
              
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.href);
                  }}
                  className="relative flex flex-col items-center gap-1 min-w-[56px]"
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Icon container */}
                  <div className="relative">
                    <motion.div
                      className={`p-2.5 rounded-2xl transition-all duration-300 ${
                        isActive 
                          ? `bg-gradient-to-br ${item.gradient} shadow-lg` 
                          : "bg-transparent"
                      }`}
                      layoutId={isActive ? "activeTab" : undefined}
                    >
                      <item.icon 
                        className={`w-5 h-5 transition-colors ${
                          isActive ? "text-white" : "text-muted-foreground"
                        }`} 
                      />
                    </motion.div>
                    
                    {/* Notification badge */}
                    {item.notifications && item.notifications > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold shadow-lg"
                      >
                        {item.notifications > 9 ? "9+" : item.notifications}
                      </motion.span>
                    )}
                  </div>
                  
                  {/* Label */}
                  <span 
                    className={`text-[10px] font-medium transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Active indicator line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute -bottom-2 w-8 h-1 rounded-full bg-gradient-to-r ${item.gradient}`}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Floating Action Button */}
          <motion.button
            onClick={() => setShowQuickAction(!showQuickAction)}
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-blue shadow-2xl flex items-center justify-center border-4 border-background"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: showQuickAction ? 45 : 0 }}
          >
            <Plus className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </nav>
    </>
  );
};
