import { Button } from "@/components/ui/button";
import { Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/hennaartistry', '_blank');
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: Mail, label: "Email", value: "hello@hennaartistry.com", href: "mailto:hello@hennaartistry.com" },
    { icon: MapPin, label: "Location", value: "Downtown Studio District", href: "#" },
    { icon: Clock, label: "Hours", value: "Mon-Sat: 10AM-8PM", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Book Your Session
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to adorn your hands with beautiful henna art? Get in touch with us to schedule 
            your appointment or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-float hover:shadow-float-hover transition-all duration-300 h-full">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.href && info.href !== "#" ? (
                        <a 
                          href={info.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-foreground font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Instagram CTA */}
              <div className="bg-gradient-warm rounded-xl p-6 text-center">
                <Instagram className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-primary mb-2">Follow Us on Instagram</h4>
                <p className="text-primary/80 text-sm mb-4">
                  See our latest work and book directly through DM
                </p>
                <Button 
                  variant="floating" 
                  onClick={handleInstagramClick}
                  className="w-full"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  @hennaartistry
                </Button>
              </div>
            </div>
          </div>

          {/* Services & Pricing */}
          <div className="animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-float hover:shadow-float-hover transition-all duration-300 h-full">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Our Services</h3>
              
              <div className="space-y-6">
                {[
                  {
                    name: "Simple Designs",
                    description: "Basic patterns for fingers and palms",
                    duration: "30-45 min",
                    price: "Starting at $25"
                  },
                  {
                    name: "Traditional Patterns",
                    description: "Classic motifs with cultural significance",
                    duration: "1-1.5 hours",
                    price: "Starting at $50"
                  },
                  {
                    name: "Bridal Packages",
                    description: "Elaborate designs for hands and arms",
                    duration: "2-3 hours",
                    price: "Starting at $150"
                  },
                  {
                    name: "Custom Designs",
                    description: "Personalized patterns tailored to you",
                    duration: "1-2 hours",
                    price: "Quote on request"
                  }
                ].map((service, index) => (
                  <div 
                    key={index}
                    className="bg-secondary/50 rounded-xl p-6 hover:bg-secondary/70 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-foreground">{service.name}</h4>
                      <span className="text-primary font-medium text-sm bg-primary-glow/10 px-3 py-1 rounded-full">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{service.description}</p>
                    <div className="text-xs text-muted-foreground">Duration: {service.duration}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-sunset rounded-xl text-center">
                <p className="text-primary-foreground text-sm font-medium">
                  Group bookings and event packages available. Contact us for special pricing!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;