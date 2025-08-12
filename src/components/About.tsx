import { Heart, Star, Users, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Star, value: "5 Years", label: "Experience" },
    { icon: Heart, value: "1000+", label: "Designs Created" },
    { icon: Award, value: "100%", label: "Natural Henna" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Our Artistry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are passionate henna artists dedicated to bringing the ancient art of mehndi 
            into the modern world with creativity, skill, and respect for tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Section */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a deep love for the traditional art of henna, our studio brings together 
                centuries-old techniques with contemporary design sensibilities. We believe that every 
                henna design should be as unique as the person wearing it.
              </p>
              <p>
                Our journey began as a small family tradition and has grown into a celebrated art form 
                that spans cultures and generations. We use only the finest, 100% natural henna paste, 
                ensuring beautiful, safe, and long-lasting designs.
              </p>
              <p>
                From intimate gatherings to grand celebrations, we've had the privilege of adorning 
                hands and hearts with meaningful, beautiful henna art that tells each client's unique story.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-card rounded-2xl p-8 shadow-float hover:shadow-float-hover transition-all duration-300 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Our Values</h3>
            <div className="space-y-6">
              {[
                {
                  title: "Authentic Artistry",
                  desc: "Honoring traditional techniques while embracing creative innovation"
                },
                {
                  title: "Natural Beauty",
                  desc: "Using only pure, organic henna for safe and stunning results"
                },
                {
                  title: "Personal Touch",
                  desc: "Every design is customized to reflect your personality and style"
                },
                {
                  title: "Cultural Respect",
                  desc: "Celebrating the rich heritage and meaning behind henna traditions"
                }
              ].map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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