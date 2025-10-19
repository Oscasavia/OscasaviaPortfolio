import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl w-full mx-auto text-center space-y-8 animate-fade-in-up">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold gradient-text animate-float break-words">
            Oscasavia Birungi
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
            Software Engineer
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Crafting elegant solutions to complex problems. Passionate about
          building innovative software that makes a difference.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button asChild size="lg" className="group">
            <Link to="/projects">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="glass-card">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>

        <div className="flex gap-6 justify-center items-center pt-8">
          <a
            href="https://github.com/Oscasavia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/oscasavia-birungi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:oscasavia@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-glow" />
      </div>
    </div>
  );
};

export default Home;
