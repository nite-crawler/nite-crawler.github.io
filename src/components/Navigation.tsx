import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: { name: string; id: string; isLink?: boolean }) => {
    if (item.isLink) {
      if (item.id === "events") {
        navigate("/events");
      }
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Events", id: "events", isLink: true },
    { name: "Contact", id: "lets-connect" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-card/90 backdrop-blur-md shadow-float border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => navigate('/')}
          >
            <h1 className="font-seasons text-2xl text-nav-text tracking-wide">
              HENNA KALĀ
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className="text-nav-text hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              variant="warm" 
              size="default"
              className="px-6"
              onClick={() => {
                if (location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => {
                    document.getElementById('lets-connect')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('lets-connect')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              BOOK NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-card/95 backdrop-blur-md rounded-xl mt-2 shadow-float">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className="block w-full text-left px-6 py-2 text-nav-text hover:text-primary hover:bg-secondary/50 transition-all duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
            <div className="px-6 py-2">
              <Button 
                variant="warm" 
                size="sm" 
                className="w-full"
                onClick={() => {
                  if (location.pathname !== "/") {
                    navigate("/");
                    setTimeout(() => {
                      document.getElementById('lets-connect')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else {
                    document.getElementById('lets-connect')?.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsOpen(false);
                }}
              >
                BOOK NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
