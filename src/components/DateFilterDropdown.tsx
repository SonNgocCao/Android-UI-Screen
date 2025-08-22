import { ChevronDown, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface DateFilterDropdownProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
  isActive?: boolean;
}

export function DateFilterDropdown({ selectedDate, onDateSelect, isActive = false }: DateFilterDropdownProps) {
  const dateOptions = [
    "All Dates",
    "Today",
    "This Week", 
    "This Month", 
    "Last Week",
    "Last Month",
    "Overdue"
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 ${
        isActive 
          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
          : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      }`}>
        Date
        <ChevronDown size={14} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-40">
        {dateOptions.map((date) => (
          <DropdownMenuItem
            key={date}
            onClick={() => onDateSelect(date)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>{date}</span>
            {selectedDate === date && <Check size={14} />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}