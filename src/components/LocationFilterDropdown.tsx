import { ChevronDown, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface LocationFilterDropdownProps {
  selectedLocation: string;
  onLocationSelect: (location: string) => void;
  isActive?: boolean;
}

export function LocationFilterDropdown({ selectedLocation, onLocationSelect, isActive = false }: LocationFilterDropdownProps) {
  const locationOptions = [
    "All Locations",
    "Main Building",
    "All Floors", 
    "Warehouse", 
    "Building Foundation",
    "Roof Level",
    "Parking Garage",
    "Conference Rooms"
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 ${
        isActive 
          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
          : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      }`}>
        Location
        <ChevronDown size={14} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-40">
        {locationOptions.map((location) => (
          <DropdownMenuItem
            key={location}
            onClick={() => onLocationSelect(location)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>{location}</span>
            {selectedLocation === location && <Check size={14} />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}