import { ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';

const WorkShowcase = () => {
  const projects = [
    {
      title: "E-commerce Revolution",
      description: "Complete redesign and development of a multi-vendor marketplace with advanced filtering, payment integration, and mobile-first approach.",
      image: portfolio1,
      tags: ["E-commerce", "React", "Node.js", "Stripe"],
      stats: { conversion: "+45%", traffic: "+120%" }
    },
    {
      title: "Creative Agency Rebrand",
      description: "Brand identity overhaul with modern website, custom animations, and comprehensive digital strategy implementation.",
      image: portfolio3,
      tags: ["Branding", "UI/UX", "Animation", "Strategy"],
      stats: { leads: "+200%", engagement: "+85%" }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Best Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dive deep into our most successful projects and see how we've transformed businesses with innovative solutions.
          </p>
        </div>
        
        {/* Projects */}
        <div className="space-y-20 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              } fade-in-delay-${index + 1}`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-3">
                      <Button size="sm" className="bg-teal-primary hover:bg-teal-dark">
                        <Eye className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Site
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-gradient-card p-4 rounded-xl shadow-card border border-border">
                  <div className="text-center">
                    <div className="text-teal-primary font-bold text-lg">
                      {Object.values(project.stats)[0]}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {Object.keys(project.stats)[0]}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-teal-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-teal-primary/10 text-teal-primary border border-teal-primary/20 rounded-full text-sm font-medium hover:bg-teal-primary/20 transition-colors duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Results */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-2xl font-bold text-gradient-teal mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {key} Increase
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <Button className="bg-gradient-teal hover:shadow-teal-strong transition-all duration-300 hover:scale-105">
                  View Full Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;