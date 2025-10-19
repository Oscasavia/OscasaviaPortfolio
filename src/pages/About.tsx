import { User } from "lucide-react";
import profilePic from "../../assets/images/OscasaviaProfilePic.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            Get to know me better
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="glass-card p-8 rounded-2xl space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src={profilePic} 
                alt="Oscasavia Birungi - Software Engineer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <h2 className="text-2xl font-bold text-primary">
                Hello! I'm Oscasavia
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Location</span>
                  <span className="text-foreground">United States</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Experience</span>
                  <span className="text-foreground">Software Engineer</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Email</span>
                  <span className="text-foreground">oscasavia@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability</span>
                  <span className="text-primary">Not in the Market</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
