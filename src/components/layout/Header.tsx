import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-card border-b px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input placeholder="Search here" className="pl-10" />
        </div>

        <Button size="icon" variant="ghost" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
        </Button>

        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50" />
      </div>
    </header>
  );
}
