import { lazy, Suspense } from "react";
import { MotionConfig } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <MotionConfig reducedMotion="user">
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content" tabIndex={-1}>
          <Suspense
            fallback={
              <div className="max-w-7xl mx-auto px-6 md:px-12 min-h-[70vh] pt-40" role="status">
                Loading page…
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </MotionConfig>
);

export default App;
