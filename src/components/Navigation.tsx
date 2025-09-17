import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-teal-primary rounded-md flex items-center justify-center">
              <span className="text-background font-bold text-lg italic">N</span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-teal-primary hover:text-teal-glow transition-colors duration-300">
              Home
            </a>
            <a href="#websites" className="text-foreground hover:text-teal-primary transition-colors duration-300">
              Websites
            </a>
            <a href="#ads" className="text-foreground hover:text-teal-primary transition-colors duration-300">
              Ads
            </a>
            <a href="#about" className="text-foreground hover:text-teal-primary transition-colors duration-300">
              About Us
            </a>
            <a href="#contact" className="text-foreground hover:text-teal-primary transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Let's Talk Button */}
          <Button 
            variant="outline" 
            className="border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-background hover:border-teal-primary transition-all duration-300 hover:shadow-teal"
          >
            Let's Talk →
          </Button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;