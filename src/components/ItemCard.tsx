import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Calendar } from "lucide-react";

interface ItemCardProps {
  title: string;
  description: string;
  type: string;
  status: "Pending Review" | "Passed" | "Failed" | "Needs Attention";
  date: string;
  location: string;
}

export function ItemCard({ title, description, type, status, date, location }: ItemCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Passed":
        return "bg-green-100 text-green-800";
      case "Pending Review":
        return "bg-yellow-100 text-yellow-800";
      case "Failed":
        return "bg-red-100 text-red-800";
      case "Needs Attention":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="p-4 mb-3 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-foreground">{title}</h3>
        <Badge variant="secondary" className={`${getStatusColor(status)} text-xs`}>
          {status}
        </Badge>
      </div>
      
      <p className="text-muted-foreground text-sm mb-3">{description}</p>
      
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={12} />
            <span>{location}</span>
          </div>
        </div>
        <Badge variant="outline" className="text-xs">
          {type}
        </Badge>
      </div>
    </Card>
  );
}