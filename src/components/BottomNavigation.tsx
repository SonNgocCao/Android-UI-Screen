import { History, Clock, Map, Settings } from "lucide-react";

interface BottomNavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function BottomNavItem({ icon, label, isActive = false, onClick }: BottomNavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center py-2 px-1 transition-colors ${
        isActive ? "text-primary" : "text-muted-foreground"
      }`}
    >
      <div className="mb-1">
        {icon}
      </div>
      <span className="text-xs">{label}</span>
    </button>
  );
}

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: "history", label: "History", icon: <History size={20} /> },
    { id: "pending", label: "Pending", icon: <Clock size={20} /> },
    { id: "map", label: "Map", icon: <Map size={20} /> },
    { id: "settings", label: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="bg-background border-t border-border">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => (
          <BottomNavItem
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          />
        ))}
      </div>
    </div>
  );
}