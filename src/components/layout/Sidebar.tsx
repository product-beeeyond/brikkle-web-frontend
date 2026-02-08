/* eslint-disable @typescript-eslint/no-explicit-any */
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
import BrikkleIconEditable from "@/assets/icons/brikkleIconEditable.svg?react";

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
    <aside className="w-64 max-h-screen min-h-screen fixed bg-card border-r flex flex-col">
      <div className=" pb-4 pt-7 px-4 border-b flex items-center ">
        <div className="text-primary dark:text-tertiary">
          <BrikkleIconEditable className="w-6 h-6 flex-shrink-0" />
        </div>
        <span className="text-xl font-bold">Brikkle</span>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((i) => (
          <SidebarItem key={i.label} {...i} />
        ))}
      </nav>

      <div className="p-4 border-t space-y-2">
        {profileItems.map((i) => (
          <SidebarItem key={i.label} {...i} />
        ))}
      </div>
    </aside>
  );
}
