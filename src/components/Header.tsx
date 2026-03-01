import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguageHook";
import { getTranslation } from "@/lib/translations";

const navLinks = [
  { path: "/", labelKey: "home" as const },
  { path: "/teachings", labelKey: "teachings" as const },
  { path: "/media", labelKey: "media" as const },
  { path: "/projects", labelKey: "projects" as const },
  { path: "/contact", labelKey: "contact" as const },
  { path: "/donation", labelKey: "donation" as const },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-saffron flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">ॐ</span>
          </div>
          <div>
            <h1 className="font-display text-lg font-bold leading-tight text-foreground">
              {getTranslation("SriArunachalaramana", language)}
            </h1>
            <p className="text-xs text-muted-foreground font-body">
              {getTranslation("charityTrust", language)}
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium font-body transition-colors ${
                location.pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {getTranslation(link.labelKey, language)}
            </Link>
          ))}
        </nav>

        {/* Language Picker & Mobile toggle */}
        <div className="flex items-center gap-3">
          {/* Language Picker */}
          <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                language === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-primary/10 font-body"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("te")}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                language === "te"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-primary/10 font-telugu"
              }`}
            >
              తెలుగు
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border"
          >
            <div className="container mx-auto py-4 px-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium font-body transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {getTranslation(link.labelKey, language)}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
