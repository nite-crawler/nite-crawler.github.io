import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Intro = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          
          <div className="flex justify-center items-center mb-12">
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
        </div>
      </div>
    </section>
  );
};

export default Intro;