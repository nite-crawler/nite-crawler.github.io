import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";

const BookNow = () => {
  useEffect(() => {
    // Set page-specific meta tags
    document.title = "Book Your Henna Appointment - Henna Kala by Swathi";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Book your professional henna appointment with Swathi. Schedule your bridal, festival, or custom mehendi session today.');
    }

    // Add keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'book henna appointment, schedule mehendi, henna booking, bridal henna appointment, Swathi henna artist, Lincoln Nebraska henna');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Contact />
      </main>
    </div>
  );
};

export default BookNow;