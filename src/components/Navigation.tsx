import logo from "../../assets/OscasaviaLogo.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Oscasavia home"
            className="hover:opacity-70 transition-opacity"
          >
            <img src={logo} alt="Oscasavia Logo" className="h-7 w-auto" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <ul className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  aria-current={
                    location.pathname === link.path ? "page" : undefined
                  }
                  className={`relative text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side - Search & Mobile Menu */}
          <div className="flex items-center gap-2">
            <SearchBar />

            {/* Mobile Menu Button */}
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 hover:bg-secondary rounded-full transition-colors"
                aria-label="Open navigation menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </SheetTrigger>
          </div>
        </nav>
      </motion.header>

      <SheetContent
        className="w-80 max-w-[85vw] px-8 pt-24 lg:hidden"
        onKeyDown={(event) => {
          if (event.key === "Escape") setIsMobileMenuOpen(false);
        }}
      >
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <SheetDescription className="sr-only">
          Explore the portfolio
        </SheetDescription>
        <nav aria-label="Mobile navigation">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <SheetClose asChild>
                  <Link
                    to={link.path}
                    aria-current={
                      location.pathname === link.path ? "page" : undefined
                    }
                    className={`block py-4 text-2xl font-medium transition-colors ${location.pathname === link.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Navigation;
