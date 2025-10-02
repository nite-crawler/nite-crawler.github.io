import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";

const PrivateAppointments = () => {
  // TODO: Update this URL with your booking system link
  const BOOKING_URL = "";

  const handleBookNow = () => {
    if (BOOKING_URL) {
      window.open(BOOKING_URL, '_blank');
    } else {
      console.log('Booking URL not configured yet');
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-6 text-gallery-title font-seasons uppercase font-thin">
            PRIVATE APPOINTMENTS
          </h1>
          <p className="text-xl max-w-3xl mx-auto font-extralight text-[#272725]">
            Book a personalized henna session tailored to your style and occasion. From intricate bridal designs to festival celebrations, we bring your vision to life.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in">
          <a href="#location" className="text-nav-text hover:text-accent transition-smooth font-medium">
            Location
          </a>
          <span className="text-border">|</span>
          <a href="#estimates" className="text-nav-text hover:text-accent transition-smooth font-medium">
            Time Estimates
          </a>
          <span className="text-border">|</span>
          <a href="#booking" className="text-nav-text hover:text-accent transition-smooth font-medium">
            Book Now
          </a>
        </div>

        {/* Location Section */}
        <div id="location" className="max-w-4xl mx-auto mb-20 animate-scale-in">
          <div className="bg-gradient-to-br from-secondary/20 to-background rounded-2xl p-8 md:p-12 shadow-float">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h2 className="text-3xl text-foreground font-seasons mb-4">Location</h2>
                <p className="text-lg font-medium text-[#272725] mb-2">
                  Lincoln, Nebraska
                </p>
                <p className="text-muted-foreground italic">
                  ** By appointment only **
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Private studio sessions available in Lincoln, Nebraska. Comfortable, clean environment with ample parking. Travel options available for events and parties within the Lincoln area.
            </p>
          </div>
        </div>

        {/* Time Estimates Section */}
        <div id="estimates" className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <div className="bg-gradient-to-br from-secondary/20 to-background rounded-2xl p-8 md:p-12 shadow-float">
            <div className="flex items-start gap-4 mb-8">
              <Clock className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h2 className="text-3xl text-foreground font-seasons mb-4">Time Estimates</h2>
                <p className="text-muted-foreground mb-6">
                  Appointment durations vary based on design complexity and coverage area.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-seasons text-xl text-[#272725] mb-2">Simple Designs</h3>
                <p className="text-muted-foreground mb-1">Single hand/foot: 30-45 minutes</p>
                <p className="text-muted-foreground">Both hands/feet: 1-1.5 hours</p>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-seasons text-xl text-[#272725] mb-2">Moderate Designs</h3>
                <p className="text-muted-foreground mb-1">Single hand/foot: 45-60 minutes</p>
                <p className="text-muted-foreground">Both hands/feet: 1.5-2 hours</p>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-seasons text-xl text-[#272725] mb-2">Intricate Designs</h3>
                <p className="text-muted-foreground mb-1">Single hand/foot: 1-1.5 hours</p>
                <p className="text-muted-foreground">Both hands/feet: 2-3 hours</p>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-seasons text-xl text-[#272725] mb-2">Bridal Packages</h3>
                <p className="text-muted-foreground mb-1">Hands & Arms: 2-4 hours</p>
                <p className="text-muted-foreground">Full Bridal: 4-6 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking CTA Section */}
        <div id="booking" className="max-w-4xl mx-auto animate-scale-in">
          <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl p-8 md:p-12 shadow-float-hover text-center">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-12 h-12 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl text-foreground font-seasons mb-4">
              Ready to Book?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule your private henna appointment today. Choose your preferred date, time, and design style.
            </p>
            <Button
              onClick={handleBookNow}
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth text-lg px-8 py-6 rounded-full shadow-float hover:shadow-float-hover"
            >
              <Calendar className="mr-2" />
              Book Private Appointment
            </Button>
            <p className="text-sm text-muted-foreground mt-4 italic">
              Flexible scheduling available | Consultations welcome
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-16 text-center animate-fade-in">
          <p className="text-muted-foreground">
            Have questions? Feel free to reach out before booking to discuss your design ideas, 
            pricing, or any special requests for your appointment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivateAppointments;