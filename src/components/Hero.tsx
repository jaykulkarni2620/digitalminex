import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20">
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-glow/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Logo/Title */}
        <div className="fade-in">
          <h1 className="font-script text-7xl md:text-9xl font-bold mb-6">
            Magic<span className="text-gradient-teal">Teal</span>
          </h1>
          
          {/* Subtitle */}
          <div className="fade-in-delay-1 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              We Create Websites For
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-gradient-teal">
              Sale & Ads That Convert
            </p>
          </div>
          
          {/* Description */}
          <p className="fade-in-delay-2 text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Transform your business with stunning, high-converting websites and powerful marketing solutions that drive real results.
          </p>
          
          {/* CTA Buttons */}
          <div className="fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-teal hover:shadow-teal-strong transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" className="border-teal-primary text-teal-primary hover:bg-teal-primary/10 px-8 py-4 text-lg">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-teal-primary rounded-full animate-float glow-teal"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-teal-glow rounded-full animate-float glow-teal" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-1/2 left-5 w-2 h-2 bg-teal-primary rounded-full animate-float" style={{ animationDelay: '-4s' }}></div>
    </section>
  );
};

export default Hero;