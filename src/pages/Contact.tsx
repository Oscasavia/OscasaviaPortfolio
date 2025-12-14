import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import AnimatedSection from "@/components/AnimatedSection";

const SERVICE_ID = "service_qa7kb7h";
const TEMPLATE_ID = "template_f63duva";
const PUBLIC_KEY = "39winCnjPI9lH_WWt";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formRef.current) {
      setIsLoading(false);
      toast.error("An unexpected error occurred.");
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          toast.success("Message sent successfully! I'll get back to you soon.");
          formRef.current?.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "oscasavia@gmail.com",
      href: "mailto:oscasavia@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (224) 508-2801",
      href: "tel:+12245082801",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "United States",
      href: null,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-content pb-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="max-w-3xl">
            <p className="text-muted-foreground font-medium tracking-widest uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h1 className="heading-display mb-8">
              Let's Work<br />
              <span className="text-muted-foreground">Together</span>
            </h1>
            <div className="divider mb-8" />
            <p className="body-large">
              Have a project in mind or just want to say hello? 
              I'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-semibold hover:text-accent transition-colors inline-flex items-center gap-1 group"
                    >
                      {info.value}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  ) : (
                    <p className="font-semibold">{info.value}</p>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="surface-warm py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-12 space-y-8"
            >
              <div className="text-center mb-8">
                <h2 className="heading-card mb-2">Send a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <fieldset disabled={isLoading} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      required
                      className="h-14 rounded-2xl bg-background border-border px-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="h-14 rounded-2xl bg-background border-border px-6"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="h-14 rounded-2xl bg-background border-border px-6"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="rounded-2xl bg-background border-border p-6 resize-none"
                  />
                </div>
              </fieldset>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full group"
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
