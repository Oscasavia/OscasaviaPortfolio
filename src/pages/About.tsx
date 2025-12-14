import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-content">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="max-w-3xl">
            <p className="text-muted-foreground font-medium tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h1 className="heading-display mb-8">
              Hello, I'm<br />
              <span className="text-muted-foreground">Oscasavia</span>
            </h1>
            <div className="divider mb-8" />
            <p className="body-large">
              Get to know me better.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio Section */}
      <section className="surface-warm py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <AnimatedSection delay={0.1}>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-secondary">
                <img 
                  src="/assets/OscasaviaProfilePic.jpg" 
                  alt="Oscasavia - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="heading-section">
                  Passionate about building innovative software
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    I'm a passionate software engineer with a love for creating
                    innovative solutions and beautiful user experiences. My
                    journey in technology has been driven by curiosity and a
                    desire to make an impact.
                  </p>
                  <p>
                    With expertise in modern web technologies and a strong
                    foundation in software development principles, I specialize in
                    building scalable, efficient, and user-friendly applications.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new
                    technologies, working on personal projects, or
                    sharing knowledge with the developer community.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection className="mb-16">
            <h2 className="heading-section">Quick Facts</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                label: "Location",
                value: "United States",
              },
              {
                icon: Briefcase,
                label: "Current Role",
                value: "DevEx Engineer at CVS Health",
              },
              {
                icon: GraduationCap,
                label: "Education",
                value: "BS Software Engineering, WSU",
              },
            ].map((fact, index) => (
              <AnimatedSection key={fact.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 card-hover"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                    <fact.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{fact.label}</p>
                  <p className="text-xl font-semibold">{fact.value}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
