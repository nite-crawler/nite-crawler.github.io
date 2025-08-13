import { Package, Hand, Leaf, Shield } from "lucide-react";
const HennaCones = () => {
  const stats = [{
    icon: Leaf,
    value: "100% NATURAL INGREDIENTS",
    label: "for pure, honest goodness in every drop"
  }, {
    icon: Shield,
    value: "NO PPD AKA BLACK HENNA",
    label: "ingredients you can read, recognize, and trust"
  }, {
    icon: Package,
    value: "CRAFTED IN SMALL BATCHES",
    label: "to ensure quality, freshness, and attention to detail"
  }, {
    icon: Hand,
    value: "HOME-MADE &\nHAND-FINISHED",
    label: "Every batch crafted with a personal touch, care and love"
  }];
  return <section id="henna-cones" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Our Henna Cones heading */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 style={{
          color: '#D17046'
        }} className="text-3xl font-seasons uppercase tracking-wider text-center font-thin text-[#dbbe97] md:text-5xl">
            Our Henna Cones
          </h2>
        </div>

        {/* Transform your hands text */}
        <div className="text-center mb-16 animate-fade-in">
          <p style={{
          color: '#D17046'
        }} className="text-xl leading-relaxed max-w-3xl mx-auto font-extralight text-center md:text-xl text-[#272725]">Transform your hands into masterpieces with our intricate henna designs. Achieve flawless detail and rich color every time with our premium henna cone — the artist's top choice.</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => <div key={index} className="text-center bg-card rounded-xl p-6 shadow-float hover:shadow-float-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{
            backgroundColor: '#b64400'
          }}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-lg font-bold mb-2" style={{
            color: '#8d3218'
          }}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium text-center">{stat.label}</div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default HennaCones;