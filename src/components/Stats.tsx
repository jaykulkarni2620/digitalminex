const Stats = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", description: "Successfully delivered" },
    { number: "400+", label: "Happy Clients", description: "Worldwide satisfaction" },
    { number: "4.9", label: "Average Rating", description: "Client testimonials" },
    { number: "300+", label: "Team Members", description: "Expert professionals" }
  ];

  return (
    <section className="py-20 bg-background-secondary relative">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-1 h-1 bg-teal-primary rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-teal-glow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-teal-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-teal-glow rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visualize Proved Web Formation
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our track record speaks for itself. These numbers represent years of dedication, 
            expertise, and countless success stories from clients around the globe.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group scale-in ${
                index === 0 ? 'animation-delay-200' : 
                index === 1 ? 'animation-delay-400' : 
                index === 2 ? 'animation-delay-600' : 'animation-delay-800'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Number */}
              <div className="relative mb-4">
                <h3 className="text-4xl md:text-5xl font-bold text-gradient-teal mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </h3>
                {/* Glow Effect */}
                <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-teal-primary/20 blur-lg group-hover:blur-xl transition-all duration-300">
                  {stat.number}
                </div>
              </div>
              
              {/* Label */}
              <h4 className="text-lg font-semibold mb-2 group-hover:text-teal-primary transition-colors duration-300">
                {stat.label}
              </h4>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
              
              {/* Decorative Line */}
              <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;