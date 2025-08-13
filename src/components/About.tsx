import { Package, Star, Users, Hand, Leaf, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Leaf, value: "100% NATURAL INGREDIENTS", label: "for pure, honest goodness in every drop" },
    { icon: Shield, value: "NO BLACK HENNA AKA PPD", label: "ingredients you can read, recognize, and trust" },
    { icon: Package, value: "SMALL BATCHES", label: "to ensure quality, freshness, and attention to detail" },
    { icon: Hand, value: "HOME & HAND MADE", label: "Every batch crafted with a personal touch, care and love" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl mb-6 text-gallery-title font-seasons uppercase">
            ABOUT THE ARTIST 
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hi Hennabees! I'm Swathi, a passionate henna artist rooted in tradition, dedicated to sharing the ancient art of mehendi/henna with the world through creativity, skill, and heartfelt respect.
          </p>
        </div>

        <div className="mb-20">
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2 font-seasons tracking-wider" style={{color: '#D17046'}}>MEET THE ARTIST</h3>
                <h2 className="text-3xl text-foreground font-seasons">SWATHI NAMBIAR</h2>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-12 bg-gradient-primary style={{color: '#b64400'}} rounded-full mt-1"></div>
                  <div>
                    <p className="text-muted-foreground font-medium">OWNER & FOUNDER</p>
                    <div className="flex items-start gap-3 w-1 h-2"></div>
                    <p className="bg-gradient-primary style={{color: '#b64400'}} bg-clip-text text-transparent font-medium">Lead Artist</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Henna has been a part of my life for as long as I can remember. I started my journey in my early teenage years, doodling simple curvy lines on my own hands and those of my friends. What began as a playful pastime quickly became something much deeper, an art form that connected me to my culture, creativity, and a sense of calm.
                </p>
                <p>
                  Over the years, those simple lines have grown into intricate designs, each pattern telling a story. Every swirl, dot, and petal I draw is a reflection of my love for this craft. Henna is more than just decoration for me, it's a way to celebrate moments, bring smiles, and share a tradition that has been cherished for generations.
                </p>
                <p>
                  Today, I'm grateful to turn this passion into my work, creating designs that range from delicate and minimal to bold and elaborate. Whether it's for a wedding, a festival, or just because, I pour my heart into every stain, making sure each one feels special.
                </p>
                <p>
                  Henna isn't just something I do, it's a part of who I am.
                </p>
              </div>
            </div>
            <div className="animate-scale-in order-first lg:order-last">
              <div className="relative">
                <img 
                  src="/lovable-uploads/f357b71c-2cf0-4518-914e-48b245f516d1.png" 
                  alt="Swathi Nambiar - Henna Artist"
                  className="w-full h-auto rounded-2xl shadow-float hover:shadow-float-hover transition-all duration-300 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Transform your hands text */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto" style={{color: '#D17046'}}>
            Transform your hands into masterpieces with our intricate henna designs. 
            Traditional patterns meet contemporary artistry.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-card rounded-xl p-6 shadow-float hover:shadow-float-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
