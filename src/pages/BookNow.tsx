import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import PrivateAppointments from "@/components/PrivateAppointments";
import Contact from "@/components/Contact";
import SEOHelmet from "@/components/SEOHelmet";

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
      <SEOHelmet 
        title="Book Your Henna Appointment - Henna Kala by Swathi Lincoln"
        description="Book your professional henna appointment with Swathi in Lincoln, Nebraska. Schedule your bridal, festival, or custom mehendi session today!"
        keywords="book henna appointment Lincoln, schedule mehendi Nebraska, henna booking Lincoln, bridal henna appointment, Swathi henna artist Lincoln"
        canonicalUrl="https://hennakala.com/book-now"
      />
      <Navigation />
      <main>
        <PrivateAppointments />
        <Contact />
      </main>
    </div>
  );
};

export default BookNow;