import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            

            <h1 className="heading-display">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Oscasavia
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Birungi
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground font-medium tracking-widest uppercase text-sm"
            >
              Software Engineer
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="w-24 h-1 bg-accent mx-auto rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="body-large max-w-xl mx-auto"
            >
              Crafting elegant solutions to complex problems. Building 
              innovative software that makes a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.82 }}
              className="flex flex-wrap gap-4 justify-center pt-4"
            >
              <Link to="/projects" className="btn-primary group">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex gap-6 justify-center pt-8"
            >
              {[
                { icon: Github, href: "https://github.com/Oscasavia", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/oscasavia-birungi/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:oscasavia@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 hover:bg-foreground/5 rounded-full transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} className="text-muted-foreground" />
          </motion.div>
        </motion.button>
      </section>

      {/* Quick highlights section */}
      <section className="surface-warm py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "10+", label: "Projects Delivered" },
              { value: "5+", label: "Technologies Mastered" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
