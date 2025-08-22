import { Button } from "./ui/button";

interface FilterButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function FilterButton({ label, isActive = false, onClick }: FilterButtonProps) {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className="h-8 px-3 rounded-full"
    >
      {label}
    </Button>
  );
}