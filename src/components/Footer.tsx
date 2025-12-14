import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Oscasavia", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/oscasavia-birungi/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:oscasavia@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">OSCASAVIA</h3>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Software Engineer crafting elegant solutions to complex problems. 
              Passionate about building innovative software that makes a difference.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/50 uppercase text-sm tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/50 uppercase text-sm tracking-wider">
              More
            </h4>
            <ul className="space-y-3">
              {navLinks.slice(3).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex justify-center">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Oscasavia Birungi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
