import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BrikkleIcon from "@/assets/icons/brikkleIcon.svg?react";
// import { useTheme } from "@/hooks/Theme/useTheme";
// import { useEffect, useState } from "react";
import { MoonStar, Sun, Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/hooks/Theme/themeContext";

const Header = () => {
  const { setTheme, theme } = useTheme();

  const ThemeButton = () => (
    <Button
      variant="wrapper"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative group"
    >
      <Sun className="h-5 w-5 transition-all duration-300 text-foreground group-hover:text-violet-500 dark:-rotate-90 dark:scale-0" />
      <MoonStar className="absolute h-5 w-5 transition-all duration-300 text-foreground group-hover:text-violet-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </Button>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md">
      <div
        className="
          mx-auto
          max-w-4xl
          px-4 sm:px-6 lg:px-8
          pt-10
          pb-2
        "
      >
        <div
          className="
            flex items-center justify-between
            rounded-md
            bg-header/60
            px-3 sm:px-4
            py-3
            transition-colors
          "
        >
          {/* LEFT — Logo */}
          <Link to="/" className="flex items-center justify-center   min-w-0">
            <div>
              <BrikkleIcon color="#7d48ed" className="w-8 h-8 flex-shrink-0" />
            </div>
            <p className="text-xl sm:text-xl font-bold font-display truncate">
              Brikkle
            </p>
          </Link>

          {/* CENTER — Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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

            <ThemeButton />
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme on mobile */}
            <div className="md:hidden">
              <ThemeButton />
            </div>

            {/* CTA desktop */}
            <div className="hidden md:block">
              <Button asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="wrapper" className="md:hidden p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="pt-12">
                <nav className="flex flex-col gap-6">
                  <a
                    href="#how-it-works"
                    className="text-lg hover:text-primary"
                  >
                    How it works
                  </a>
                  <a href="#why-brikkle" className="text-lg hover:text-primary">
                    Why Brikkle
                  </a>
                  <a href="#faqs" className="text-lg hover:text-primary">
                    FAQs
                  </a>

                  <Button asChild className="mt-4">
                    <Link to="/login">Login</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
