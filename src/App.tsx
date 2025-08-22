import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "./components/ui/input";
import { ScrollArea } from "./components/ui/scroll-area";
import { FilterButton } from "./components/FilterButton";
import { TypeFilterDropdown } from "./components/TypeFilterDropdown";
import { StatusFilterDropdown } from "./components/StatusFilterDropdown";
import { DateFilterDropdown } from "./components/DateFilterDropdown";
import { LocationFilterDropdown } from "./components/LocationFilterDropdown";
import { BottomNavigation } from "./components/BottomNavigation";
import { ItemCard } from "./components/ItemCard";

// Mock data for demonstration
const mockItems = [
  {
    id: 1,
    title: "Electrical Panel Inspection",
    description: "Routine inspection of electrical panel and circuit breakers in main building.",
    type: "Electrical",
    status: "Pending Review" as const,
    date: "Jan 15",
    location: "Main Building"
  },
  {
    id: 2,
    title: "Fire Alarm System Test",
    description: "Monthly testing of fire alarm system and emergency evacuation procedures.",
    type: "Fire",
    status: "Passed" as const,
    date: "Jan 18",
    location: "All Floors"
  },
  {
    id: 3,
    title: "Safety Equipment Check",
    description: "Verification of safety equipment including first aid kits and safety gear.",
    type: "Safety",
    status: "Failed" as const,
    date: "Jan 12",
    location: "Warehouse"
  },
  {
    id: 4,
    title: "Structural Assessment",
    description: "Annual structural integrity assessment of building foundation and supports.",
    type: "Structural",
    status: "Needs Attention" as const,
    date: "Jan 25",
    location: "Building Foundation"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedDate, setSelectedDate] = useState("All Dates");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const filters = [
    { id: "all", label: "All" }
  ];

  return (
    <div className="flex flex-col h-screen bg-background max-w-md mx-auto">
      {/* Header with Search Bar */}
      <div className="bg-background border-b border-border p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-input-background border-0"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="px-4 py-3 bg-background border-b border-border">
        <div className="flex gap-2 overflow-x-auto">
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              label={filter.label}
              isActive={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            />
          ))}
          <TypeFilterDropdown
            selectedType={selectedType}
            onTypeSelect={setSelectedType}
            isActive={selectedType !== "All Types"}
          />
          <StatusFilterDropdown
            selectedStatus={selectedStatus}
            onStatusSelect={setSelectedStatus}
            isActive={selectedStatus !== "All Status"}
          />
          <DateFilterDropdown
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
            isActive={selectedDate !== "All Dates"}
          />
          <LocationFilterDropdown
            selectedLocation={selectedLocation}
            onLocationSelect={setSelectedLocation}
            isActive={selectedLocation !== "All Locations"}
          />
        </div>
      </div>

      {/* Content Area */}
      <ScrollArea className="flex-1 px-4">
        <div className="py-4">
          {mockItems.map((item) => (
            <ItemCard
              key={item.id}
              title={item.title}
              description={item.description}
              type={item.type}
              status={item.status}
              date={item.date}
              location={item.location}
            />
          ))}
        </div>
      </ScrollArea>

      {/* Bottom Navigation */}
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
}