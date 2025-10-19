import { useState, useRef } from "react"; // Import useRef
import emailjs from "@emailjs/browser"; // Import emailjs
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// --- ADD YOUR KEYS HERE ---
const SERVICE_ID = "service_qa7kb7h";
const TEMPLATE_ID = "template_f63duva";
const PUBLIC_KEY = "39winCnjPI9lH_WWt";
// --------------------------

const Contact = () => {
  // We need a ref to the form element
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Note: We don't need the 'formData' state anymore
  // because emailjs can read directly from the form.

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formRef.current) {
      setIsLoading(false);
      toast.error("An unexpected error occurred.");
      return;
    }

    // Use emailjs to send the form data
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("EmailJS Success:", result.text);
          toast.success("Message sent successfully! I'll get back to you soon.");
          formRef.current?.reset(); // Reset the form fields
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          toast.error("Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  // We don't need the handleChange function anymore

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12 animate-fade-in-up">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's work together on your next project
          </p>
        </div>

        {/* Contact Info Cards... no changes needed */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl text-center space-y-3 hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold">Email</h3>
            <p className="text-sm text-muted-foreground">
              oscasavia@gmail.com
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center space-y-3 hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold">Phone</h3>
            <p className="text-sm text-muted-foreground">+1 (224) 508-2801</p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center space-y-3 hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold">Location</h3>
            <p className="text-sm text-muted-foreground">United States</p>
          </div>
        </div>

        {/* --- ADD THE ref TO THE <form> TAG --- */}
        <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
          <fieldset disabled={isLoading} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input
                  name="name" // This MUST match the template variable {{name}}
                  placeholder="Your name"
                  required
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  name="email" // This MUST match {{email}}
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input
                name="subject" // This MUST match {{subject}}
                placeholder="What's this about?"
                required
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea
                name="message" // This MUST match {{message}}
                placeholder="Tell me about your project..."
                rows={6}
                required
                className="bg-background/50 resize-none"
              />
            </div>
          </fieldset>

          <Button
            type="submit"
            size="lg"
            className="w-full group"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;