import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import SEOHelmet from "@/components/SEOHelmet";

const EventsPage = () => {
  useEffect(() => {
    // Set page-specific meta tags for Events page
    document.title = "Henna Events & Workshops - Henna Kala by Swathi";
    
    // Update meta description for Events page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join Swathi\'s henna workshops and events. Learn traditional mehendi techniques, book private henna parties, and explore the art of henna with professional guidance.');
    }

    // Update keywords for Events page
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'henna workshops, mehendi classes, henna events, private henna party, henna learning, mehendi workshop, bridal henna events, festival henna workshops');
    }

    // Update canonical URL for Events page
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://hennakala.com/events');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHelmet 
        title="Henna Events & Workshops - Henna Kala by Swathi"
        description="Join Swathi's henna workshops and events in Lincoln, Nebraska. Learn traditional mehendi techniques, book private henna parties, and explore the art of henna."
        keywords="henna workshops Lincoln, mehendi classes Nebraska, henna events, private henna party, henna learning, bridal henna events Lincoln"
        canonicalUrl="https://hennakalabyswathi.lovable.app/events"
      />
      <Navigation />
      <main>
        <section aria-labelledby="events-header">
          <Events />
        </section>
        <section aria-labelledby="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default EventsPage;