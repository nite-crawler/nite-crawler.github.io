import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import HennaCones from "@/components/HennaCones";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <HennaCones />
        <div id="intro">
          <Intro />
        </div>
        <Gallery />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
