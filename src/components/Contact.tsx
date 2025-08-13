import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/thehennakala', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/thehennakala', '_blank');
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "swathi@hennakala.com", href: "mailto:swathi@hennakala.com" },
    { icon: MapPin, label: "Location", value: "Lincoln, Nebraska", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl mb-6 text-gallery-title font-seasons uppercase">
            Ready, Set, Henna — Book Now!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to adorn your hands with beautiful henna art? Get in touch with us to schedule your appointment or ask any questions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-float hover:shadow-float-hover transition-all duration-300">
              <h3 className="text-4xl md:text-5xl mb-6 text-gallery-title font-seasons uppercase text-center">LET'S CONNECT!</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-contact-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-white" />
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

              {/* Social Media CTA */}
              <div className="bg-contact-accent rounded-xl p-6 text-center">
                <div className="flex justify-center space-x-4 mb-4">
                  <Instagram className="w-8 h-8 text-white" />
                  <Facebook className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Stay connected with the Hennabees — follow us for all the latest!</h4>
                <p className="text-white/80 text-sm mb-4">
                  Spot a design you love? DM us to lock in your henna fun!
                </p>
                <div className="space-y-3">
                  <Button 
                    variant="floating" 
                    onClick={handleInstagramClick}
                    className="w-full"
                  >
                    @thehennakala
                  </Button>
                  <Button 
                    variant="floating" 
                    onClick={handleFacebookClick}
                    className="w-full"
                  >
                    Visit Our Facebook Page
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
