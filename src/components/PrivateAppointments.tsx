import { Button } from "@/components/ui/button";
import { MapPin, Clock, Palette } from "lucide-react";
import hennaDesignGrid from "@/assets/henna-design-grid.svg";
import hennaDesignDetailed from "@/assets/henna-design-detailed.svg";
import hennaBridal from "@/assets/henna-bridal.svg";
import hennaParty from "@/assets/henna-party.svg";
import hennaDesign3 from "@/assets/henna-design-3.svg";
import hennaDesign4 from "@/assets/henna-design-4.svg";
import hennaDesign5 from "@/assets/henna-design-5.svg";
import hennaDesign6 from "@/assets/henna-design-6.svg";

const PrivateAppointments = () => {
  // TODO: Update these URLs with your booking system links
  const BOOKING_URLS = {
    fifteenMinFreeconsultation: "https://tidycal.com/book-session-now/15min-freeconsultation",
    thirtyMinHenna: "https://tidycal.com/book-session-now/30min-henna",
    sixtyMinHenna: "https://tidycal.com/book-session-now/60min-henna",
    ninetyMinHenna: "https://tidycal.com/book-session-now/90min-henna",
    customQuote: "https://example.com/book/custom-quote"
  };

  const handleBookNow = (url: string) => {
    window.open(url, '_blank');
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
            Ready to adorn your hands with beautiful henna art? Get in touch with us to schedule your appointment or ask any questions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Location Section */}
        <div id="location" className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-float hover:shadow-float-hover transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-contact-accent mr-3" />
              <h2 className="text-3xl md:text-4xl font-seasons uppercase text-gallery-title">
                Location
              </h2>
            </div>
            <div className="text-center space-y-2 mb-6">
              <p className="text-xl font-semibold text-foreground">Lincoln, Nebraska</p>
              <p className="text-muted-foreground italic">** By appointment only **</p>
            </div>
            <p className="text-center text-foreground/80 max-w-2xl mx-auto">
              Convenient location in Lincoln with easy access and parking. Exact address will be provided upon booking confirmation.
            </p>
          </div>
        </div>

        {/* Time Estimates Section */}
        <div id="estimates" className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-float hover:shadow-float-hover transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-contact-accent mr-3" />
              <h2 className="text-3xl md:text-4xl font-seasons uppercase text-gallery-title">
                Time Estimates
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-secondary/20 rounded-xl p-6 overflow-hidden">
                <img 
                  src={hennaDesignGrid} 
                  alt="Henna design examples" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-secondary/20 rounded-xl p-6 overflow-hidden">
                <img 
                  src={hennaDesignDetailed} 
                  alt="Detailed henna design examples" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-secondary/20 rounded-xl p-6 overflow-hidden">
                <img 
                  src={hennaBridal} 
                  alt="Bridal henna package examples" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-secondary/20 rounded-xl p-6 overflow-hidden">
                <img 
                  src={hennaParty} 
                  alt="Party event henna examples" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-secondary/20 rounded-xl p-6 overflow-hidden">
                <img 
                  src={hennaDesign3} 
                  alt="Henna design example 3" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-secondary/20 rounded-xl p-6 overflow-hidden">
                <img 
                  src={hennaDesign4} 
                  alt="Henna design example 4" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-secondary/20 rounded-xl p-6 overflow-hidden">
                <img 
                  src={hennaDesign5} 
                  alt="Henna design example 5" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-secondary/20 rounded-xl p-6 overflow-hidden">
                <img 
                  src={hennaDesign6} 
                  alt="Henna design example 6" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Color Options Section */}
        <div id="colors" className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-float hover:shadow-float-hover transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <Palette className="w-8 h-8 text-contact-accent mr-3" />
              <h2 className="text-3xl md:text-4xl font-seasons uppercase text-gallery-title">
                Color Options
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-center text-foreground/90 mb-8">
                We use only all-natural dyes for beautiful, safe body art. Choose the color that best matches your style and event!
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-xl p-6 border-2 border-primary/20">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Traditional Henna</h3>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-amber-700 text-white rounded-full text-sm font-medium">
                      Reddish-Brown Color
                    </span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-contact-accent mr-2">•</span>
                      <span>Classic warm reddish-brown stain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-contact-accent mr-2">•</span>
                      <span>Lasts 1-3 weeks depending on care</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-contact-accent mr-2">•</span>
                      <span>Perfect for weddings, festivals & celebrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-contact-accent mr-2">•</span>
                      <span>100% natural and skin-safe</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-primary/20 rounded-xl p-6 border-2 border-secondary/20">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Jagua (Optional)</h3>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-slate-700 text-white rounded-full text-sm font-medium">
                      Dark Blue-Black Color
                    </span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-contact-accent mr-2">•</span>
                      <span>Deep blue-black tattoo-like appearance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-contact-accent mr-2">•</span>
                      <span>Lasts 1-2 weeks with proper aftercare</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-contact-accent mr-2">•</span>
                      <span>Modern alternative to traditional henna</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-contact-accent mr-2">•</span>
                      <span>Can be blended with henna for unique shades</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-secondary/20 rounded-xl p-4 text-center">
                <p className="text-sm text-foreground/80 italic">
                  💡 Tip: Henna is our default option. If you'd like jagua or a jagua-henna blend, please mention it when booking your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-float hover:shadow-float-hover transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <Palette className="w-8 h-8 text-contact-accent mr-3" />
              <h2 className="text-3xl md:text-4xl font-seasons uppercase text-gallery-title">
                Pricing & Options
              </h2>
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
                <p className="text-muted-foreground">Join Swathi for a complimentary 15-minute consultation on  henna or jagua session, to ensure everything is a perfect fit</p>
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
                <p className="text-muted-foreground">Covers one medium design on one hand or smaller motifs on both hands</p>
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
                <p className="text-muted-foreground">Large designs</p>
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
                <p className="text-muted-foreground">Large designs</p>
              </div>
            </div>
            <div className="mt-8 bg-secondary/20 rounded-xl p-6 text-center">
              <p className="text-foreground/80 mb-4">
                Each design is unique and pricing varies based on complexity and coverage. 
                Contact us for a personalized quote!
              </p>
              <Button 
                onClick={() => {
                  const letsConnectSection = document.getElementById('lets-connect');
                  letsConnectSection?.scrollIntoView({ behavior: 'smooth' });
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
