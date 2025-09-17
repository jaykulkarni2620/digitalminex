import { Lightbulb, Target, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Best Creative Design",
      description: "Innovative and eye-catching designs that capture your brand essence and engage your audience effectively."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Strategic approach focused on achieving your business objectives and maximizing your return on investment."
    },
    {
      icon: Zap,
      title: "Super Fast",
      description: "Lightning-fast development and delivery without compromising on quality or attention to detail."
    }
  ];

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience The Benefits
          </h2>
          <p className="text-xl text-gradient-teal font-semibold mb-4">
            Of Our Expertise
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover why thousands of businesses trust us to deliver exceptional results that exceed expectations.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center group hover-lift ${
                index === 0 ? 'fade-in-delay-1' : 
                index === 1 ? 'fade-in-delay-2' : 'fade-in-delay-3'
              }`}
            >
              {/* Icon Circle */}
              <div className="relative mb-6 mx-auto w-20 h-20">
                <div className="w-20 h-20 bg-gradient-card rounded-full flex items-center justify-center border border-border group-hover:border-teal-primary/50 group-hover:shadow-teal transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-teal-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-teal-primary/20 blur-lg scale-0 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;