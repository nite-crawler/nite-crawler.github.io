import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Intro from "@/components/Intro";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import HennaCones from "@/components/HennaCones";
import Contact from "@/components/Contact";

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

    // Handle hash navigation on page load
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      console.log('Hash detected:', targetId);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        console.log('Element found:', element);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500); // Wait for page to fully render
    }
  }, []);

  return (
    <div className="min-h-screen">
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
