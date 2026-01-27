// import { Switch } from "@/components/ui/switch";
// import { useTheme } from "@/hooks/useTheme";
// import { useEffect, useState } from "react";

// const LandingHeader = () => {
//   const [changed, SwitchChanged] = useState(false);
//   const { setTheme } = useTheme();
//   useEffect(() => {
//     changed === true ? setTheme("dark") : setTheme("light");
//   }, [changed, setTheme]);

//   return (
//     <div>
//       <Switch checked={changed} onCheckedChange={SwitchChanged} />
//     </div>
//   );
// };

// export default LandingHeader;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BrikkleIcon from "@/assets/icons/brikkleIcon.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8">
            <BrikkleIcon />
          </div>
          <span className="text-xl font-bold font-display">Brikkle</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-sm hover:text-primary transition-colors"
          >
            How it works
          </a>
          <a
            href="#why-brikkle"
            className="text-sm hover:text-primary transition-colors"
          >
            Why Brikkle
          </a>
          <a
            href="#faqs"
            className="text-sm hover:text-primary transition-colors"
          >
            FAQs
          </a>
        </nav>

        <Button asChild>
          <Link to="/waitlist">Join the waitlist</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
