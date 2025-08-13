import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
const Intro = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <div>
      {/* Intro content will go here */}
    </div>
  );
};
export default Intro;