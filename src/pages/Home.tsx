import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Download,
  Code2,
  Smartphone,
  Workflow,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/OscasaviaProfilePic.jpg";
import resume from "@/assets/myResumeOscasavia.pdf";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

const Home = () => {
  const reducedMotion = useReducedMotion();
  const scrollToContent = () => {
    document
      .getElementById("selected-work")
      ?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-28">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
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
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                Oscasavia
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                Birungi
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
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
              Building web and mobile apps that connect people, and tools that
              help developers build and ship better software.
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
                {
                  icon: Github,
                  href: "https://github.com/Oscasavia",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/oscasavia-birungi/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:oscasavia@gmail.com",
                  label: "Email",
                },
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
            animate={{ y: reducedMotion ? 0 : [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} className="text-muted-foreground" />
          </motion.div>
        </motion.button>
      </section>

      <section
        id="selected-work"
        className="surface-warm scroll-mt-20 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Featured work
              </p>
              <h2 className="heading-section">A few things I’ve built.</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex shrink-0 items-center gap-2 font-medium link-underline"
            >
              All projects <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {projects.slice(0, 2).map((project) => (
              <AnimatedSection key={project.id} className="h-full">
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[.8fr_1.2fr] md:px-12 lg:gap-20">
          <AnimatedSection>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-secondary">
              <img
                src={portrait}
                alt="Oscasavia Birungi"
                loading="lazy"
                width="3352"
                height="4476"
                className="h-full w-full object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About me
            </p>
            <h2 className="heading-section mb-6">
              From everyday ideas to useful software.
            </h2>
            <p className="body-large mb-5">
              I’m Oscasavia, a software engineer with a background in
              automation, developer experience, and building for web and mobile.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              At CVS Health, I develop Flip, an enterprise feature flagging and
              experimentation platform, using Next.js, TypeScript, and Drizzle
              ORM. My work also spans CI/CD automation, developer tooling, and
              observability.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link to="/about" className="btn-primary">
                More about me <ArrowRight size={18} />
              </Link>
              <a
                href={resume}
                download="Oscasavia_Birungi_Resume.pdf"
                className="inline-flex items-center gap-2 font-medium link-underline"
              >
                <Download size={18} /> Download résumé
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="surface-warm py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="mb-12">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              What I do
            </p>
            <h2 className="heading-section">Built from end to end.</h2>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Web development",
                text: "Responsive interfaces and applications built with React, TypeScript, and a focus on the people using them.",
              },
              {
                icon: Smartphone,
                title: "Mobile applications",
                text: "Cross-platform experiences with Flutter and Firebase, bringing useful ideas to iOS and Android.",
              },
              {
                icon: Workflow,
                title: "Developer experience",
                text: "Automation, delivery pipelines, and observability that help engineering teams build and ship with confidence.",
              },
            ].map((item) => (
              <AnimatedSection key={item.title} className="h-full">
                <div className="glass-card h-full p-8">
                  <item.icon className="mb-6 h-7 w-7" strokeWidth={1.5} />
                  <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <Link
            to="/skills"
            className="mt-8 inline-flex items-center gap-2 font-medium link-underline"
          >
            Explore my skills <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 text-center md:py-28">
        <h2 className="heading-section mb-5">Let’s build something useful.</h2>
        <p className="body-large mx-auto mb-8 max-w-xl">
          Have a project in mind or want to talk engineering? I’d love to hear
          from you.
        </p>
        <Link to="/contact" className="btn-primary">
          Get in touch <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
};

export default Home;
