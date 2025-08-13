import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
const Intro = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Empty intro section for now */}
      </div>
    </section>
  );
};
export default Intro;