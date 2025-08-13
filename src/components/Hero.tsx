import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/lovable-uploads/3ae05482-62fc-465d-901b-6f9da57bf75e.png)'}}>
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-warm rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-primary rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-primary-glow/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6 flex justify-center">
            <img 
              src="/lovable-uploads/7709a125-45af-4d58-80cc-2ee53945fd6f.png" 
              alt="Henna Kala by Swathi - Professional Henna Artistry"
              className="max-w-md w-full h-auto"
            />
          </div>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{color: '#D17046'}}>
            Transform your hands into masterpieces with our intricate henna designs. 
            Traditional patterns meet contemporary artistry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('gallery')}
              className="px-8 py-4 text-lg"
            >
              View Our Gallery
            </Button>
            <Button 
              variant="floating" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 text-lg"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Floating cards preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { title: "Bridal Designs", desc: "Elaborate patterns for your special day" },
              { title: "Modern Minimalist", desc: "Clean, contemporary henna art" },
              { title: "Traditional Heritage", desc: "Classic motifs passed through generations" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-float hover:shadow-float-hover transition-all duration-300 hover:-translate-y-2 border border-border/50"
                style={{animationDelay: `${idx * 0.2}s`}}
              >
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;