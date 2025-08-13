import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="intro">
          <Intro />
        </div>
        <Gallery />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
