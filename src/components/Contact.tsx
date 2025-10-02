import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    botcheck: '' // Honeypot field
  });
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
          subject: "Henna Appointment Request",
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
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "swathi@hennakala.com",
    href: "mailto:swathi@hennakala.com"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Lincoln, Nebraska",
    href: "#"
  }];
  return <section id="contact" className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <div id="lets-connect" className="bg-card rounded-2xl p-8 shadow-float hover:shadow-float-hover transition-all duration-300">
              <h3 className="text-4xl md:text-5xl mb-6 text-gallery-title font-seasons uppercase text-center">LET'S CONNECT!</h3>
              
              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <div>
                  <Label htmlFor="name" className="text-left block mb-2 font-bold" style={{
                  color: '#272725'
                }}>NAME</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label htmlFor="email" className="text-left block mb-2 font-bold" style={{
                  color: '#272725'
                }}>EMAIL</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-left block mb-2 font-bold" style={{
                  color: '#272725'
                }}>PHONE</Label>
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
                  <Label htmlFor="message" className="text-left block mb-2 font-bold" style={{
                  color: '#272725'
                }}>MESSAGE</Label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your henna needs..." 
                    required 
                    rows={4}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                  className="w-full bg-contact-accent hover:bg-contact-accent/90 text-white font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? "SENDING..." : "SUBMIT"}
                </Button>
              </form>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-contact-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.href && info.href !== "#" ? <a href={info.href} className="text-foreground font-medium hover:text-primary transition-colors">
                          {info.value}
                        </a> : <div className="text-foreground font-medium">{info.value}</div>}
                    </div>
                  </div>)}
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
                  <Button variant="floating" onClick={handleInstagramClick} className="w-full">
                    @thehennakala
                  </Button>
                  <Button variant="floating" onClick={handleFacebookClick} className="w-full">
                    facebook.com/thehennakala
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
