import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Palette } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";
import hennaDesignGrid from "@/assets/henna-design-grid.svg";
import hennaDesignDetailed from "@/assets/henna-design-detailed.svg";
import hennaBridal from "@/assets/henna-bridal.svg";
import hennaParty from "@/assets/henna-party.svg";
import hennaDesign3 from "@/assets/henna-design-3.svg";
import hennaDesign4 from "@/assets/henna-design-4.svg";
import hennaDesign5 from "@/assets/henna-design-5.svg";
import hennaDesign6 from "@/assets/henna-design-6.svg";
import blendsStainsChart from "@/assets/blends-stains-chart.png";

const PrivateAppointments = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const hennaImages = [
    { src: hennaDesignGrid, alt: "Henna design grid pattern" },
    { src: hennaDesignDetailed, alt: "Detailed henna design" },
    { src: hennaBridal, alt: "Bridal henna design" },
    { src: hennaParty, alt: "Party henna design" },
    { src: hennaDesign3, alt: "Henna design variation 3" },
    { src: hennaDesign4, alt: "Henna design variation 4" },
    { src: hennaDesign5, alt: "Henna design variation 5" },
    { src: hennaDesign6, alt: "Henna design variation 6" },
  ];

  // TODO: Update these URLs with your booking system links
  const BOOKING_URLS = {
    fifteenMinFreeconsultation: "https://tidycal.com/book-session-now/15min-freeconsultation",
    thirtyMinHenna: "https://tidycal.com/book-session-now/30min-henna",
    sixtyMinHenna: "https://tidycal.com/book-session-now/60min-henna",
    ninetyMinHenna: "https://tidycal.com/book-session-now/90min-henna",
    customQuote: "https://example.com/book/custom-quote",
  };

  const handleBookNow = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-primary/20 to-secondary/30 flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-seasons uppercase text-gallery-title mb-4">
            Ready, Set, Henna — Book Now!
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto px-4">
            Ready to adorn your hands with beautiful henna art? Get in touch with us to schedule your appointment or ask
            any questions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Location Section */}
        <div id="location" className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-float hover:shadow-float-hover transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-contact-accent mr-3" />
              <h2 className="text-3xl md:text-4xl font-seasons uppercase text-gallery-title">Location</h2>
            </div>
            <div className="text-center space-y-2 mb-6">
              <p className="text-xl font-semibold text-foreground">5815 S 58th St Suite D</p>
              <p className="text-lg text-foreground">Lincoln, NE 68516</p>
              <p className="text-muted-foreground italic">** By appointment only **</p>
            </div>
            <p className="text-center text-foreground/80 max-w-2xl mx-auto">
              Convenient location in Lincoln with easy access and parking.
            </p>
          </div>
        </div>

        {/* Time Estimates Section */}
        <div id="estimates" className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-float hover:shadow-float-hover transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-contact-accent mr-3" />
              <h2 className="text-3xl md:text-4xl font-seasons uppercase text-gallery-title">Time Estimates</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hennaImages.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden cursor-pointer group relative"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-center px-2">
                      Click to view
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ImageLightbox
          images={hennaImages}
          isOpen={lightboxOpen}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentImageIndex}
        />

        {/* Color Options Section */}
        <div id="colors" className="max-w-6xl mx-auto mb-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-float hover:shadow-float-hover transition-all duration-300">
            <div className="flex items-center justify-center mb-8">
              <Palette className="w-8 h-8 text-contact-accent mr-3" />
              <h2 className="text-3xl md:text-4xl font-seasons uppercase text-gallery-title">Blends & Stains</h2>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={blendsStainsChart} 
                alt="Henna and Jagua blends and stains comparison chart showing colors, duration, and best uses"
                className="w-full max-w-4xl rounded-lg"
              />
            </div>

            <div className="mt-6 bg-secondary/20 rounded-xl p-4 text-center">
              <p className="text-sm text-foreground/80 italic">
                💡 Tip: Henna is our default option. If you'd like jagua or a jagua-henna blend, please mention it
                when booking your appointment.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-float hover:shadow-float-hover transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <Palette className="w-8 h-8 text-contact-accent mr-3" />
              <h2 className="text-3xl md:text-4xl font-seasons uppercase text-gallery-title">Pricing & Options</h2>
            </div>
            <div className="space-y-6">
              <div className="border-b border-border pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-foreground">15-min FREE CONSULTATION</h3>
                  <Button
                    onClick={() => handleBookNow(BOOKING_URLS.fifteenMinFreeconsultation)}
                    className="bg-contact-accent hover:bg-contact-accent/90 text-white"
                  >
                    Book Now
                  </Button>
                </div>
                <p className="text-muted-foreground">
                  Join Swathi for a complimentary 15-minute consultation on henna or jagua session, to ensure everything
                  is a perfect fit
                </p>
              </div>
              <div className="border-b border-border pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-foreground">30-Minute HENNA Session</h3>
                  <Button
                    onClick={() => handleBookNow(BOOKING_URLS.thirtyMinHenna)}
                    className="bg-contact-accent hover:bg-contact-accent/90 text-white"
                  >
                    Book Now
                  </Button>
                </div>
                <p className="text-muted-foreground"></p>
              </div>
              <div className="border-b border-border pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-foreground">1-Hour HENNA Session</h3>
                  <Button
                    onClick={() => handleBookNow(BOOKING_URLS.sixtyMinHenna)}
                    className="bg-contact-accent hover:bg-contact-accent/90 text-white"
                  >
                    Book Now
                  </Button>
                </div>
                <p className="text-muted-foreground"></p>
              </div>
              <div className="pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-foreground">1.5-Hour HENNA Session</h3>
                  <Button
                    onClick={() => handleBookNow(BOOKING_URLS.ninetyMinHenna)}
                    className="bg-contact-accent hover:bg-contact-accent/90 text-white"
                  >
                    Book Now
                  </Button>
                </div>
                <p className="text-muted-foreground"></p>
              </div>
            </div>
            <div className="mt-8 bg-secondary/20 rounded-xl p-6 text-center">
              <p className="text-foreground/80 mb-4">
                Each design is unique and pricing varies based on complexity and coverage. Contact us for a personalized
                quote!
              </p>
              <Button
                onClick={() => {
                  const letsConnectSection = document.getElementById("lets-connect");
                  letsConnectSection?.scrollIntoView({ behavior: "smooth" });
                }}
                size="lg"
                className="bg-contact-accent hover:bg-contact-accent/90 text-white font-semibold"
              >
                GET YOUR CUSTOM QUOTE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateAppointments;
