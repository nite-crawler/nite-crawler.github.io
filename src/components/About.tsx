import { Star, Users } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl mb-6 text-gallery-title font-seasons uppercase font-thin">
            ABOUT THE ARTIST 
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-extralight text-[#272725]">Hi Hennabees! I'm Swathi, a passionate henna artist rooted in tradition, dedicated to sharing the ancient art of mehendi or henna with the world through creativity, skill, and heartfelt respect.</p>
        </div>

        <div className="mb-20">
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <div className="mb-6">
                <h3 style={{
                color: '#D17046'
              }} className="text-lg font-bold mb-2 font-seasons tracking-wider text-[#272725]">MEET THE ARTIST</h3>
                <h2 className="text-3xl text-foreground font-seasons">SWATHI NAMBIAR</h2>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-12 bg-gradient-primary rounded-full mt-1"></div>
                  <div className="px-0 py-0 rounded-sm">
                    <p className="font-medium text-[#272725] py-px">
OWNER &amp; FOUNDER</p>
                    <div className="flex items-start gap-2 w-1 h-2"></div>
                    <p style={{
                    color: '#D17046'
                  }} className="font-medium text-[3] flex items-start gap-3 px-0 py-0 my-0 text-[#cb6829]">Lead Artist</p>
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
                <img src="/lovable-uploads/f357b71c-2cf0-4518-914e-48b245f516d1.png" alt="Swathi Nambiar - Henna Artist" className="w-full h-auto rounded-2xl shadow-float hover:shadow-float-hover transition-all duration-300 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
