import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-glow/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to transform your business? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 fade-in-delay-1">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient-teal">
                Let's Turn Your Dream Into Reality
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're here to help you succeed. Whether you need a new website, a complete rebrand, 
                or strategic marketing guidance, our team is ready to deliver exceptional results.
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center group hover-lift">
                <div className="w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center mr-4 group-hover:bg-teal-primary/10 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-teal-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-muted-foreground">hello@magicteal.com</p>
                </div>
              </div>
              
              <div className="flex items-center group hover-lift">
                <div className="w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center mr-4 group-hover:bg-teal-primary/10 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-teal-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center group hover-lift">
                <div className="w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center mr-4 group-hover:bg-teal-primary/10 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-teal-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">123 Creative Street, Design City</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="fade-in-delay-2">
            <form className="space-y-6 bg-gradient-card p-8 rounded-2xl shadow-card border border-border hover:shadow-hover transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="bg-background/50 border-input-border focus:border-teal-primary focus:ring-teal-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-background/50 border-input-border focus:border-teal-primary focus:ring-teal-primary/20"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-background/50 border-input-border focus:border-teal-primary focus:ring-teal-primary/20"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select className="w-full px-3 py-2 bg-background/50 border border-input-border rounded-md focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 focus:outline-none transition-colors duration-300">
                  <option>Web Design & Development</option>
                  <option>E-commerce Solution</option>
                  <option>Brand Identity</option>
                  <option>Digital Marketing</option>
                  <option>Mobile App</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="bg-background/50 border-input-border focus:border-teal-primary focus:ring-teal-primary/20 resize-none"
                />
              </div>
              
              <Button className="w-full bg-gradient-teal hover:shadow-teal-strong transition-all duration-300 hover:scale-[1.02] group">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;