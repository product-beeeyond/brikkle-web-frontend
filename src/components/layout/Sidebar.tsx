import { Button } from "@/components/ui/button";
import {
  Home,
  ShoppingBag,
  Vote,
  Wallet,
  User,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: ShoppingBag, label: "Marketplace" },
  { icon: Vote, label: "Governance" },
  { icon: Wallet, label: "Wallets" },
];

const profileItems = [
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Support" },
  { icon: LogOut, label: "Log out" },
];

const SidebarItem = ({ icon: Icon, label, active }: any) => (
  <Button
    variant={active ? "default" : "ghost"}
    className="w-full justify-start gap-3 h-12"
  >
    <Icon className="w-5 h-5" />
    {label}
  </Button>
);

export default function Sidebar() {
  return (
    <aside className="w-64 bg-card border-r flex flex-col">
      <div className="p-6 border-b flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
          B
        </div>
        <span className="text-xl font-bold">Brikkle</span>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(i => (
          <SidebarItem key={i.label} {...i} />
        ))}
      </nav>

      <div className="p-4 border-t space-y-2">
        {profileItems.map(i => (
          <SidebarItem key={i.label} {...i} />
        ))}
      </div>
    </aside>
  );
}
