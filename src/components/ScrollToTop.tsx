import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Software Engineer",
      "/about": "About",
      "/projects": "Projects",
      "/skills": "Skills",
      "/resume": "Résumé & Experience",
      "/contact": "Contact",
    };
    document.title = `${titles[pathname] ?? "Page not found"} | Oscasavia Birungi`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
