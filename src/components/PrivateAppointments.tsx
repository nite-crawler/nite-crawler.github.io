import { Button } from "@/components/ui/button";
import { MapPin, Clock, Palette } from "lucide-react";

const PrivateAppointments = () => {
  // TODO: Update these URLs with your booking system links
  const BOOKING_URLS = {
    simpleHand: "https://example.com/book/simple-hand",
    bothHands: "https://example.com/book/both-hands",
    bridal: "https://example.com/book/bridal-package",
    events: "https://example.com/book/events",
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
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Simple Design</h3>
                <p className="text-3xl font-bold text-contact-accent mb-2">30 minutes</p>
                <p className="text-muted-foreground">Perfect for beginners or minimal designs</p>
              </div>
              <div className="bg-secondary/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Detailed Design</h3>
                <p className="text-3xl font-bold text-contact-accent mb-2">1 hour</p>
                <p className="text-muted-foreground">Intricate patterns and full coverage</p>
              </div>
              <div className="bg-secondary/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Bridal Package</h3>
                <p className="text-3xl font-bold text-contact-accent mb-2">2-3 hours</p>
                <p className="text-muted-foreground">Complete bridal henna experience</p>
              </div>
              <div className="bg-secondary/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Party Events</h3>
                <p className="text-3xl font-bold text-contact-accent mb-2">Variable</p>
                <p className="text-muted-foreground">Please reach out for more detailst</p>
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
                  <h3 className="text-xl font-semibold text-foreground">Simple Hand Design</h3>
                  <Button 
                    onClick={() => handleBookNow(BOOKING_URLS.simpleHand)}
                    className="bg-contact-accent hover:bg-contact-accent/90 text-white"
                  >
                    Book Now
                  </Button>
                </div>
                <p className="text-muted-foreground">Beautiful patterns for one hand</p>
              </div>
              <div className="border-b border-border pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-foreground">Both Hands</h3>
                  <Button 
                    onClick={() => handleBookNow(BOOKING_URLS.bothHands)}
                    className="bg-contact-accent hover:bg-contact-accent/90 text-white"
                  >
                    Book Now
                  </Button>
                </div>
                <p className="text-muted-foreground">Coordinated designs for both hands</p>
              </div>
              <div className="border-b border-border pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-foreground">Bridal Package</h3>
                  <Button 
                    onClick={() => handleBookNow(BOOKING_URLS.bridal)}
                    className="bg-contact-accent hover:bg-contact-accent/90 text-white"
                  >
                    Book Now
                  </Button>
                </div>
                <p className="text-muted-foreground">Full bridal service with arms and feet</p>
              </div>
              <div className="pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-foreground">Events & Parties</h3>
                  <Button 
                    onClick={() => handleBookNow(BOOKING_URLS.events)}
                    className="bg-contact-accent hover:bg-contact-accent/90 text-white"
                  >
                    Book Now
                  </Button>
                </div>
                <p className="text-muted-foreground">Perfect for celebrations and gatherings</p>
              </div>
            </div>
            <div className="mt-8 bg-secondary/20 rounded-xl p-6 text-center">
              <p className="text-foreground/80 mb-4">
                Each design is unique and pricing varies based on complexity and coverage. 
                Contact us for a personalized quote!
              </p>
              <Button 
                onClick={() => handleBookNow(BOOKING_URLS.customQuote)}
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
