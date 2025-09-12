import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Instagram, Facebook, Mail, MapPin, Clock, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BookNow = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    botcheck: '' // Honeypot field
  });

  useEffect(() => {
    // Set page-specific meta tags
    document.title = "Book Now - Henna Kala by Swathi | Professional Mehendi Artist";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Book your professional henna appointment with Swathi. Traditional and modern mehendi designs for bridal, festivals, and special occasions in Lincoln, Nebraska.');
    }

    // Add keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'book henna appointment, mehendi booking, bridal henna booking, Lincoln Nebraska henna artist, Swathi henna appointment, henna session booking');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot spam protection - if this field is filled, it's likely spam
    if (formData.botcheck) {
      console.log("Spam detected");
      return; // Silently reject spam
    }
    
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "0dbaf878-ecc0-4e60-afad-dfe2cb940d18",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "Henna Appointment Request - Book Now Page",
          botcheck: formData.botcheck, // Include honeypot field
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Appointment Request Sent!",
          description: "We'll get back to you soon to confirm your henna appointment.",
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          botcheck: ''
        });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send appointment request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/thehennakala', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/thehennakala', '_blank');
  };

  const services = [
    {
      title: "Bridal Henna",
      description: "Intricate traditional designs for your special day",
      duration: "2-4 hours",
      icon: Star
    },
    {
      title: "Festival Mehendi", 
      description: "Beautiful patterns for celebrations and festivals",
      duration: "30min - 2 hours",
      icon: Star
    },
    {
      title: "Custom Designs",
      description: "Personalized henna art tailored to your preferences",
      duration: "1-3 hours", 
      icon: Star
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "swathi@hennakala.com",
      href: "mailto:swathi@hennakala.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lincoln, Nebraska",
      href: "#"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-7xl mb-6 text-gallery-title font-seasons uppercase">
                Book Your Henna Session
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 font-extralight text-foreground">
                Ready to adorn yourself with beautiful henna art? Let's create something magical together. 
                Fill out the form below and we'll get back to you within 24 hours to schedule your perfect henna experience.
              </p>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl text-center mb-12 text-gallery-title font-seasons uppercase">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-background rounded-2xl p-6 shadow-float hover:shadow-float-hover transition-all duration-300">
                  <div className="w-12 h-12 bg-contact-accent rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-3">{service.description}</p>
                  <p className="text-sm text-contact-accent font-medium">Duration: {service.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl mb-6 text-gallery-title font-seasons uppercase">
                  Ready, Set, Henna!
                </h2>
                <p className="text-lg text-muted-foreground">
                  Tell us about your henna vision and we'll make it happen
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-float hover:shadow-float-hover transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-left block mb-2 font-bold text-foreground">
                        FULL NAME *
                      </Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-left block mb-2 font-bold text-foreground">
                        EMAIL ADDRESS *
                      </Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-left block mb-2 font-bold text-foreground">
                      PHONE NUMBER
                    </Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel"
                      pattern="[0-9\s\-\+\(\)]*"
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-left block mb-2 font-bold text-foreground">
                      TELL US ABOUT YOUR HENNA VISION *
                    </Label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="What type of henna design are you looking for? Any special occasion? Preferred date/time? Any specific requests?"
                      required 
                      rows={5}
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="botcheck"
                    value={formData.botcheck}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-contact-accent hover:bg-contact-accent/90 text-white font-semibold text-lg py-6"
                    disabled={isLoading}
                  >
                    {isLoading ? "SENDING REQUEST..." : "SEND BOOKING REQUEST"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl text-center mb-12 text-gallery-title font-seasons uppercase">
                Get In Touch
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-contact-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    {info.href && info.href !== "#" ? (
                      <a href={info.href} className="text-foreground font-medium hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-medium">{info.value}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Media Section */}
              <div className="bg-contact-accent rounded-2xl p-8 text-center">
                <div className="flex justify-center space-x-6 mb-6">
                  <Instagram className="w-10 h-10 text-white" />
                  <Facebook className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Follow Our Henna Journey</h3>
                <p className="text-white/90 mb-6 text-lg">
                  See our latest designs and get inspired! Spot something you love? DM us to book your session.
                </p>
                <div className="space-y-3">
                  <Button variant="floating" onClick={handleInstagramClick} className="w-full max-w-sm mx-auto block">
                    @thehennakala
                  </Button>
                  <Button variant="floating" onClick={handleFacebookClick} className="w-full max-w-sm mx-auto block">
                    facebook.com/thehennakala
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookNow;