import { Link } from "react-router-dom";
import BrikkleIcon from "@/assets/icons/brikkleIcon.svg?react";

const Footer = () => {
  return (
    <footer className="bg-background min-h-[400px]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div >
                <BrikkleIcon className="w-10 h-10" />
              </div>
              <span className="text-3xl font-bold font-display">Brikkle</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A real estate platform
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">How it works</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#why-brikkle"
                  className="hover:text-primary transition-colors"
                >
                  Why Brikkle
                </a>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="hover:text-primary transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Need help?</h3>
            <p className="text-sm text-muted-foreground">
              Reach us at{" "}
              <a
                href="mailto:support@brikkle.co"
                className="text-primary hover:underline"
              >
                support@brikkle.co
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Address</h3>
            <p className="text-sm text-muted-foreground">📍 Lagos Nigeria</p>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Brikkle. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              to="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms used
            </Link>
            <Link
              to="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
