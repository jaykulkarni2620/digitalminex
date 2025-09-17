import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import WorkShowcase from "@/components/WorkShowcase";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <Portfolio />
      <Stats />
      <WorkShowcase />
      <Contact />
    </main>
  );
};

export default Index;
