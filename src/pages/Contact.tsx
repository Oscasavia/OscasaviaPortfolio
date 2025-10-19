import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="bg-background/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Subject</label>
            <Input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={6}
              required
              className="bg-background/50 resize-none"
            />
          </div>

          <Button type="submit" size="lg" className="w-full group">
            Send Message
            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
