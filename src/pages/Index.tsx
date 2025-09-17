import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Intro from "@/components/Intro";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import HennaCones from "@/components/HennaCones";
import Contact from "@/components/Contact";
import SEOHelmet from "@/components/SEOHelmet";

const Index = () => {
  useEffect(() => {
    // Set page-specific meta tags
    document.title = "Henna Kala by Swathi - Traditional & Modern Mehendi Designs";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional henna artistry by Swathi featuring traditional and contemporary mehendi designs. Book your session for bridal, festival, or custom henna patterns.');
    }

    // Add keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'henna artist, mehendi designs, bridal henna, traditional henna, custom henna, festival mehendi, Swathi henna artist, henna patterns, Indian mehendi, Arabic henna');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHelmet 
        title="Henna Kala by Swathi - Professional Henna Artist in Lincoln, Nebraska"
        description="Professional henna artistry by Swathi in Lincoln, Nebraska. Specializing in bridal, festival, and custom mehendi designs. Book your henna session today!"
        keywords="henna artist Lincoln Nebraska, mehendi designs Lincoln, bridal henna Nebraska, traditional henna artist, custom henna patterns, festival mehendi, Arabic henna designs, Indian mehendi artist Lincoln"
        canonicalUrl="https://hennakala.com/"
      />
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <section aria-labelledby="brand-story">
          <BrandStory />
        </section>
        <section aria-labelledby="about-artist">
          <About />
        </section>
        <section aria-labelledby="henna-cones">
          <HennaCones />
        </section>
        <section aria-labelledby="intro" id="intro">
          <Intro />
        </section>
        <section aria-labelledby="gallery">
          <Gallery />
        </section>
        <section aria-labelledby="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
