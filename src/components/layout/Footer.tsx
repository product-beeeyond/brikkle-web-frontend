import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8">
                <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.49133 -0.076355L16.5041 1.41483V20.8005H8.99758V11.8531H1.49133V-0.076355Z" fill="#5BFD4F"/>
                  <path d="M7.4966 13.3443H-0.00964355V22.2914H7.4966V13.3443Z" fill="#5BFD4F"/>
                </svg>
              </div>
              <span className="text-xl font-bold font-display">Brikkle</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A real estate platform
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">How it works</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#why-brikkle" className="hover:text-primary transition-colors">
                  Why Brikkle
                </a>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-primary transition-colors">
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
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms used
            </Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;