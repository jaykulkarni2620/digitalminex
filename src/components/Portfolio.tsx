import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import portfolio5 from '@/assets/portfolio-5.jpg';
import portfolio6 from '@/assets/portfolio-6.jpg';

const Portfolio = () => {
  const portfolioItems = [
    { image: portfolio1, title: "Web Development", category: "Design" },
    { image: portfolio2, title: "E-commerce", category: "Development" },
    { image: portfolio3, title: "Creative Agency", category: "Branding" },
    { image: portfolio4, title: "Corporate", category: "Business" },
    { image: portfolio5, title: "Mobile App", category: "Mobile" },
    { image: portfolio6, title: "Restaurant", category: "Hospitality" }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-teal-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-teal-glow/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Design to Share
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our stunning portfolio of projects that showcase creativity, innovation, and results-driven design.
          </p>
        </div>
        
        {/* 3D Portfolio Grid */}
        <div className="card-3d max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 perspective-1000">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`card-3d-item group ${
                  index < 3 ? 'fade-in-delay-1' : 'fade-in-delay-2'
                }`}
              >
                <div className="bg-gradient-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-block px-3 py-1 bg-teal-primary/90 text-primary-foreground text-sm rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-white font-semibold text-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-teal-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.category}
                        </p>
                      </div>
                      <div className="w-2 h-2 bg-teal-primary rounded-full group-hover:scale-150 group-hover:shadow-teal transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;